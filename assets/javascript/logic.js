$(document).ready(function () {

    //default variables
    var Xscore = 0;
    var Oscore = 0;
    var draws = 0;
    var currentTurn = "X";
    var button1State = "empty";
    var button2State = "empty";
    var button3State = "empty";
    var button4State = "empty";
    var button5State = "empty";
    var button6State = "empty";
    var button7State = "empty";
    var button8State = "empty";
    var button9State = "empty";

    //game start
    function gameStart() {
        document.getElementById("xWins").innerHTML = Xscore;
        document.getElementById("oWins").innerHTML = Oscore;
        document.getElementById("draws").innerHTML = draws;
        document.getElementById("currentPlayer").innerHTML = currentTurn;
    }

    //game reset
    function gameReset() {
        currentTurn = "X";
        button1State = "empty";
        button2State = "empty";
        button3State = "empty";
        button4State = "empty";
        button5State = "empty";
        button6State = "empty";
        button7State = "empty";
        button8State = "empty";
        button9State = "empty";
    }

    //takes 
    //function indicateSquare() {

   // }

    //function winCheck() {
        
   // }


    //button click listeners

    //Button 1 click
    $("#button1").click(function () {
        if (button1State == "empty") {
            button1State = currentTurn;
            document.getElementById("square1").innerHTML = button1State;
        } else { alert("Please select an empty space") }
    });

    //Button 2 click
    $("#button2").click(function () {
        if (button2State == "empty") {
            button2State = currentTurn;
            document.getElementById("square2").innerHTML = button2State;
        } else { alert("Please select an empty space") }
    });

    //Button 3 click
    $("#button3").click(function () {
        if (button3State == "empty") {
            button3State = currentTurn;
            document.getElementById("square3").innerHTML = button3State;
        } else { alert("Please select an empty space") }
    });

    //Button 4 click
    $("#button4").click(function () {
        if (button4State == "empty") {
            button4State = currentTurn;
            document.getElementById("square4").innerHTML = button4State;
        } else { alert("Please select an empty space") }
    });

    //Button 5 click
    $("#button5").click(function () {
        if (button5State == "empty") {
            button5State = currentTurn;
            document.getElementById("square5").innerHTML = button5State;
        } else { alert("Please select an empty space") }
    });

    //Button 6 click
    $("#button6").click(function () {
        if (button6State == "empty") {
            button6State = currentTurn;
            document.getElementById("square6").innerHTML = button6State;
        } else { alert("Please select an empty space") }
    });

    //Button 7 click
    $("#button7").click(function () {
        if (button7State == "empty") {
            button7State = currentTurn;
            document.getElementById("square7").innerHTML = button7State;
        } else { alert("Please select an empty space") }
    });

    //Button 8 click
    $("#button8").click(function () {
        if (button8State == "empty") {
            button8State = currentTurn;
            document.getElementById("square8").innerHTML = button8State;
        } else { alert("Please select an empty space") }
    });

    //Button 9 click
    $("#button9").click(function () {
        if (button9State == "empty") {
            button9State = currentTurn;
            document.getElementById("square9").innerHTML = button9State;
        } else { alert("Please select an empty space") }
    });

    gameStart();

});