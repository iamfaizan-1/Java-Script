// function fullName(){
    
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// var name = firstName+lastName;

// document.write("The name is: ",name);

// }

// fullName()





// parameters


// function fullName(firstName,LastName){


// var name = firstName+ " "+LastName;
// return name;

// }


// var student1 = fullName("Muhammad","Faizan");
// var student2 = fullName("Abdul","Rehman");


// console.log("student 1 is: ",student1);
// console.log("Student 2 is: ",student2)


// function without return

// function getSum(x,y){

// var sum = x+y;

// console.log(sum)

// }


// getSum(5,6)



// function with return;


// function getName(firstName,LastName){


//     var name = firstName+ " " + LastName;

//     return name;

// }

// let student1 = getName("Muhammad","Faizan");

// console.log(student1)


function Vowel(name){

    name = name.toLowerCase()
var count = 0;

    for(i=0; i<= name.length-1; i++){

        if(name[i] === "a" || name[i] === "e" || name[i] === "i" || name[i] === "o" || name[i] === "u"  ){

            count++;
           

        }
    }

    console.log("The word has"+ " "+count + " " +"vowel sounds")

}


Vowel("FAIZAN")