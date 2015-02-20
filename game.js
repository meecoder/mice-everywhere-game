var mice = 2;
var houses = 1;
var i = null;
var houseBuild = null;
var MICE_PER_HOUSE = 8;
var building = false;


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
    document.getElementById('timerHouseFull').innerHTML = (time.toShortString());
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
            document.getElementById("miceOrMouse").innerHTML = "mouse";
            document.getElementById("mouseNum").innerHTML = mice;
        } else {
            document.getElementById("miceOrMouse").innerHTML = "mice";
            document.getElementById("mouseNum").innerHTML = mice;
        }
    } else {
        alert("Not enough housing!");
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
    document.getElementById("housePlural").innerHTML = houseText;
    document.getElementById("houseNum").innerHTML = houses;
    setTimeout('document.getElementById("timerHouseFull").innerHTML = ""', 400);
    building = false;
    //alert("innerHTML = " + document.getElementById("timerHouseFull").innerHTML);
}
/* Builds a house when button clicked after 10 seconds. */
function buildHouse() {
    "use strict";
    if (building === false) {
        if ((mice / 8) === houses) {
            displayTime(10);
            setTimeout(doBuildHouse, 10000);
        } else {
            alert("Not all your houses are full yet!");
        }
    } else {
            alert("House still building!");
    }
}
/* Displays remaining time */
function displayTime(time) {
    "use strict";
    timer(time);
}