var mice = 2;
var houses = 1;
var i = null;
var houseBuild = null;
var MICE_PER_HOUSE = 8;
var building = false;
$(document).ready(function(){
    $('#errorizer').fadeOut();
    if($.cookie('mice')) {
        mice = $.cookie('mice') * 1;
        houses = $.cookie('houses') * 1;
    }
    if (mice === 1) {
        $("#miceOrMouse").html("mouse");
        $("#mouseNum").html(mice);
    } else {
        $("#miceOrMouse").html("mice");
        $("#mouseNum").html(mice);
    }
    var houseText = "";
    if (houses === 1) {
        houseText = "house";
    } else {
        houseText = "houses";
    }
    $("#housePlural").html(houseText);
    $("#houseNum").html(houses);
});
function alertit(text) {
    $('#errorizer').fadeIn();
    $('#errorizer').html(text);
    setTimeout(function(){
        $('#errorizer').fadeOut();
    }, 2000);
}
/* Timer script - credit to Vishal Chitnis */
function timer(t){
    building = true;
    var time = new Date();
    Date.prototype.toShortString = function(){
        var x = this.getSeconds();
        return "Wait " + x + " seconds.";
    };
    time.countDown = function(){
        var z = this.getSeconds();
        var a = 0; 
        if(z == 0){
            return;
        } 
        a = z-1;
        this.setSeconds(a);
        $('#timerHouseFull').html(time.toShortString());
        setTimeout(function(){time.countDown();}, 1000);
    };
    time.setSeconds(t);
    setTimeout(function(){time.countDown();}, 1000);
};
/* Adds one mouse to mice when button clicked. Changes pluralness if you have one mouse. */
function giveMouse() {
    "use strict";
    if ((mice / 8) < houses) {
        mice += 1;
        if (mice === 1) {
            $("#miceOrMouse").html("mouse");
            $("#mouseNum").html(mice);
        } else {
            $("#miceOrMouse").html("mice");
            $("#mouseNum").html(mice);
        }
    } else {
        alertit("Not enough housing!");
    }
}

/* Actually builds one house and adds one to houses. Changes pluralness if you have one house. */
function doBuildHouse() {
    "use strict";
    houses += 1;
    var houseText = "";
    if (houses === 1) {
        houseText = "house";
    } else {
        houseText = "houses";
    }
    $("#housePlural").html(houseText);
    $("#houseNum").html(houses);
    setTimeout('$("#timerHouseFull").html("")', 400);
    building = false;
}
/* Builds a house when button clicked after 10 seconds. */
function buildHouse() {
    "use strict";
    if (building === false) {
        displayTime(10);
        setTimeout(doBuildHouse, 10000);
    } else {
        alertit("House still building!");
    }
}
/* Displays remaining time */
function displayTime(time) {
    "use strict";
    timer(time);
}
function saveState(){
    $.cookie('mice', mice);
    $.cookie('houses', houses);
}
setInterval(saveState, 1000);