const fizz = require("./fizzbuzz");

test("returns 'Fizz' for the last number if it is divisible by 3 but not by 5", () => {
  const num = 9;
  const result = fizz(num);
  expect(result[result.length - 1]).toBe("Fizz");
});

test("returns 'Buzz' for the last number if it is divisible by 5 but not by 3", () => {
  const num = 10;
  const result = fizz(num);
  expect(result[result.length - 1]).toBe("Buzz");
});

test("returns 'FizzBuzz' for the last number if it is divisible by 3 and 5", () => {
  const num = 15;
  const result = fizz(num);
  expect(result[result.length - 1]).toBe("FizzBuzz");
});

test("returns the number for the last number if it is not divisible by 3 or 5", () => {
  const num = 4;
  const result = fizz(num);
  expect(result[result.length - 1]).toBe(num);
});
