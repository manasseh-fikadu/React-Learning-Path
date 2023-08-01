const lodash = require("lodash");

// calculating sum of numbers
const numbers = [33, 46, 76, 44, 12, 3];
console.log("Sum: " + lodash.sum(numbers));

// grouping by
const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

console.log("GroupBy: " + lodash.groupBy(users, "age"));

// debouncing
const debounceSearch = lodash.debounce(searchFunction, 500);

function searchFunction(query) {
  console.log("Searching for:", query);
}

debounceSearch("Hello");

// throttling
const throttleAPICall = lodash.throttle(apiCall, 1000);

function apiCall() {
  console.log("API call made");
}

throttleAPICall();

// chaining
const result = lodash(numbers)
  .map((n) => n * 2)
  .filter((n) => n > 5)
  .sum();

console.log(result);

// Function composition
const addTwo = (n) => n + 2;
const square = (n) => n * n;
const addTwoAndSquare = lodash.flow(addTwo, square);

console.log(addTwoAndSquare(3));

// Deep clone an object
const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = lodash.cloneDeep(originalObject);

clonedObject.b.c = 3;
console.log(originalObject.b.c);

// Merge objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = lodash.merge(object1, object2);

console.log(mergedObject);

// Truncating a long string
const longString = "This is a very long string that needs to be truncated";
const truncatedString = lodash.truncate(longString, { length: 20 });

console.log(truncatedString);

// Capitalize the first letter of a sentence
const sentence = "hello world";
const capitalizedSentence = lodash.capitalize(sentence);

console.log(capitalizedSentence);

// Memoize a recursive Fibonacci function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = lodash.memoize(fibonacci);

console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
