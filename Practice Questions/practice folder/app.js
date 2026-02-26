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


// get month method,

// var date = new Date();
// var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var index = date.getMonth();

// var thisMonth = Months[index];

// console.log(thisMonth)

// function tellTime(){

//     var date = new Date();

//     var hours  = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();

//     console.log("Current Time: "+ hours + ":"+minutes+":"+seconds);
    
// }

// tellTime()


// var Students ={
//     fullName:"Muhammad Faizan",
//     FatherName:"Deen Muhammad",
//     Department:"Computer Science",
//     Semester:5,


//     detail: function(){
//         return this;
//     }

// }


// console.log(Students.detail());



// function GetName()

// {
//     const name = "faizan"


//     return this.name;
// }

// console.log(GetName())



const obj = {

}



var cars ={
 honda:{
        city:{
            carName:"Honda city",
            model:"2024",
            fuelType:"Petrol",
            engine:"6000 RPM",
            seatCapacity:"5 seater",
            fuelTankCapacity:"40 L",
            image:"assets/car.jpg"
        },
        accord: {
            carName: "Honda Accord",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "5",
            fuelTankCapacity: "56 L",
            image:"img'/honda accord.png"
        },
         civic: {
            carName: "Honda Civic",
            model: "2023",
            fuelType: "Petrol",
            engine: "2.0L",
            seatCapacity: "5",
            fuelTankCapacity: "47 L",
            image:"img'/honda civic.png"
         },
         crv: {
            carName: "Honda CR-V",
            model: "2023",
            fuelType: "Petrol",
            engine: "2.4L",
            seatCapacity: "5",
            fuelTankCapacity: "57 L",
            image: "img'/honda crv.png"
        },
        jazz: {
            carName: "Honda Jazz",
            model: "2024",
            fuelType: "Petrol",
            engine: "1.2L",
            seatCapacity: "5",
            fuelTankCapacity: "40 L",
            image: "img'/honda jazz.png"
        },
        hr_v: {
            carName: "Honda HR-V",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.8L",
            seatCapacity: "5",
            fuelTankCapacity: "50 L",
            image: "img'/honda hrv.png"
        },
         pilot: {
            carName: "Honda Pilot",
            model: "2023",
            fuelType: "Petrol",
            engine: "3.5L",
            seatCapacity: "7",
            fuelTankCapacity: "74 L",
            image: "img'/honda pilot.png"
        },
         odyssey: {
            carName: "Honda Odyssey",
            model: "2024",
            fuelType: "Petrol",
            engine: "3.5L",
            seatCapacity: "7",
            fuelTankCapacity: "68 L",
            image: "img'/honda odssey.png"
        },
        ridgeline: {
            carName: "Honda Ridgeline",
            model: "2023",
            fuelType: "Petrol",
            engine: "3.5L",
            seatCapacity: "5",
            fuelTankCapacity: "73 L",
            image: "img'/honda ridgelinne.png"
        },
         fit: {
            carName: "Honda Fit",
            model: "2024",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "5",
            fuelTankCapacity: "40 L",
            image: "img'/honda fit.png"
         }
},


 suzuki:{
        
        swift: {
            carName: "Suzuki Swift",
            model:"2023",
            fuelType: "Petrol",
            engine: "1.2L",
            seatCapacity: "5",
            fuelTankCapacity: "37 L",
            image: "img'/suzuki swift.png"
                
            },
        ciaz: {
            carName: "Suzuki Ciaz",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "5",
            fuelTankCapacity: "45 L",
            image: "img'/suzuki ciaz.png"

        },
        baleno: {
            carName: "Suzuki Baleno",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.2L",
            seatCapacity: "5",
            fuelTankCapacity: "37 L",
            image: "img'/suzuki baleno.png"
        },
        dzire: {
            carName: "Suzuki Dzire",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.2L",
            seatCapacity: "5",
            fuelTankCapacity: "37 L",
            image: "img'/suz desire.png"
        },
        ertiga: {
            carName: "Suzuki Ertiga",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "7",
            fuelTankCapacity: "45 L",
            image: "img'/suzzuki ertiga.png"
        },
        vitara: {
            carName: "Suzuki Vitara",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.6L",
            seatCapacity: "5",
            fuelTankCapacity: "47 L",
            image: "img'/suz vitara.png"
        },
        jimny: {
            carName: "Suzuki Jimny",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "4",
            fuelTankCapacity: "40 L",
            image: "img'/suzuki jimny.png"
        },
        alto: {
            carName: "Suzuki Alto",
            model: "2023",
            fuelType: "Petrol",
            engine: "0.8L",
            seatCapacity: "4",
            fuelTankCapacity: "35 L",
            image: "img'/suzuki alto.png"
        },
        ignis: {
            carName: "Suzuki Ignis",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.2L",
            seatCapacity: "5",
            fuelTankCapacity: "32 L",
            image: "img'/suzuki ignis.png"
        },
        xl7: {
            carName: "Suzuki XL7",
            model: "2023",
            fuelType: "Petrol",
            engine: "1.5L",
            seatCapacity: "7",
            fuelTankCapacity: "45 L",
            image: "img'/suzuki xl7.png"
        }
    }, 

toyota:{
    corolla: {
        carName: "Toyota Corolla",
        model: "2023",
        fuelType: "Petrol",
        engine: "1.8L",
        seatCapacity: "5",
        fuelTankCapacity: "50 L",
        image: "img'/t corolla.png"
    },
    camry: {
        carName: "Toyota Camry",
        model: "2023",
        fuelType: "Petrol",
        engine: "2.5L",
        seatCapacity: "5",
        fuelTankCapacity: "60 L",
        image: "img'/t camry.png"
    },
    rav4: {
        carName: "Toyota RAV4",
        model: "2023",
        fuelType: "Petrol",
        engine: "2.5L",
        seatCapacity: "5",
        fuelTankCapacity: "55 L",
        image: "img'/t rav 4.png"
    },
    hilux: {
        carName: "Toyota Hilux",
        model: "2023",
        fuelType: "Diesel",
        engine: "2.8L",
        seatCapacity: "5",
        fuelTankCapacity: "80 L",
        image: "img'/t hilux.png"
    },
    yaris: {
        carName: "Toyota Yaris",
        model: "2023",
        fuelType: "Petrol",
        engine: "1.5L",
        seatCapacity: "5",
        fuelTankCapacity: "42 L",
        image: "img'/t yaris.png"
    },
    fortuner: {
        carName: "Toyota Fortuner",
        model: "2023",
        fuelType: "Diesel",
        engine: "2.8L",
        seatCapacity: "7",
        fuelTankCapacity: "80 L",
        image: "img'/t fortuner.png"
    },
    avalon: {
        carName: "Toyota Avalon",
        model: "2023",
        fuelType: "Petrol",
        engine: "3.5L",
        seatCapacity: "5",
        fuelTankCapacity: "60 L",
        image: "img'/t avalon.png"
    },
    supra: {
        carName: "Toyota Supra",
        model: "2023",
        fuelType: "Petrol",
        engine: "3.0L",
        seatCapacity: "2",
        fuelTankCapacity: "52 L",
        image: "img'/t supra.png"
    },
    prius: {
        carName: "Toyota Prius",
        model: "2023",
        fuelType: "Hybrid",
        engine: "1.8L",
        seatCapacity: "5",
        fuelTankCapacity: "43 L",
        image: "img'/t prius.png"
    },
    highlander: {
        carName: "Toyota Highlander",
        model: "2023",
        fuelType: "Petrol",
        engine: "3.5L",
        seatCapacity: "7",
        fuelTankCapacity: "65 L",
        image: "img'/t highlaner.png"
    }
}
        
            
    }


    let company = document.getElementById("company")
let model = document.getElementById("model")
let info = document.getElementById("info")

for(let key in cars){
    company.innerHTML+=`<option value='${key}'> ${key} </option>`
}




const selectCompany = ()=>{
model.innerHTML = `<option value="" disabled selected >Select model</option>`

    for( let key in cars[company.value]){
        model.innerHTML+=`
        <option value='${key}'> ${key} </option>
        `
    }
}

company.addEventListener("change",selectCompany)






const selectModel=()=>{


let mycompany = company.value
let mymodel = model.value
    let carDetail = cars[mycompany][mymodel]

    info.innerHTML=`
    
    <h3>Car detail</h3>
    <p><b>model:</b> ${carDetail.model} </p>
      <p><b>fuelType:</b> ${carDetail.fuelType} </p>
        <p><b>engine:</b> ${carDetail.engine} </p>
          <p><b>seatCapacity:</b> ${carDetail.seatCapacity} </p>
            <p><b>fuelTankCapacity:</b> ${carDetail.fuelTankCapacity} </p>
          <img src='${carDetail.image}' width='200px' >
    `

}

model.addEventListener("change",selectModel)


