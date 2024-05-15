document.addEventListener('DOMContentLoaded', function() {
    countdown();
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = "home.html";
    });
});

let cardsFlipped = 0;
let flippedCard1 = null;
let flippedCard2 = null;
let totalPairsFound = 0;
let gameCountdown = 60; // Renamed to avoid confusion with countdown function
let timerInterval;

function countdown() {
    let count = 3; // Starting countdown from 3
    let countText = document.getElementById("countText");
    let interval = setInterval(function() {
        if (count === 0) {
            shuffleCards();
            countText.remove();
            document.getElementById("cardArea").style.visibility = "visible";
            timer();
            clearInterval(interval);
        } else {
            countText.innerHTML = count;
            count--;
        }
    }, 1000);
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function shuffleCards() {
    let images = [];
    for (let i = 1; i <= 10; i++) {
        images.push("images/card" + i + ".jpeg");
        images.push("images/card" + i + ".jpeg");
    }
    shuffle(images);
    for (let i = 0; i < 20; i++) {
        document.getElementById('card' + i).dataset.cardImage = images[i];
    }
}

function flipCard(cardID) {
    let card = document.getElementById(cardID);
    if (cardsFlipped < 2 && card.src.includes('cardflipped.jpg')) {
        cardsFlipped++;
        card.src = card.dataset.cardImage;
        if (cardsFlipped == 1) {
            flippedCard1 = card;
        } else {
            flippedCard2 = card;
            setTimeout(function() {
                if (flippedCard1.src === flippedCard2.src) {
                    totalPairsFound++;
                    if (totalPairsFound === 10) {
                        endGame("Congratulations, you matched all pairs!");
                    }
                } else {
                    flippedCard1.src = "images/cardflipped.jpg";
                    flippedCard2.src = "images/cardflipped.jpg";
                }
                flippedCard1 = null;
                flippedCard2 = null;
                cardsFlipped = 0;
            }, 1000);
        }
    }
}

function updateTimer() {
    gameCountdown--;
    document.getElementById('timerText').textContent = "Time left: " + gameCountdown + "s";
    if (gameCountdown <= 0) {
        clearInterval(timerInterval);
        endGame("You Lost!");
    }
}

function timer() {
    timerInterval = setInterval(updateTimer, 1000);
}


function endGame(message) {
    alert(message);
    clearInterval(timerInterval);
    // Store the result in localStorage
    localStorage.setItem('gameResult', message);
    // Redirect to the result page
    window.location.href = 'resultSingle.html';

    
}
   
