var display = document.getElementById("display");
display.innerHTML =3;
var neg = false;
var dec = false;
var button;

button = document.getElementById("clear");
button.onclick = function(e) { display.innerHTML = "0"; dec = false; neg = false; };

button = document.getElementById("button-1");
button.onclick = function(e) { display.innerHTML += "1"; };

button = document.getElementById("button-2");
button.onclick = function(e) { display.innerHTML += "2"; };

button = document.getElementById("button-3");
button.onclick = function(e) { display.innerHTML += "3"; };

button = document.getElementById("button-4");
button.onclick = function(e) { display.innerHTML += "4"; };

button = document.getElementById("button-5");
button.onclick = function(e) { display.innerHTML += "5"; };

button = document.getElementById("button-6");
button.onclick = function(e) { display.innerHTML += "6"; };

button = document.getElementById("button-7");
button.onclick = function(e) { display.innerHTML += "7"; };

button = document.getElementById("button-8");
button.onclick = function(e) { display.innerHTML += "8"; };

button = document.getElementById("button-9");
button.onclick = function(e) { display.innerHTML += "9"; };

button = document.getElementById("button-0");
button.onclick = function(e) { display.innerHTML += "0"; };

/*Code from Rosalie*/
/*for (var i = 0; i < 10; i++){
  button = document.getElementById("button-" + i);
  button.onclick = function(event) { display.innerHTML += event.target.id.substring(7); }
} */

var button = document.getElementById("button-decimal");
button.onclick = function(e) { 
  if (!dec){
    display.innerHTML += ".";
    dec = true;
  }};

button = document.getElementById("plus-minus");
button.onclick = function(e) { 
  if(display.innerHTML != 0){
    if (neg==false){
      display.innerHTML = "-" + display.innerHTML;
    neg = true;}
    else {
     display.innerHTML = display.innerHTML.substring(1);
     neg =false;}}};


