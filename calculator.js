function main(){
var display = document.getElementById("display");
display.innerHTML =3;
var neg = false;
var dec = false;
var button;

button = document.getElementById("clear");
button.onclick = function(e) { display.innerHTML = "0"; dec = false; neg = false; };

for (var i = 0; i < 10; i++){
  button = document.getElementById("button-" + i);
  button.onclick = function(event) { display.innerHTML += event.target.id.substring(7); }
} 

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

}
