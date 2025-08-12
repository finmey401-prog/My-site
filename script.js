async function fetchIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const ip = data.ip || 'неизвестно';
    const city = data.city || 'неизвестно';
    const country = data.country_name || 'неизвестно';

    document.getElementById('ip-info').textContent = 
      `Ваш IP: ${ip}, Город: ${city}, Страна: ${country}`;

    window.currentIP = ip;
  } catch {
    document.getElementById('ip-info').textContent = 'Не удалось получить IP.';
  }
}

document.getElementById('copy-ip-btn').addEventListener('click', () => {
  if (window.currentIP) {
    navigator.clipboard.writeText(window.currentIP)
      .then(() => alert('IP адрес скопирован в буфер обмена'))
      .catch(() => alert('Не удалось скопировать IP'));
  }
});

function speedTest() {
  const startTime = Date.now();
  let downloadedBytes = 0;
  const image = new Image();
  const cacheBuster = "?nn=" + startTime;
  const testImageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" + cacheBuster;

  image.onload = () => {
    const duration = (Date.now() - startTime) / 1000;
    const bitsLoaded = downloadedBytes * 8;
    const speedBps = bitsLoaded / duration;
    const speedKbps = speedBps / 1024;
    const speedMbps = speedKbps / 1024;

    document.getElementById('speed-result').textContent = 
      `Примерная скорость загрузки: ${speedMbps.toFixed(2)} Мбит/с`;
  };

  image.onerror = () => {
    document.getElementById('speed-result').textContent = 'Ошибка при тестировании скорости.';
  };

  downloadedBytes = 1600000;
  image.src = testImageUrl;
}

document.getElementById('start-speed-test').addEventListener('click', () => {
  document.getElementById('speed-result').textContent = 'Тест скорости начат...';
  speedTest();
});

fetchIP();
