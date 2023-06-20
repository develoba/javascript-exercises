const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev, value) => prev + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, value) => prev * value, 1);
};

const power = function(a, b)  {
	return a ** b;
};

const factorial = function(num) {
  let res = 0;
  if (num == 1 || num == 0) {
    return 1;
  } else {
    res = num * factorial(num - 1);
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
