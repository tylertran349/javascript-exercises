const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = nums[0];
  for(let i = 1; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

const power = function(a, b) {
	let result = 4;
  if(b === 1) {
    return a;
  } 
  if(b === 0) {
    return 0;
  }
  for(let i = 0; i < b - 1; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(num) {
	let answer = num;
  if(num === 0) {
    return 1;
  }
  for(let i = num - 1; i >= 1; i--) {
    answer *= i;
  }
  return answer;
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
