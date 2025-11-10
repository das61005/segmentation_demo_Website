function login() {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('ユーザー名を入力してください');
    return;
  }

  // ローカルストレージに保存（簡易セッション）
  localStorage.setItem('username', username);

  // index.html に遷移
  window.location.href = 'index.html';
}
