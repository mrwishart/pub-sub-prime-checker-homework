const assert = require('assert');
const PrimeChecker = require('../models/prime_checker.js')

describe('Prime', function () {

  beforeEach(function () {
    primechecker = new PrimeChecker();
  });

  it ('should have an initial array', () => {
    const actual = primechecker.primeArray
    const expected = [2, 3, 5, 7, 11];
    assert.deepStrictEqual(actual, expected);
  });

  it ('should have a range checked variable', () => {
    const actual = primechecker.rangeChecked;
    const expected = 11;
    assert.strictEqual(actual, expected);
  });

  it ('should say 1 isnt a prime', () => {
    const actual = primechecker.numberIsPrime(1);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it ('should say 2 is a prime', () => {
    const actual = primechecker.numberIsPrime(2);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it ('should say 3 is a prime', () => {
    const actual = primechecker.numberIsPrime(3);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it ('should say 4 isnt a prime', () => {
    const actual = primechecker.numberIsPrime(4);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it ('should recognise a prime', () => {
    const actual = primechecker.numberIsPrime(5);
    const expected = true;
    assert.strictEqual(actual, expected);
  });

  it ('should recognise a non-prime', () => {
    const actual = primechecker.numberIsPrime(6);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it ('should recognise 49 as a non-prime', () => {
    const actual = primechecker.numberIsPrime(49);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it ('should recognise a square number as not prime', () => {
    const actual = primechecker.numberIsPrime(169);
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it ('should check large number and update array', () => {
    const actual = primechecker.numberIsPrime(179);
    const expected = true;

    const actual2 = primechecker.primeArray;
    const expected2 = [2, 3, 5, 7, 11, 13];

    const actual3 = primechecker.rangeChecked;
    const expected3 = 13;

    assert.strictEqual(actual, expected);
    assert.deepStrictEqual(actual2, expected2);
    assert.strictEqual(actual3, expected3);
  });

  describe('Array Check', () => {
    it ('should be in array', () => {
      const actual = primechecker.isInArray(11);
      const expected = true;
      assert.deepStrictEqual(actual, expected);
    });

    it ('should not be in array', () => {
      const actual = primechecker.isInArray(12);
      const expected = false;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe('isNewPrime' , () => {
    it ('should find primes', () => {
      const actual = primechecker.isNextHighestPrime(13);
      const expected = true;
      assert.deepStrictEqual(actual, expected);
    });

    it ('should find non-primes', () => {
      const actual = primechecker.isNextHighestPrime(14);
      const expected = false;
      assert.deepStrictEqual(actual, expected);
    });
  })

  describe('checkNumberInivisibleOverArray', () => {
    it ('should find number', () => {
      const actual = primechecker.checkNumberIndivisibleOverArray(17);
      const expected = true;
      assert.deepStrictEqual(actual, expected);
    });
  })


})
