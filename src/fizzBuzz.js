function fizzBuzz (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz"
  } else if (num % 3 === 0) {
    return "fizz"
  } else if (num % 5 === 0) {
    return "buzz"
  } else {
    return num
  }
};

for (var i = 1; i < 101; i++) {
  console.log(fizzBuzz(i))
}
