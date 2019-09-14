"use strict";
//------- let -------
// let a;
// let a = 10;
// let str = "Hello";
// let isActive = true;
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof isActive);

//-------- const -----

// const a = 10;
// const b = 21;

// console.log(a + b);

// const x = a + b;

// console.log(x);

// const words = "Стандартом языка JavaScript является ECMAScript".toLowerCase()
//   .length;

// console.log(words > 50);

// console.log(null);

// let str = "";
// let num = 0;

// console.log(str);
// console.log(num);

// let hasUserInfo = Number(prompt("enter numbers ...."));

// // console.log(hasUserInfo);

// let result = hasUserInfo * 2;

// console.log(`результат prompt ${result}`);

// let info = confirm("are you want ????)");

// console.log(info);

// if (info) {
//   let hasUserInfo = Number(prompt("enter numbers ...."));

//   let result = hasUserInfo * 2;
//   console.log(`результат prompt ${result}`);
// } else {
//   console.log("sorry");
// }

//---------- day 2 -----

// const num = Number("7");
// console.log(typeof num);

// let a = 0;

// let hasNumber = prompt("enter numbers  ...");

// console.log(hasNumber);

// hasNumber = 1;

// console.log(hasNumber);

// let a = 10;

// if (a > 9) {
//   alert("меньше 10");
// } else {
//   alert("wrong");
// }

// const startTime = confirm("are you whant play eith me ?? ");

// if (startTime) {
//   const time = prompt("entter time ...");

//   if (time <= 15) {
//     alert("1");
//   } else if (time > 15 && time <= 30) {
//     alert("2");
//   } else if (time > 30 && time <= 45) {
//     alert("3");
//   } else if (time > 45 && time <= 60) {
//     console.log("4");
//   } else {
//     alert("more then 60");
//   }
// } else {
//   alert("why ?????");
// }

// let time = prompt("entter time ...");

// let numberTime = Number(time);

// console.log(typeof time);
// console.log(typeof numberTime);

// if (time !== null) {
//   if (numberTime <= 15) {
//     alert("1");
//   } else if (numberTime > 15 && numberTime <= 30) {
//     alert("2");
//   } else if () {
//     alert("3");
//   } else if (numberTime > 45 && numberTime <= 60) {
//     console.log("4");
//   } else {
//     alert("more then 60");
//   }
// } else {
//   alert("отказался играть");
// }

// const result = numberTime <= 15 ? true : false;

// console.log(result);

// let season = prompt("enter seasons ...");

// let result = null;

// if (season !== null) {
// }

// switch (season) {
//   case "summer":
//     result = 3;
//     break;
//   case "winter":
//     result = 1;
//     break;
//   case "spring":
//     result = 2;
//     break;
//   case "autumn":
//     result = 4;
//     break;
//   default:
//     result = "not found";
// }

const str = prompt("enter word").toLowerCase();
console.log(str);

let polindrom = str
  .split("")
  .reverse()
  .join("");

console.log(polindrom);

if (str === polindrom) {
  alert("polindrom");
} else {
  alert("error");
}

// console.log(
//   str[0].toUpperCase() + str.slice(1, str.length - 1) + str[str.length - 1].toUpperCase());

// console.log(str.slice(1));
