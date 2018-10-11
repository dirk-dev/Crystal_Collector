$(document).ready(function () {

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    // generates random whole number between 19 and 120 inclusive
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //assigns random number to score player has to match
    var scoreMatch = getRandomInt(19, 120)
    console.log("score to match is: " + scoreMatch);

    // randomizes each button's value
    var button1 = getRandomInt(1, 12)
    console.log("button1 value is: " + button1);

    var button2 = getRandomInt(1, 12)
    console.log("button2 value is: " + button2);

    var button3 = getRandomInt(1, 12)
    console.log("button3 value is: " + button3);

    var button4 = getRandomInt(1, 12)
    console.log("button4 value is: " + button4);

    //puts variables into the scoreboard divs
    $("#matchDiv").text(scoreMatch);

    $("#scoreDiv").text(yourScore);

    $("#winsDiv").text(wins);

    $("#lossesDiv").text(losses);

    //sets up crystal images as buttons
    var button1 = $("<button>");
    $("#gem1").append(button1);

    $("#gem1").on("click", function(){
        alert("You clicked me!")
    });

    var button2 = $("button");
    $("#gem2").append(button2);

    $("#gem2").on("click", function(){
        alert("You clicked me!")
    });

    var button3 = $("button");
    $("#gem3").append(button3);

    $("#gem3").on("click", function(){
        alert("You clicked me!")
    });

    var button4 = $("button");
    $("#gem4").append(button4);

    $("#gem4").on("click", function(){
        alert("You clicked me!")
    });
    
    
    
    


    // ------------during the game loop

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