


// var text = "123abc";

// console.log(parseInt(text))


// var text = 1.0;

// console.log(Number(text));


// var text = 12345.4778

// console.log(Math.round(text))

// var text = ["my","name","is","Faizan"];

// console.log(text.slice(0,3))


// var text = " my name is faizan my name is faizan"

// var text2 = text.replace(/name/g,"man");

// console.log(text2)


// var number = Math.ceil(Math.random()*5);

// console.log(number)


// var text = "my name is Faizan";

// console.log(text.charAt())


// var text = "my name is faizan"

    

//         console.log(  text.replace("my","his"))
//         console.log(text)


// var num = -2.6;

// console.log(Math.round(num))

// console.log(Math.floor(Math.random()*10) +1)


// var arr = [1,2,10];

// console.log(arr[Math.floor(Math.random()*arr.length)])


// var max = 10;
// var min = 0;

// console.log(Math.floor(Math.random()*(max-min+1)+min))


// var num = 1.9;

// console.log(parseInt(num));


// console.log(parseInt("12f"))

// console.log(Number("08"))

// console.log(parseFloat("1.2.4.5"))


// var num = 5;

// num = num + ""

// console.log(typeof(num))

// console.log(parseInt("12px"))

// console.log(Number(" 12 "))


// var num = 123.456

// num = num.toString()
// console.log(num);
// console.log(typeof(num));


// var num = 12.34555;

// num = num.toFixed(2)
// console.log(num);

// console.log(typeof(num));



// function style(){

//     input = document.getElementById("input");

//     input.style.backgroundColor = "blue";
// }


// function start(){

// para = document.getElementById("para")
// para.innerText = "My name is faizan, who are you"



// }

// function hide(){

// image = document.getElementById("img")

// if(image.style.display == "block"){

//     image.className = "hide";

// }

// else{
//     image.className = "show"
// }


// }


// var div = document.getElementById("division");

// var para = div.getElementsByTagName("p");

// para.style.color = "yellow"


// var d = document.getElementById("ny");
//  var p = d.childNodes[1];
//     var contents = p.innerHTML;


function tohide1(){


var hide = document.querySelector("hide")

hide.style.display = "block"

// console.log("this is function")

}

function show1(){
    var hide = document.querySelector("hide")
    hide.style.display = "none"
}



// const student = {

//     fullName: "Muhammad Faizan",
//     age: 20,
//     class: "second year"

// }

// // console.log(student["fullName"])

// const student2 = {...student}

// // console.log(student2)

// // student.hobby = "football"
// // console.log(student)
// // console.log(student2)

// student2.fullName = "Faraz";

// console.log("student1 =>",student);
// console.log("student2 =>",student2)


// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// };

// console.log("Employee=> ", employee);

// // Shallow copy
// let newEmployee = { ...employee };    
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Beck";

// console.log("Employee=> ", employee);        
// console.log("New Employee=> ", newEmployee);


const student1={
    age:20,
    name:"Faizan"
}

const student2 = {...student1}


// delete student1.age
// // const student2 = student1;

// console.log(student1)
// console.log(student2)

// const keys = Object.keys(student1)
// console.log(keys)

// const values = Object.values(student1)
// console.log(values)

// for(key in student1){
//     console.log(key,student1[key])
// }


// const student3 = Object.assign({},student1)

// console.log(student3)

// Object.seal(student1)

// student1.age = 21;
// console.log(student1)