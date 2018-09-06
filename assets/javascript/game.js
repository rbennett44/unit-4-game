//Jquery notes for Crystal Collector Game
$(document).ready(function() {

    //store the random computer-generated number
    var computerNumber = [];
    
    //assign wins and losses
    var wins = 0;
    var losses = 0;

    //set array for the crystal values
    //var crystalValue = [1, 4, 6, 9];
    var blue = [1];
    var green = [4];
    var purple = [6];
    var red = [9];

    //set random number between 19 - 120 to the random number box
    computerNumber = Math.floor(Math.random() * 120) + 19;
    console.log(computerNumber);

    $("#randomNumber").html("<h1>Random Number: " + computerNumber + "</h1>");


    //post the wins and losses to html
    $("#victories").html("<h2>Wins: " + wins + "</h2>");
    $("#defeats").html("<h2>Losses: " + losses + "</h2>");
    

    //click on the crystals to get a value
    $(#blue-crystal).on(click, function(){
        
    })

    //post a value 
    //make if/else 

}) 