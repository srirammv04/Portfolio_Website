var tabnames = document.getElementsByClassName("tab-name");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabname;
var tabcontent;

function openTab(tablink) {
    for (tabname of tabnames) {
        tabname.classList.remove("active-name");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-name");
    document.getElementById(tablink).classList.add("active-tab");
}

/*
Google-sheet-URLlink:
https://script.google.com/macros/s/AKfycby4ZXnL8afrRdBDVl7e4-wix3Ve5k5ZMzcp7Hnc1i8Q6eI5xS-UG-KZTQtGwRPaWL5Djw/exec*/
