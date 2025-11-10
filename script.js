async function getSegmentation() {
  const fileInput = document.getElementById('image-input');
  const file = fileInput.files[0];
  if (!file) {
    alert('画像を選択してください');
    return;
  }

  // 元画像を表示
  const originalUrl = URL.createObjectURL(file);
  document.getElementById('original-image').src = originalUrl;

  const formData = new FormData();
  formData.append('image', file);

  const API_URL = 'https://breathing51522-unet-carotid-segmentation.hf.space/predict';
  document.getElementById('loading').style.display = 'block';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const imageBlob = await response.blob();
      const imageUrl = URL.createObjectURL(imageBlob);
      document.getElementById('result-image').src = imageUrl;
    } else {
      const errorData = await response.json();
      alert('解析失敗: ' + errorData.error);
    }
  } catch (error) {
    alert('通信エラーです。ネットワークを確認するか、管理者に連絡してください。');
    console.error(error);
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
}
function checkLogin() {
  const username = localStorage.getItem('username');
  if (!username) {
    alert('ログインしてください');
    window.location.href = 'login.html';
  } else {
    document.getElementById('welcome-message').textContent = `${username} さん、ようこそ！`;
  }
}
