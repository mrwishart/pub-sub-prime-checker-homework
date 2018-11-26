const PrimeChecker = function () {

  this.primeArray = [2, 3, 5, 7, 11];
  this.rangeChecked = this.primeArray.slice(-1)[0];

}

PrimeChecker.prototype.numberIsPrime = function (number) {

  if (number === 1) {return false;}
  if (number <= this.rangeChecked) {return this.isInArray(number);}

  let lowerLimit = this.rangeChecked+1;
  let upperLimit = Math.round(Math.sqrt(number));

  for (let i = lowerLimit; i <= upperLimit; i++) {

    if (this.isNewPrime(i)) {this.appendArray(i);}
    this.rangeChecked = i;
    if (number % i === 0) {return false;}
  }

  return true;
};

PrimeChecker.prototype.appendArray = function (number) {
  this.primeArray.push(number);
};

PrimeChecker.prototype.isInArray = function (number) {
  return this.primeArray.includes(number)
};


PrimeChecker.prototype.isNewPrime = function (number) {

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = PrimeChecker;
