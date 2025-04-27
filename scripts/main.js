document.getElementById('joinForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const code = document.getElementById('gameCode').value.trim();
  if (code) {
    window.location.href = `play.html?code=${code}`;
  }
});
