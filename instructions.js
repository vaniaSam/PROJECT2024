function goBack() {
    window.location.href = "home.html"
}

// create an update Timer function so that it can be passed through setInterval()
var countdown = 60;
function updateTimer() {
    countdown--;
    var timerId = document.getElementById('-id-of-timer-in-html');

    // ensures that the output displayed is updating every second
    timerId.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(timerInterval);
        timerEnd();
    }
}

function timer() {
    // Call the updateTimer function immediately to update the timer initially. if we dont add this
    // the timer won't display the initial countdown value until 1 second after the page loads.
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
}

function timerEnd() {
    // need to add what occurs once timer ends; Players

}