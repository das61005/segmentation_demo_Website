require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('資料庫連線失敗:', err);
  } else {
    console.log('資料庫連線成功:', res.rows[0]);
  }
});

module.exports = pool;
