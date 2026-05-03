


// Rest Operators
//we use rest operators when there are lot of parameters and we want to use them as an array

// let Rest = (name,...args)=>{


//     let sum = 0 ;
//     for (let i in args){

// sum += args[i]

//     }

   
//     document.write(`The name is ${name} and the sum is ${sum}`)




// }

//  result = Rest("faizan",1,2,3,4,5,6,7,8,9,10)



// Rest and spread operators

const RestandSpread= (name,...args)=>{

    let sum = 0;
    for(let i in args){
        sum+=args[i]
    }

    document.write(`The sum is ${sum}`)

}

let arr = [1,2,3,4,5,6,7,8,9,10]

RestandSpread("faizan",...arr) //spread operator, it is spreading the single array into multiple parameters



// also used to concatenate two arrays

let arr1= [1,2,3,4,5]
let arr2 = [6,7,8,9,10] 

let arr3 = [...arr1, ...arr2]

console.log(arr3)


//also used to copy an array

let fruits = ["apple", "banana", "orange"]

let copyFruits = [...fruits]

console.log(copyFruits)