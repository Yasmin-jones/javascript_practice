const bark = function() {
    return 'Woof'; 
}

bark(); //inoking the function will return woof 

// ES6  - ommitting the {} allows for an implicit return
let cat = () => 'miaow'; 

cat() 

let monzo = () => 'Makes noise when money is inserted';

console.log(monzo()) 



// a function with an argument 
let miaow = (name) =>  {

}


//using function as a block - passing an anonymous function 

['one', 'two', 'three'].forEach(number => console.log(number))

// passing a function object (callback) in forEach 
let callback = (arg) => console.log(arg);

['one', 'two', 'three'].forEach(callback); 