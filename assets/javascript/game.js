$(document).ready(function () {

    let yourScore = 0;
    let wins = 0;
    let losses = 0;


    //assigns random number to score player has to match
    let scoreMatch = getRandomInt(19, 120)

    // randomizes each button's value
    let crystal1 = getRandomInt(1, 12)

    let crystal2 = getRandomInt(1, 12)

    let crystal3 = getRandomInt(1, 12)

    let crystal4 = getRandomInt(1, 12)

    // generates random whole number between 19 and 120 inclusive
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // resets the random numbers after a win or loss
    function roundStart() {

        scoreMatch = getRandomInt(19, 120)

        crystal1 = getRandomInt(1, 12)

        crystal2 = getRandomInt(1, 12)

        crystal3 = getRandomInt(1, 12)

        crystal4 = getRandomInt(1, 12)

        yourScore = 0;

        $("#matchDiv").text(scoreMatch);

        $("#scoreDiv").text(yourScore);
    }

    // win/loss conditions for end of round
    function gamePlay() {
        $("#scoreDiv").text(yourScore);
        if (yourScore == scoreMatch) {
            wins++;
            $("#winsDiv").text(wins);
            roundStart()
        }

        if (yourScore > scoreMatch) {
            losses++;
            $("#lossesDiv").text(losses);
            roundStart()
        }
    }

    //puts scoring variables into the scoreboard HTML elements
    $("#matchDiv").text(scoreMatch);

    $("#scoreDiv").text(yourScore);

    $("#winsDiv").text(wins);

    $("#lossesDiv").text(losses);


    //onclick event for adding score to total for each crystal
    $("#gem1").on("click", function () {
        yourScore += crystal1;
        gamePlay();
    });


    $("#gem2").on("click", function () {
        yourScore += crystal2;
        gamePlay();
    });


    $("#gem3").on("click", function () {
        yourScore += crystal3;
        gamePlay();
    });


    $("#gem4").on("click", function () {
        yourScore += crystal4;
        gamePlay();
    });


});

//Link to updated portfolio with this game added to the portfolio page:
// https://dirk-kiesewetter.github.io/Responsive-Portfolio/portfolio.html