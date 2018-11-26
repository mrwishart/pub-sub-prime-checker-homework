const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

  this.primeArray = [2, 3, 5, 7, 11];
  this.rangeChecked = this.primeArray.slice(-1)[0];

}

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FrontView:NumberSubmitted", (event) => {
    const number = event.detail;
    const result = this.numberIsPrime(number);
    PubSub.publish("PrimeChecker:Result", result);
  });
};

PrimeChecker.prototype.numberIsPrime = function (number) {

  if (number <= 1) {return false;}
  if (number <= this.rangeChecked) {return this.primeArray.includes(number);}
  if (!this.checkNumberIndivisibleOverArray(number)) {return false;}

  let lowerLimit = this.rangeChecked+1;
  let upperLimit = Math.sqrt(number);

  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (this.isNextHighestPrime(i)) {this.updateArray(i);}
    if (number % i === 0) {return false;}
  }

  return true;
};

PrimeChecker.prototype.updateArray = function (number) {
  this.primeArray.push(number);
  this.rangeChecked = number;
};

PrimeChecker.prototype.isInArray = function (number) {
  return this.primeArray.includes(number);
};

PrimeChecker.prototype.checkNumberIndivisibleOverArray = function (number) {
  return this.primeArray.every((element) => {return number % element !== 0});
};

PrimeChecker.prototype.isNextHighestPrime = function (number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {return false;}
  }
  return true;
}

module.exports = PrimeChecker;
