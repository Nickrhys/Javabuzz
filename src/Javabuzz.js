function Javabuzz() {};

Javabuzz.prototype.isDivisableByThree = function(number) {
  return this._isDivisableBy(number, 3);
};

Javabuzz.prototype.isDivisableByFive = function(number) {
  return this._isDivisableBy(number, 5);
};

Javabuzz.prototype.isDivisableByFifteen = function(number) {
  return this._isDivisableBy(number, 15);
};

Javabuzz.prototype._isDivisableBy = function(number, divisor) {
  return (number % divisor === 0)
};

Javabuzz.prototype.prints = function(number) {
  if (this.isDivisableByFifteen(number)) return ('fizzbuzz');
  if (this.isDivisableByThree(number)) return ('fizz');
  if (this.isDivisableByFive(number)) return ('buzz');
};

