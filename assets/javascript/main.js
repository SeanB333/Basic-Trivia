$(document).ready(function () {



    
    var questionArray= ["Who hit the first home run at new yankees stadium", 
    "Before switching to 23, what number did Don Mattingly wear",
    "Who was the longest tenured Yankee Captian" ];
    var answerArray = [["Derek Jeter", "Jorge Posada","Alex Rodriguez", "Hideki Matsui"] ];
    var correctAnswerArray = ["Jorge Posada"];
    var right = 0;
    var wrong = 0;
    var qCounter = 0;


    // start the game
    function startGame() {

        startScreen = '<h1>Start Game</h1><a class="btn btn-primary btn-lg btn-block start mt-5" href="#" role="button">Start Game</a>'
        $("#container").html(startScreen);

    }
    startGame();

    

    // build the time counter

    function timer() {
        counter = setInterval(myTime, 1000);
        timeLeft = 30;

        function myTime() {
            var timeClock = timeLeft.toString();
            timeLeft--;
            $(".timer").html(timeClock);
            if(timeLeft === 0){
                clearInterval(counter);
            }
        }
    }

    // list of functions


    function guessRight() {
        right++;
    }

    function guessWrong() {
        wrong++;
    }

    function questionBox(){
        gameBox = "<p><h1>Time Left: <span class='timer'>" + timeLeft + "</span></h1></p><p><h2>" + questionArray[qCounter] + "</h2></p><p><h3>" + answerArray[qCounter][0] + "</h3></p><p><h3>" + answerArray[qCounter][1] + "</h3></p><p><h3>" + answerArray[qCounter][2] + "</h3></p><p><h3>" + answerArray[qCounter][3] + "</h3></p>";
        $("#container").html(gameBox);

    }

    $("#container").on("click", ".start", function () {
        // start timer
        timer();
        // question
       questionBox();
       
        
    });       
        
    
    



});