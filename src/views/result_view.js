const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:Result", this.displayResult);
};

ResultView.prototype.displayResult = function (event) {
  const rv = new ResultView();

  const result = (event.detail ? rv.trueString() : rv.falseString());

  const display = document.querySelector('#result');
  display.textContent = result;
};

ResultView.prototype.trueString = function () {
  return "Yes, it's a prime number";
};

ResultView.prototype.falseString = function () {
  return "No, it isn't a prime number";
};

module.exports = ResultView;
