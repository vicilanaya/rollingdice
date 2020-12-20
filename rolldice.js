// Author: Florence Vicil Anaya
// Email: vicilanaya@gmail.com


"use strict";

function runeCharacters(){
    let runeArray = new Array(7);
    let runicCode;
    let rune;
    for (let i = 0; i < runeArray.length; i++){
        // 5792-5872 (no 5873-5880)
        runicCode = Math.floor(Math.random() * (5872 - 5792 + 1) ) + 5792;
        // if runicCode is duplicate
        while (runeArray.includes("\&\#" + runicCode + "\;")) {
            // redo random number
            runicCode = Math.floor(Math.random() * (5872 - 5792 + 1) ) + 5792;
        }
        // complete HTML code
        rune = "\&\#" + runicCode + "\;";
        // add rune to array
        runeArray[i] = rune;
    }
    // display initial roll characters
    $("#d20roll").html(runeArray[0]);
    $("#d12roll").html(runeArray[1]);
    $("#d10roll1").html(runeArray[2]);
    $("#d10roll2").html(runeArray[3]);
    $("#d8roll").html(runeArray[4]);
    $("#d6roll").html(runeArray[5]);
    $("#d4roll").html(runeArray[6]);
//    console.log("5792-5872: " + runeArray);
}

function roll(dmax) {
    // random number between 1 and dmax
    let randomNumber = 1 + Math.floor(Math.random() * dmax);
    
    if (dmax == 20) {
        $("#d20roll").html(randomNumber);  
    }
    if (dmax == 12) {
        $("#d12roll").html(randomNumber); 
    }
    if (dmax == 10) {
        // 0-90 step 10
        let randomNumber1 = Math.floor(Math.random() * dmax) * 10;
        // 0-10
        let randomNumber2 = Math.floor(Math.random() * (dmax + 1));
        $("#d10roll1").html(randomNumber1); 
        $("#d10roll2").html(randomNumber2); 
    }
    if (dmax == 8) {
        $("#d8roll").html(randomNumber); 
    }
    if (dmax == 6) {
        $("#d6roll").html(randomNumber); 
    }
    if (dmax == 4) {
        $("#d4roll").html(randomNumber); 
    }
}

function rollAll() {
    roll(20);
    roll(12);
    roll(10);
    roll(8);
    roll(6);
    roll(4);
}

$(document).ready(function(){
    // initial roll display
//    runeCharacters();

    // event for roll all dice button
    $("#roll-all").click(function(event) {
        rollAll();
        event.preventDefault();
    });
    
    // events for individual dice
    $("#d20").click(function(event) {
        roll(20);
        event.preventDefault();
    });
    $("#d12").click(function(event) {
        roll(12);
        event.preventDefault();
    });
    $("#d10").click(function(event) {
        roll(10);
        event.preventDefault();
    });
    $("#d8").click(function(event) {
        roll(8);
        event.preventDefault();
    });
    $("#d6").click(function(event) {
        roll(6);
        event.preventDefault();
    });
    $("#d4").click(function(event) {
        roll(4);
        event.preventDefault();
    });

});	// end ready
