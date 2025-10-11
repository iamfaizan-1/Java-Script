

var img = document.getElementById("img")
var div = document.getElementById("main");

img.onmouseover = function (){

div.style.display = "none"

}

img.onmouseleave = function() {
    div.style.display = "block"
}