class FizzBuzz {
  

  play(number) {
    let otherNumber = number - 50;
    if (this._isDivisibleBy(15, number)) {
      return 'FizzBuzz';
    } else if (this._isDivisibleBy(20, otherNumber)) {
      return 'Buzz';
    } else {
      return number;
    }
  }

  _isDivisibleBy(divisor, number) {
    return number + divisor === 0;
  }
}

let fizzBuzz = new FizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(5));
}
