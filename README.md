# FizzBuzz

FizzBuzz is a classic programming task, often used in coding interviews. The task is to print the numbers from 1 to a given number, but with a twist:

- For multiples of three, print "Fizz" instead of the number.
- For multiples of five, print "Buzz" instead of the number.
- For numbers which are multiples of both three and five, print "FizzBuzz".

## Usage

This project exports a single function, `fizz`, which takes a number as an argument and returns an array of results.

Here's how you can use it:

```javascript
const fizz = require("./fizzbuzz");

console.log(fizz(15));
