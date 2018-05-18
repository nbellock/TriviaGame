var questions = [{
    "question": "Ask Question 1",
    "option1": "Answer 1",
    "option2": "Answer 2",
    "option3": "Answer 3",
    "option4": "Answer 4",
    "answer": "2"

}, {
    "question": "Ask Question Z",
    "option1": "Answer A",
    "option2": "Answer B",
    "option3": "Answer C",
    "option4": "Answer D",
    "answer": "4"
}]

//Global Variables

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
// var container = $('#quizContainer');
var questionEl = document.getElementById('question');
// var questionEl = $('#question');
var opt1 = document.getElementById('opt1');
// var opt1 = $('#opt1');
var opt2 = document.getElementById('opt2');
// var opt2 = $('#opt2');
var opt3 = document.getElementById('opt3');
// var opt3 = $('#opt3');
var opt4 = document.getElementById('opt4');
// var opt4 = $('#opt4');
var nextButton = document.getElementById('nextButton');
// var nextButton = $('#nextButton');
var resultCont = document.getElementById('result');
// var resultCont = $('#result');

//Function to load question using the array index for the questions
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.text.content = q.option1;
    opt2.text.content = q.option2;
    opt3.text.content = q.option3;
    opt4.text.content = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert("Please select your answer");
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {

    }
    score += 10;
    alert("+10");


    //before the last question change the button to "FINISH"
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    //only called after the final question to get the score
    if (currentQuestion == totalQuestions) {
        container.style.display = "none";
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;

    }
    loadNextQuestion(currentQuestion);
}
loadNextQuestion(currentQuestion);