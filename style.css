/* Reset и базовые стили */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

header h1 {
  font-weight: 700;
  font-size: 2.8rem;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  margin-bottom: 8px;
}

header p {
  font-weight: 400;
  font-size: 1.1rem;
  color: #ddd;
}

main {
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 30px 35px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  animation: fadeInUp 0.8s ease forwards;
}

.card h2 {
  margin-top: 0;
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 15px;
  position: relative;
}

.card h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 70px;
  height: 4px;
  background: #ff6a00;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.card h2:hover::after {
  width: 120px;
}

.info {
  font-size: 1.3rem;
  margin-bottom: 20px;
  min-height: 32px;
}

.info.loading {
  color: #ffa500;
}

.btn {
  background: #ff6a00;
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(255, 106, 0, 0.6);
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn:disabled {
  background: #aa5e00;
  cursor: not-allowed;
  box-shadow: none;
}

.btn:not(:disabled):hover {
  background: #e85c00;
  transform: scale(1.05);
}

/* Speed test iframe */
.speed-widget-wrapper iframe {
  width: 100%;
  height: 320px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
}

/* Footer */
footer {
  margin-top: 50px;
  text-align: center;
  font-size: 0.85rem;
  color: #bbb;
}

/* Анимация */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптив */
@media (max-width: 480px) {
  body {
    padding: 15px;
  }
  .card {
    padding: 25px 20px;
  }
  header h1 {
    font-size: 2.2rem;
  }
  .btn {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
