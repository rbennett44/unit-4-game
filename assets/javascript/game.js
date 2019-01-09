//Jquery notes for Crystal Collector Game



    //VARIABLES
    //--------------------------------------------------------
  
    //assign wins and losses
    var wins = 0;
    var losses = 0;

    //set array for the crystal values
    var crystalValues = {
        blue: {
            value: 0
        }, 
        green: {
            value: 0
        },
        purple: {
            value: 0
        },
        red: {
            value: 0
        }};
    

    //Set variables for target score and running score
    var targetScore = 0;
    var runningScore = 0;

    //set random number between 19 - 120 to the random number box
    

    //FUNCTIONS
    //--------------------------------------------------------
var setRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

    //start the game
    var startGame = function() {
        //reset Running Score
        runningScore = 0; 
        //set new Target Score (randomly chosen between 19 and 120)

        targetScore = setRandom(19, 120);


        //set values for the different crystals (randomly chosen between 1 and 12)

        crystalValues.blue.value = setRandom(1, 12);
        crystalValues.green.value = setRandom(1, 12);
        crystalValues.purple.value = setRandom(1, 12);
        crystalValues.red.value = setRandom(1, 12);

        //Post values to Target Score and  Your Score

        $("#targetScore").html(targetScore);
        $("#yourScore").html(runningScore);

        //Testing in the Console
        console.log("------------------------------------");
        console.log("Target Score: " + targetScore);
        console.log("Blue: " + crystalValues.blue.value + " | Green: " + crystalValues.green.value +
        " | Purple: " + crystalValues.purple.value + " | Red: " + crystalValues.red.value);
        console.log("------------------------------------");
    };

        //Set crystals to respond to clicks
        var addValues = function(crystalValues) {

            //change Running Score
            runningScore = runningScore + crystalValues.value;

            //Change HTML to show changes in Running Score
            $("#yourScore").html(runningScore);

            //Call the CheckWin
            checkWin();

            //Testing 
            console.log("Your score: " + runningScore);
        };

        //Check if User wins or loses and reset the game
        var checkWin = function() {
            //Check if RunningScore is larger than the TargetScore
            if(runningScore > targetScore) {
                alert("Sorry! You lost.");
                console.log("You lost.");

                //Add to Loss Counter
                losses++;

                $("#lossCount").html(losses);

                //Restart game
                startGame();
            }
            else if (runningScore == targetScore) {
                alert("Sweet!!! YOU ARE A WINNER!!");
                console.log("Sweet!!! YOU ARE A WINNER!!");

                //Add to Win Counter
                wins++;

                $("#winCount").html(wins);

                //Restart game
                startGame();
            }

        };
        
    
        //MAIN PROCESSES
        //--------------------------------------------------------
        $("#blue").click(function() {
           addValues(crystalValues.blue);
        });
    
        $("#green").click(function() {
            addValues(crystalValues.green);
         });
        
        $("#purple").click(function() {
            addValues(crystalValues.purple);
         });
    
         $("#red").click(function() {
            addValues(crystalValues.red);
         });
    
    //Starts the Game
         startGame();

