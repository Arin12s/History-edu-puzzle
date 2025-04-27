async function loadPuzzle() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (!code) {
    document.getElementById('gameArea').innerHTML = "<h1>Kode tidak ditemukan!</h1>";
    return;
  }
  try {
    const res = await fetch(`puzzles/${code}.json`);
    const data = await res.json();
    startGame(data);
  } catch (error) {
    document.getElementById('gameArea').innerHTML = "<h1>Puzzle tidak ditemukan!</h1>";
  }
}

function startGame(data) {
  document.getElementById('gameArea').innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.image}" style="max-width: 100%;"><br>
    <p><strong>Timer:</strong> <span id="timer">${data.timer}</span> detik</p>
    <div id="description" style="display:none;">${data.description}</div>
  `;

  let timeLeft = data.timer;
  const timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('description').style.display = 'block';
    }
  }, 1000);
}

loadPuzzle();
