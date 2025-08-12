// Получаем IP с ipapi.co, показываем данные и активируем кнопку копирования
async function fetchIP() {
  const ipInfoEl = document.getElementById('ip-info');
  const copyBtn = document.getElementById('copy-ip-btn');

  try {
    const res = await fetch('https://ipapi.co/json/');
    if(!res.ok) throw new Error('Ошибка сети');

    const data = await res.json();
    const ip = data.ip || 'неизвестно';
    const city = data.city || 'неизвестно';
    const country = data.country_name || 'неизвестно';

    ipInfoEl.textContent = `IP: ${ip} — ${city}, ${country}`;
    ipInfoEl.classList.remove('loading');

    copyBtn.disabled = false;

    copyBtn.onclick = () => {
      navigator.clipboard.writeText(ip)
        .then(() => alert('IP адрес скопирован!'))
        .catch(() => alert('Не удалось скопировать IP'));
    };
  } catch (e) {
    ipInfoEl.textContent = 'Не удалось получить IP.';
    ipInfoEl.classList.remove('loading');
    copyBtn.disabled = true;
  }
}

window.onload = () => {
  fetchIP();
};
