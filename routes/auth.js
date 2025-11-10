const express = require('express');
const router = express.Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 註冊
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
    res.json({ message: '登録成功' });
  } catch (err) {
    res.status(400).json({ error: 'ユーザー名が既に存在します' });
  }
});

// 登入
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  const user = result.rows[0];
  if (!user) return res.status(401).json({ error: 'ユーザーが見つかりません' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'パスワードが違います' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
  res.json({ message: 'ログイン成功', token });
});

module.exports = router;
