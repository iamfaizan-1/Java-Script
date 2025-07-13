// Making a table with taking inputs from user


var table = prompt("Which table you want to see in browser");
var multiple = prompt("Tell me the starting number of the table");
var end = prompt("Now tell me the ending number");



for(multiple; multiple<=end ; multiple++){
    var result = table * multiple;

document.write(table+" "+ "x"+  " " +multiple+ " " + "=" + " "+ result +"</br>" );


}