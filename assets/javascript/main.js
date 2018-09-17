$(document).ready(function () {




    var questionArray = ["Who hit the first home run at new yankees stadium",
        "Before switching to 23, what number did Don Mattingly wear",
        "Who was the longest tenured Yankee Captian",
        "This Yankee was the first relief pitcher to win the American League Cy Young Award",
        "Whose errant throw did Jeter save on the Flip Play in the 2001 division series?"

    ];
    var answerArray = [
        ["Derek Jeter", "Jorge Posada", "Alex Rodriguez", "Hideki Matsui"],
        ["33", "46", "2", "21"],
        ["Derek Jeter", "Loy Gehrig", "Don Mattingly", "Babe Ruth"],
        ["Rich Gossage", "Mariano Rivera", "Sparky Lyle", "Mark Teixeira"],
        ["David Justice", "Shane Spencer", "Gerald Williams", "Paul O Niel"]
    ];
    var correctAnswerArray = ["Jorge Posada", "46", "Derek Jeter", "Sparky Lyle", "Shane Spencer"];
    var right = 0;
    var wrong = 0;
    var qCounter = 0;
    var timeLeft = 30;

    // start the game
    function startGame() {

        startScreen = '<h1>Start Game</h1><a class="btn btn-primary btn-lg btn-block start mt-5" href="#" role="button">Start Game</a>'
        $("#container").html(startScreen);

    }
    startGame();



    // build the time counter

    function timer() {
        counter = setInterval(myTime, 1000);

        function myTime() {
            $(".timer").html(timeLeft);
            if (timeLeft === 0) {
                clearInterval(counter);
                guessWrong();
            }
            if (timeLeft > 0)
                timeLeft--;
        }
    }

    // list of functions

    function reset() {
        qCounter = 0;
        right = 0;
        wrong = 0;
        timeLeft = 30;
        startGame();

    }

    function guessRight() {
        right++;
        gameBoxRight = "<p><h1>Correct</h1></p><p><h3>The answer is :" + correctAnswerArray[qCounter] + "</h3></p>";
        $("#container").html(gameBoxRight);
        setTimeout(count, 5000);

    }

    function guessWrong() {
        wrong++;
        gameBoxWrong = "<p><h1>Wrong Answer</h1></p><p><h3>The Correct Answer is:" + correctAnswerArray[qCounter] + "</h3></p>";
        $("#container").html(gameBoxWrong);
        setTimeout(count, 5000);
    }

    function count() {
        if (qCounter < 5) {
            qCounter++;
            timer();
            questionBox();
            timeLeft = 30;
        }
    }

    function questionBox() {
        gameBox = "<p><h1>Time Left: <span class='timer'>" + timeLeft + "</span></h1></p><p><h2>" + questionArray[qCounter] + "</h2></p><p><h3 class='answer'>" + answerArray[qCounter][0] + "</h3></p><p><h3 class='answer'>" + answerArray[qCounter][1] + "</h3></p><p><h3 class='answer'>" + answerArray[qCounter][2] + "</h3></p><p><h3 class='answer'>" + answerArray[qCounter][3] + "</h3></p>";
        $("#container").html(gameBox);


    }
    // initialize game screen
    $("#container").on("click", ".start", function () {
        timer();
        questionBox();

    });
    //  ask question
    $("#container").on("click", ".answer", function () {
        selectAnswer = $(this).text();
        console.log("this is the quest count" + qCounter);
        console.log(correctAnswerArray[qCounter]);
        console.log(selectAnswer);

        if (selectAnswer === correctAnswerArray[qCounter]) {
            clearInterval(counter);
            guessRight();
        } else {
            clearInterval(counter);
            guessWrong();
        }

    });






});