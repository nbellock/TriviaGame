function QuizQuestion(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}

var allQuestions = [
    new QuizQuestion("A Palamino horse is", ["dark brown", "gray", "black", "light brown"], 3),
    new QuizQuestion("A horse has how many gaits", ["4", "3", "5", "6"], 0),
    new QuizQuestion("The gestation period of a horse is", ["270 days", "300 days", "350 days", "320 days"], 3),
    new QuizQuestion("What is the world record for highest jump", ["1.40m", "1.72m", "1.60m", "1.50m"], 1),
    new QuizQuestion("What is a female horse called", ["mare", "gelding", "stallion", "foal"], 0),
    new QuizQuestion("What is a male horse called", ["mare", "gelding", "stallion", "foal"], 1),
    new QuizQuestion("What is a baby horse called", ["mare", "gelding", "stallion", "foal"], 3),
    new QuizQuestion("What is the size of the biggest horse", ["64.8 inches", "64 inches", "60.8 inches", "80 inches"], 3),
    new QuizQuestion("How many different kinds of horse sports are there", ["5", "50", "20", "2"], 1),
    new QuizQuestion("Horses have how many legs", ["2", "4", "8", "12"], 1),
]


var currentquestion = 0;
var correctAnswers = 0;




function setupOptions() {
    $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
    var options = allQuestions[currentquestion].choices;
    var formHtml = '';
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $(".options:eq(0)").prop('checked', true);
}



function checkAns() {
    if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
        correctAnswers++;
    }
}

$(document).ready(function () {

    var $jumbotron = $(".jumbotron");
    var $start = $("#start");
    var $progressbar = $("#progressbar");
    var $next = $("#next");
    var $result = $("#result");

    $jumbotron.hide();
    $start.click(function () {
        $jumbotron.fadeIn();
        $(this).hide();
    });

    $(function () {
        $progressbar.progressbar({
            max: allQuestions.length - 1,
            value: 0
        });
    });

    setupOptions();

    $next.click(function () {
        event.preventDefault();
        checkAns();
        currentquestion++;
        $(function () {
            $progressbar.progressbar({
                value: currentquestion
            });
        });
        if (currentquestion < allQuestions.length) {
            setupOptions();
            if (currentquestion == allQuestions.length - 1) {
                $next.html("Submit");
                $next.click(function () {
                    $jumbotron.hide();
                    $result.html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
                    $result.fadeIn(1500);
                });


            }

        };
    });
});