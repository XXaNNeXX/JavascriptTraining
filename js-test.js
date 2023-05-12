"use strict";

function choice() {
    let btns = document.getElementsByName("btn");
    let group = "";
    for(let i=0; i<btns.length; i++) {
        if(btns[i].checked) {
            group = btns[i].value;
        }
    }
    if(group == "") {
        alert("Bitte wähle eine Option");
    }
    else if(group == "Einstein") {
        alert("Richtig");
    }
    else {
        alert("Falsch");
    }
}