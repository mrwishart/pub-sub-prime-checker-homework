const PubSub = require('../helpers/pub_sub.js');

const FrontView = function () {

};

FrontView.prototype.bindEvents = function () {
  form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', this.submitNumber);
};

FrontView.prototype.submitNumber = function (event) {
  event.preventDefault();
  const number = event.target.number.valueAsNumber;
  PubSub.publish("FrontView:NumberSubmitted", number);
};

module.exports = FrontView;
