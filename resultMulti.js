const resultMessage = localStorage.getItem('resultMessage') || "No Result";
const player1Score = localStorage.getItem('player1Score') || "0";
const player2Score = localStorage.getItem('player2Score') || "0";

document.getElementById('resultMessage').textContent = resultMessage;
document.getElementById('player1Score').textContent = 'Player 1 Score: ' + player1Score;
document.getElementById('player2Score').textContent = 'Player 2 Score: ' + player2Score;
        
        // Add event listener to replay button
document.getElementById('replayButton').addEventListener('click', function() {
window.location.href = 'home.html';
});