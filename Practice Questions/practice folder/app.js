// var num1 = 5;
// var num2 = 5;
// alert(num1/num2)

// increment and decrement




// concatenation

// var a = 1;
// var b = "2";
// result = a+b;
// console.log(typeof(result));


// cleanest cities
// var flag = false;
// var cleanestCities = ["Copenhegen","Santa Fe", "Tucson","Great Falls"];

// function cityCheck(){
//     var check = document.getElementById("cities").value

// for(var i = 0; i<= 4; i++){

// if(check.toLowerCase() == cleanestCities[i].toLowerCase()){
//     flag = true;
//     console.log("One of the cleanest cities");
//     break;
// }

// }



// }

// if(flag == false){
//     console.log("city not found");
// }


// for(i=1; i<=10 ; i++){

// for(j= 1; j<=i; j++)
// {
//     document.write(j);
    
// }
// document.write("</br>");

// }

// var table  = prompt("Enter the number");

// for(i=1; i<=10; i++){

//     var result = table*i;

//     document.write(table+" x 1 =" +  result + "</br>")


// }




// let arr = ["me","i","you"];

// for(var i = 0; i < arr.length; i++)
// {
//     console.log("value of i: "+i);
// }

// console.log("length of array:", i);




// for(i = 1; i<=100; i++){

// for(j=1; j<=3; j++){
//    document.write(j)
// }
// document.write("</br>")

// }


// for(i = 1; i <= 10; i++){
//     for(j=1; j<=i; j++){
//         document.write(j);
//     }

//     document.write("</br>")
// }

// for(i=1; i<=100; i+=10){
//     for(j=i; j<=i+9; j++){

//         document.write(j);
//     }

//     document.write("</br>")
// }


// creating an object

// let profile =  {

//     username : "Faizan",
//     followers: 250,
//     following: 100
// }

// console.log(typeof profile ["username"]);


// checking palindrome


// function Palindrome(){

//     var userinput = document.getElementById("userInput").value
// var userinput1 = userinput.toLowerCase();
//      var reverse = "";

//     for(var i = userinput1.length-1; i>=0; i--){

//         reverse = reverse + userinput1[i];
//     }
//     console.log(reverse);

//     if(reverse === userinput1){
//         console.log("This is a Palindrome")
//     }

//     else{

//         console.log("Not a palindrome")
//     }
    


// }

// var flag = false;
// var arr = ["Karachi","Lahore","Faisalabad"];

// var toCheck = prompt("Enter the city :")

// var first = toCheck.slice(0,1).toUpperCase();

// var remaining = toCheck.slice(1).toLowerCase();

// var concat = first + remaining;


// for(var i = 0; i < arr.length; i++){

//     if(concat == arr[i]){
//         console.log("found");
// flag = true;
//         break;
//     }
    
// }

// if(flag == false){
//     console.log("not found")
// }


// var toCheck = prompt("Enter the string");

// var first = toCheck.slice(0,1)

// first = first.toUpperCase();

// var remaining  = toCheck.slice(1);
// remaining = remaining.toLowerCase();

// console.log(first)


// for of loop

// let cities = ['Karachi','Hyderabad','Sukkhur','Larkana','Multan','Faislabad'];

// for (const city of cities) {

//     console.log(city.toUpperCase())
    
// }


// let arr = [85,97,44,37,76,60];


// let sum = 0;

// for(var i = 0; i< arr.length; i++){

//     sum += arr[i];
// }

// let Average = sum/arr.length;

// console.log(`${Average}`);





// let items = [250,645,300,900,50];

// for(const i of items){

//     let discount = items[i]*0.1;

//     items[i] -= discount;
    
//     console.log(items[i])

// }



// finding discount


// let items = [250,645,300,900,50];

// for(var i =0 ; i<items.length; i++)
// {

//     console.log("before "+ items[i]);
// var discount = items[i]/10;
// items[i] = items[i] - discount;

// console.log("after"+items[i]);


// }


// console.log(items); 



// let arr = ['i' , 'love', 'you'];

// let arr2 = ['do', 'you', 'love','me'];

// console.log(arr.concat(arr2))

// console.log(arr)


// let arr = [1, 3, 5, 7, 9];

// console.log(arr.toString())

// console.log(typeof(arr))


// splice method

// let arr = [1,2,5,7,9]

// let arr2 = arr.splice(2)



// practice question

// let arr = ["Bloomberg","Microsoft", "Uber","Google","IBM","Netflix"];

// arr.shift();

// console.log(arr)

// arr.splice(1,1,"Ola")

// console.log(arr)

// arr.push("Amazon");

// console.log(arr)

// var age = prompt("Enter your age");

// var result = parseInt(age)+1;
// console.log(result)

// var num = 4;

// console.log(num.toString())


// var num = prompt("Enter number");

// if(num.charAt(num.length-1) === "5" ){

//     num = num.slice(0,num.length-1) + "6"
    
// }

// var result = Number(num);

// result = result.toFixed(2)

// console.log(result)

// var dayNames = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";

// var dayNames1 = dayNames.split(",");

// var date = new Date();

// var today = date.getDay();

// var now = dayNames1[today];

// console.log(now)





