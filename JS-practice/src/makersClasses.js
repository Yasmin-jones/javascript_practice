// classes - https://github.com/makersacademy/course/blob/main/pills/js_classes.md //


// classes in JS were introduced in ES6 - JS classes are types of functions


//defining and instantiate classes 

// class Bunny {

// }

// const bunny = new Bunny(); 

// bunny class creates a function called Bunny 

//When a new object is created we call a constructor method (ruby was initialize)

class Bunny {
    constructor(type) {
        this.type = type; 
        // in ruby @type = type 
    }

}
const sally = new Bunny('Fluffy');  // instance vairables are accessiable outside the class by default 
// In Javascript, there are no attr_reader or attr_accessor

sally.type 

console.log(sally.type);

//Defining methods 
class Dog {
    bark(name) {
    console.log(name + ' says woof')
    }
}

const jamie = new Dog(); 
console.log(jamie); // the bark method is found under the prototype 

// bark is NOT  a method of DOG - bark is just a bag of properties

//jamie is a bag of properties that inherts from properties from the prototype Dog.

//call the bark method of any instance of dog
const ben = new Dog();
console.log(ben.bark('ben'))

//class and method structure in JS

class Pet {
    constructor(breed) {
      this.breed = breed;
    }
  
    bark(name) {
      console.log(name + ' says Woof!');
    }
  }

  const becky = new Pet();
  console.log(becky.bark('becky'))