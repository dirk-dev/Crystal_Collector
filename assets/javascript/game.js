$(document).ready(function () {


    var button1 = 0;
    var button2 = 0;
    var button3 = 0;
    var button4 = 0;

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    // generates random whole number between 19 and 120 inclusive
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //assigns random number to score player has to match
    var scoreMatch = getRandomInt(19, 120)
    console.log(scoreMatch);

    /* 

    Pseudocode for Unit 4 game

    * At start of game - generate random score player must 
    * match(between 19 and 120), and generate random value 
    * for each button (between 1 and 12).

    * capture user clicks on each button, add the click to
    * the total score.
    
    * update the total score on screen, and compare to total 
    * score needed. If user score > total score, continue 
    * updating score;
    * 
    * if user score = total score needed, wins++, reset random 
    * values, * else losses++ and reset random values


    Intialize game with random score and random #s for each gem


    */




});