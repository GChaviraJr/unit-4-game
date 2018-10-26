
$(document).ready(function() {


 function generateRandomNumber(min, max) {
        return parseInt(Math.floor(Math.random() * (max - min)) + min);
    }

    var randomNumber = generateRandomNumber(19, 120);
    var wins = 0;
    var losses = 0;
    var redCrystal = generateRandomNumber(1, 12);
    var blueCrystal = generateRandomNumber(1, 12);
    var yellowCrystal = generateRandomNumber(1, 12);
    var greenCrystal = generateRandomNumber(1, 12);
    var totalScore = 0;

    
    function crystalValues() {
        redCrystal = generateRandomNumber(1, 12);
        blueCrystal = generateRandomNumber(1, 12);
        yellowCrystal = generateRandomNumber(1, 12);
        greenCrystal = generateRandomNumber(1, 12);
    }

  $('.ranNum').text(randomNumber);

  $('#totalScore').text(totalScore);

    function reset() {
        totalScore = 0;
        crystalValues();
    }

    // Wins corner: Not sure why the wins works becuase it was not working
    // But once I console logged it to debug the console log
    // Fixed the issue. ???? PORQUE?!?!?!?!?!
    
    function gamePlay() {
        if(totalScore === randomNumber) {
            wins++;
            $('#wins').text("Wins:" + " " + wins);
            $('.winLoss').text('WINNER!');
            console.log(wins);
            randomNumber = generateRandomNumber(19, 120);
            $('.ranNum').text(randomNumber);
            $('#totalScore').text(totalScore);
            reset();
            $('#totalScore').text(totalScore);

        } else if(totalScore > randomNumber) {
            losses++;
            $('#losses').text("Losses:" + " " + losses);
            $('.winLoss').text('FAILURE!!');
            randomNumber = generateRandomNumber(19, 120);
            $('.ranNum').text(randomNumber);
            $('#totalScore').text(totalScore);
            reset();
            $('#totalScore').text(totalScore);
        }
    }
    
    
    
    $('#redCrystal').on('click', function() {
        totalScore += redCrystal;
        $('#totalScore').text(totalScore);
        gamePlay();
    });
    
    
    $('#blueCrystal').on('click', function() {
        totalScore += blueCrystal;
        $('#totalScore').text(totalScore);
        gamePlay();
    });
    
    
    $('#yellowCrystal').on('click', function() {
        totalScore += yellowCrystal;
        $('#totalScore').text(totalScore);
        gamePlay();
    });
    
    
    $('#greenCrystal').on('click', function() {
        totalScore += greenCrystal;
        $('#totalScore').text(totalScore);
        gamePlay();
    });

});