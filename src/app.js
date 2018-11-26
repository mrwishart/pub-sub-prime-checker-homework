const PrimeChecker = require('./models/prime_checker.js');
const FrontView = require('./views/front_view');
const ResultView = require('./views/result_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const frontView = new FrontView();
  frontView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
