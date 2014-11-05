function Javabuzz() {};

Javabuzz.prototype.isDivisableByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz.prototype.isDivisableByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz.prototype.isDivisableByFifteen = function(number) {
  return (number % 15 === 0);
  };