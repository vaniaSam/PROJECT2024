function startButton() {
    var gameModes = document.getElementById('gameModes');
    if (!gameModes) {
        gameModes = document.createElement('div');
        gameModes.id = 'gameModes';
        gameModes.innerHTML = `
            <button onclick="location.href='single.html'">Single Player Mode</button>
            <button onclick="location.href='multi.html'">Multi Player Mode</button>
        `;
        document.body.appendChild(gameModes);
    } else {
        gameModes.style.display = gameModes.style.display === 'none' ? 'block' : 'none';
    }
}

function instructions() {
    window.location.href = 'instructions.html';
}
