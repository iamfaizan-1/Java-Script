


// Rest Operators
//we use rest operators when there are lot of parameters and we want to use them as an array

let Rest = (name,...args)=>{


    let sum = 0 ;
    for (let i in args){

sum += args[i]

    }

   
    document.write(`The name is ${name} and the sum is ${sum}`)




}

 result = Rest("faizan",1,2,3,4,5,6,7,8,9,10)