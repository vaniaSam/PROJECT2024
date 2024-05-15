document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the game result from localStorage
    const resultMessage = localStorage.getItem('gameResult') || "No Result";

    // Display the result message
    document.getElementById('resultMessage').textContent = resultMessage;

    // Add event listener to replay button
    document.getElementById('replayButton').addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});

