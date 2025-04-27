document.getElementById('createForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const puzzleName = document.getElementById('puzzleName').value.trim();
  const puzzleImage = document.getElementById('puzzleImage').files[0];
  const timer = document.getElementById('timer').value;
  const description = document.getElementById('description').value.trim();
  
  if (puzzleName && puzzleImage && timer && description) {
    const data = {
      title: puzzleName,
      image: `puzzles/gambar/${puzzleImage.name}`,
      timer: parseInt(timer),
      description: description
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${puzzleName}.json`;
    a.click();
  }
});
