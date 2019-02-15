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
        document.getElementById("currentPlayer").innerHTML = currentTurn;
        button1State = "empty";
        button2State = "empty";
        button3State = "empty";
        button4State = "empty";
        button5State = "empty";
        button6State = "empty";
        button7State = "empty";
        button8State = "empty";
        button9State = "empty";
        document.getElementById("square1").innerHTML = "";
        document.getElementById("square2").innerHTML = "";
        document.getElementById("square3").innerHTML = "";
        document.getElementById("square4").innerHTML = "";
        document.getElementById("square5").innerHTML = "";
        document.getElementById("square6").innerHTML = "";
        document.getElementById("square7").innerHTML = "";
        document.getElementById("square8").innerHTML = "";
        document.getElementById("square9").innerHTML = "";
    }

    //passes all possible win combinations based on square clicked to win checker
    function indicateSquare(square) {
        var ref1 = button1State;
        var ref2 = button2State;
        var ref3 = button3State;
        var ref4 = button4State;
        var ref5 = button5State;
        var ref6 = button6State;
        var ref7 = button7State;
        var ref8 = button8State;
        var ref9 = button9State;

        if (square == 1) {
            winCheck(ref1, ref2, ref3);
            winCheck(ref1, ref5, ref9);
            winCheck(ref1, ref4, ref7);
            drawCheck();
            playerSwitch();
        } else if (square == 2) {
            winCheck(ref1, ref2, ref3);
            winCheck(ref2, ref5, ref8);
            drawCheck();
            playerSwitch();
        } else if (square == 3) {
            winCheck(ref1, ref2, ref3);
            winCheck(ref3, ref5, ref7);
            winCheck(ref3, ref6, ref9);
            drawCheck();
            playerSwitch();
        } else if (square == 4) {
            winCheck(ref1, ref4, ref7);
            winCheck(ref4, ref5, ref6);
            drawCheck();
            playerSwitch();
        } else if (square == 5) {
            winCheck(ref4, ref5, ref6);
            winCheck(ref2, ref5, ref8);
            winCheck(ref1, ref5, ref9);
            winCheck(ref3, ref5, ref7);
            drawCheck();
            playerSwitch();
        } else if (square == 6) {
            winCheck(ref3, ref6, ref9);
            winCheck(ref4, ref5, ref6);
            drawCheck();
            playerSwitch();
        } else if (square == 7) {
            winCheck(ref7, ref8, ref9);
            winCheck(ref1, ref4, ref7);
            winCheck(ref3, ref5, ref7);
            drawCheck();
            playerSwitch();
        } else if (square == 8) {
            winCheck(ref2, ref5, ref8);
            winCheck(ref7, ref8, ref9);
            drawCheck();
            playerSwitch();
        } else if (square == 9) {
            winCheck(ref3, ref6, ref9);
            winCheck(ref1, ref5, ref9);
            winCheck(ref7, ref8, ref9);
            drawCheck();
            playerSwitch();
        }
    }

    function winCheck(first, second, third) {
        if (first == second && second == third) {
            if (currentTurn == "X") {
                Xscore += 1;
                document.getElementById("xWins").innerHTML = Xscore;
                alert("X Wins!")
                gameReset();
            } else {
                Oscore += 1;
                document.getElementById("oWins").innerHTML = Oscore;
                alert("O Wins!")
                gameReset();
            }
        }
    }

    function drawCheck() {
        if (button1State !== "empty" && button2State !== "empty" && button3State !== "empty" && button4State !== "empty" && button5State !== "empty" && button6State !== "empty" && button7State !== "empty" && button8State !== "empty" && button9State !== "empty") {
            draws += 1;
            document.getElementById("draws").innerHTML = draws;
            alert("It's a draw");
            gameReset();
        }
    }

    function playerSwitch() {
        if (currentTurn == "X") {
            currentTurn = "O"
            document.getElementById("currentPlayer").innerHTML = currentTurn;
        } else {
            currentTurn = "X"
            document.getElementById("currentPlayer").innerHTML = currentTurn;
        }
    }


    //button click listeners

    //Button 1 click
    $("#button1").click(function () {
        if (button1State == "empty") {
            button1State = currentTurn;
            document.getElementById("square1").innerHTML = button1State;
            indicateSquare(1);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}

    });

    //Button 2 click
    $("#button2").click(function () {
        if (button2State == "empty") {
            button2State = currentTurn;
            document.getElementById("square2").innerHTML = button2State;
            indicateSquare(2);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 3 click
    $("#button3").click(function () {
        if (button3State == "empty") {
            button3State = currentTurn;
            document.getElementById("square3").innerHTML = button3State;
            indicateSquare(3);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 4 click
    $("#button4").click(function () {
        if (button4State == "empty") {
            button4State = currentTurn;
            document.getElementById("square4").innerHTML = button4State;
            indicateSquare(4);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 5 click
    $("#button5").click(function () {
        if (button5State == "empty") {
            button5State = currentTurn;
            document.getElementById("square5").innerHTML = button5State;
            indicateSquare(5);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 6 click
    $("#button6").click(function () {
        if (button6State == "empty") {
            button6State = currentTurn;
            document.getElementById("square6").innerHTML = button6State;
            indicateSquare(6);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 7 click
    $("#button7").click(function () {
        if (button7State == "empty") {
            button7State = currentTurn;
            document.getElementById("square7").innerHTML = button7State;
            indicateSquare(7);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 8 click
    $("#button8").click(function () {
        if (button8State == "empty") {
            button8State = currentTurn;
            document.getElementById("square8").innerHTML = button8State;
            indicateSquare(8);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    //Button 9 click
    $("#button9").click(function () {
        if (button9State == "empty") {
            button9State = currentTurn;
            document.getElementById("square9").innerHTML = button9State;
            indicateSquare(9);
        } else { document.getElementById("alertDiv").innerHTML = "<div class='alert alert-info alert-dismissible fade show' role='alert'> Please click an empty square <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>"}
    });

    gameStart();

});