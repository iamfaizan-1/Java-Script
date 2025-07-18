//chapter 5 question no 3
document.write("<h1> question no 3 </h1>")
var num;

document.write("value after variable declaration is:??"+num);

num = 5;

document.write("</br>  Initial value: "+num);

++num;

document.write("</br>Value after increment is: "+num);

num = num + 7;

document.write("</br>Value after addition is: "+num);

--num;

document.write("</br>value after decrement is: "+num);

num = num % 3;

document.write("</br>The remainder is: "+num);

//question no 4

document.write("<h1> question no 4 </h1>")

var ticketPrice = 600;

//var ticket5 = 600*5;

document.write(  " Total cost to buy 5 tickets to a movie is "+ticketPrice*5 +"</br>" );

//quesition no 5

// var number = prompt("Enter number you want to get table of");

// document.write(number + "x 1 =" +number*1+"</br>"+number+"x 2 ="+number*2 +"</br>"+number + "x 3 =" +number*3 +"</br>" +number + "x 4 =" +number*4 +"</br>" +number + "x 5 =" +number*5 +"</br>" +number + "x 6 =" +number*6 +"</br>" +number + "x 7 =" +number*7 +"</br>" +number + "x 8 =" +number*8 +"</br>" +number + "x 9 =" +number*9 +"</br>" +number + "x 10 =" +number*10 +"</br>"   )


// question no 6

document.write("<h1> question no 6</h1>")

var celcius = prompt("Enter degree in celcius");

var celcius_converter = (celcius*9/5)+32;

document.write(celcius+  " "+ "celcius"+ " " +"is" +" " +celcius_converter+" " + "Fehrenheit </br> ")


var fehren = prompt("Enter your degree in fehrenheit");

var fehren_converter = (fehren-32)*5/9;

document.write(fehren+ " "+"fehrenheit is"+" "+ fehren_converter+" "+"celcius" );