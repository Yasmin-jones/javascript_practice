// https://hackmd.io/LNOhghGETu2Mry0LYCGKwQ?view


//1 - hash 

let catPet = {sound: "meow! meow!", legs: 4};
console.log(catPet.sound)
console.log(catPet.legs)

let hamster = {sound: "squeek!", legs: 4};
console.log(hamster.sound)
console.log(hamster.legs)

hamster.sound = "little squeek!"
console.log(hamster.sound)


let sayHello = function() {
    return "Hello";
};
console.log(sayHello()); 

let sayHi = function () {
    return "Hi"
};
console.log(sayHi()); 


let sayHelloName = function(name) {
    return "Hello " + name + "!";
}
console.log(sayHelloName("Yaz"));

let sheep = {legs: 4};
catPet.speak = sayHello; 
//console.log(cat.speak());  // makersObjectsEncapsulation.js:37 Uncaught TypeError: cat.speak is not a function

var cat2 = {
    speak: function() {
      return "Meow!";
    }
  };
  
 console.log(cat2.speak());


 var cat3 = {
    speak: function() {
      return "I have " + this.legs + " legs! Meow!";
    },
    legs: 4
  };

  console.log(cat3.speak());
//   cat3.legs = 5 
 // console.log(cat3.legs()); // makersObjectsEncapsulation.js:56 Uncaught TypeError: cat3.legs is not a function


 var myCatSpeak = function() {
    return "I have " + this.legs + " legs! Meow!";
  };
  
  var cat4 = {
    legs: 4
  };
  
  cat4.speak = myCatSpeak;
  
  console.log(cat4.speak()); 