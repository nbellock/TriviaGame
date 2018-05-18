var totalSeconds = 60 * 10;
var minutes = parseInt(totalSeconds / 60);
var seconds = parseInt(totalSeconds % 60);

function checkTime() {
    document.getElementById("quiz-time-left").innerHTML = "Time Left: " + minutes + " minutes " + seconds + " seconds";
    if (totalSeconds <= 0) {
        setTimeout("document.quiz.submit()", 1);
    } else {
        totalSeconds = totalSeconds - 1;
        minutes = parseInt(totalSeconds / 60);
        seconds = parseInt(totalSeconds % 60);
        setTimeout("checkTime()", 1000);
    }
}
setTimeout("checkTime()", 1000)