
// https://codeburst.io/javascript-var-let-or-const-which-one-should-you-use-2fd521b050fa
// https://dev.to/sandy8111112004/javascript-introduction-to-scope-function-scope-block-scope-d11
//type of scopes - global, local, block 


//declaring variables using var
// var was used before ES6 and should now be avoided 
//As var variables can be accessed outside the block 
var x = 100;
var y = 'hey'; 

var weather = "raining";
weather = "sunny";
console.log(weather) //sunny 

//naming variables
// Start them with a letter, underscore _, or dollar sign $.
// After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
// Don’t use any of JavaScript’s reserved keywords.


//let keyword is like var but it can be used in block scope {}
//and let keywords can be reassigned but NOT redeclared 

// let number = 10;
// number = 10000
// console.log(number); //10000

// let number = 10;
// number = 10000; 
//console.log(number); //SyntaxError: number has already been declared

let number = 50;
{ let number = 10000;
console.log(number)}   //10000

//const keyword - a blocked scope 
//cannot be redeclared or reassigned 
//when you declare a const you MUST assign it a value 

const pi = 3.14
console.log(pi)

//general rule - always declear variable with const
//if the value of the variable needs to change - change it to let

it (true) {
    var a = 'hello';
    let b = 'hi';
    const c = 'ello';

    console.log(a); //all 3 will print
    console.log(b);
    console.log(c)
}

//when printint outside the block only the var variable will print

console.log(a); //print 
console.log(b); //reference error
console.log(c)//reference error 