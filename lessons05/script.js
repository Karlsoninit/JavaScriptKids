"use strict";

// const arr = [2, 3, 5, 6, 6, 6, 7, 2];

//-----with includes
// const unique = (newArr, number) => ;

// const find = mass => {
//   const newArr = [];

//   for (let number of mass) {
//     if (!newArr.includes(number)) {
//       newArr.push(number);
//     }
//   }

//   console.log(newArr);
// };

// const name = prompt("enter name");
// const age = prompt("enter age");

// const user = {
//   name,
//   age
// };

// console.log(user);

// const firstNumber = prompt("enter number");
// const multi = prompt("enter multiply");
// const secondNumber = prompt("enter number");

// const calculator = (numOne, mult, numTwo) => {
//   if (!isNaN(numOne) || !isNaN(numTwo)) {
//     let result = null;
//     numOne = Number(numOne);
//     numTwo = Number(numTwo);
//     if (mult === "+") {
//       result = numOne + numTwo;
//     } else if (mult === "*") {
//       result = numOne * numTwo;
//     } else if (mult === "-") {
//       result = numOne - numTwo;
//     }
//     return result;
//   } else {
//     console.log("not a number");
//   }
// };

// const res = calculator(firstNumber, multi, secondNumber);

// console.log(res);

// const someNumbers = prompt("enter number");

// const arr = someNumbers.split(" ");

// const calculator = mass => {
//   const first = Number(mass[0]);
//   const second = Number(mass[2]);
//   let result = null;
//   if (mass[1] === "+") {
//     result = first + second;
//   } else if (mass[1] === "*") {
//     result = first * second;
//   } else if (mass[1] === "-") {
//     result = first - second;
//   }
//   return result;
// };

// const result = calculator(arr);
// console.log(result);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true }
];

const find = (fruits, name) => {
  const arr = [];
  for (let fruit of fruits) {
    if (fruit.name === name) {
      arr.push(fruit);
    }
  }

  return arr;
};

const result = find(fruits, "grapes");
console.log(result);

const apple = { name: "apples", quantity: 200, isFresh: true };

const grappes = { name: "grapes", quantity: 150, isFresh: false };

// const moreArr = Object.assign(grappes, apple);
const some = "dsfd";

const moreArr = { ...apple, ...grappes, [some]: "kdkdkd" };

console.log(moreArr);
console.log(apple);
console.log(grappes);
