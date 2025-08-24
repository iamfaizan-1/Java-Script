// var arr = "Muhammad Faizan"

// var flag = false;
// var startingIndex = 0;

// var toFind = "h";

// for(startingIndex; startingIndex < arr.length; startingIndex++){

//     if(toFind == arr[startingIndex]){

// flag = true;

//         console.log(startingIndex);
//         break;
//     }
// }


// if(flag == false){
//     console.log("not found")
// }




// index of function backend

var str = "Muhammad Faizan";
var isFound = false;
var toFind = "F";

var startingIndex = 0;

for(startingIndex; startingIndex < str.length; startingIndex++){


if(toFind == str [ startingIndex]){

isFound = true;
    console.log("character found at index: "+startingIndex);

    break;
    }
}


if(isFound == false){
    console.log("character not found")
}