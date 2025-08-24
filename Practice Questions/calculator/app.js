
var input = document.getElementById("inputField")


function show(values){

    input.value = input.value+values;


}

function Delete(){


    input.value = input.value.slice(0,-1);

}

function clearing(){

input.value = "";

}

function equal(){

input.value = eval(input.value)


}