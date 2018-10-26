// Crytals random number generator 1-12 - CONSOLE LOG
$(document).ready(function() {


    function generateRandomNumber(min, max) {
        return parseInt(Math.floor(Math.random() * (max - min)) + min);
    }
    
    var randomNumber = generateRandomNumber(18, 120);

    $("#randomNumber").text(randomNumber);

    totalScore = 0;
    $("#totalScore").text(totalScore);
    console.log(totalScore, randomNumber);

    var wins = 0;
    var losses = 0;
    $('#wins').text(wins);
    $('#losses').text(losses);

    var numberOptions = 0;

    var crystalValueArray = [];
    for (var i = 1; i < 5; i++) {
        var imageCrystal = $("#crystal" + [i]);
        imageCrystal.attr("dataCrystalValue", generateRandomNumber(1, 12));
        $("#crystals").append(imageCrystal);
    }
    
    var crystalValue = ($(this).attr("dataCrystalValue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    $("totalScore").text(totalScore);
    if (totalScore === randomNumber) {
        wins++;
        $("#wins").text(wins);
        randomNumber = generateRandomNumber(18, 120);
        $("#randomNumber").text(totalScore);
        for (var i = 1; i < 5; i++) {
            var imageCrystal = $("#crystal" + [i]);
            numberOptions = generateRandomNumber(1, 12);
            imageCrystal.attr("dataCrystalValue", numberOptions);
            $("#crystals").append(imageCrystal);
    } else if (totalScore > targetNumber) {
            losses++;
            $("#randomNumber").text(losses);
            randomNumber = generateRandomNumber(18, 120);
            $("#randomNumber").text(randomNumber);
            totalScore = 0;
            $("#totalScore").text(totalScore);
            for (var i = 1, i < 5; i++) {
                var imageCrystal = $("#crystal" + [i]);
                numberOptions = generateRandomNumber(1, 12);
                imageCrystal.attr("dataCrystalValue", numberOptions);
                $("#crystals").append(imagecrystal);
            }
        }
    }



});




// Random Number shown at Start of game 19-120 - CONSOLE LOG



// click funcitons from user entering numbers



// Restart game win player wins/ loses - CONSOLE LOG




// Wins Losses shown - CONSOLE LOG