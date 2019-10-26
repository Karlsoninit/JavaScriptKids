"use strict";
// const arr = ["one", "two", "three"];

// arr.push("four"); // метод push для дбавления в массив новых елементов

// arr.unshift("start arr");

// arr.shift();
// arr.pop();
// console.log(arr);

/* изначально просто строка */
// const string =
//   "Electron Fiddle lets you create and play with small Electron experiments. It greets you with a quick-start template after opening – change a few things, choose the version of Electron you want to run it with, and play around . Then, save your Fiddle either as a GitHub Gist or to a local folder. Once pushed to GitHub, anyone can quickly try your Fiddle out by just entering it in the address bar.";

// // const hesUser = prompt("enter word ...");

/* метод split(' ') розбивает по словесно и возвращает новый массив и каждое слово в нем через розделитель */
// const stringArr = string.split(" ");

// console.log(stringArr.reverse()); // розварачиваем массив
// stringArr[2] = "rename".toUpperCase();

// console.log(stringArr);

// const newArr = stringArr.slice();

// console.log("new", newArr);

/* исрользуем метод includes для поиска по совпадению */

// if (stringArr.includes(hesUser)) {
//   alert(`find ${hesUser}`);
// } else {
//   alert(`not found ${hesUser} `);
// }

// if (stringArr.includes(hesUser)) {
//   const result = stringArr.indexOf(hesUser);
//   stringArr[result] = "rename".toUpperCase();
//   console.log(stringArr);
// }

/* работаем с методром slice*/
// const arrCopy = stringArr.slice();

// result.splice(10, 1, "DELETE");
// console.log(result);

// if (arrCopy.includes(hesUser)) {
//   const ind = arrCopy.indexOf(hesUser);
//   arrCopy.splice(ind, 1, "DELETE", "new", "double");
//   console.log(arrCopy);
// }

// const string =
//   "Electron Fiddle lets you create and play with small Electron experiments. It greets you with a quick-start template after opening – change a few things, choose the version of Electron you want to run it with, and play around . Then, save your Fiddle either as a GitHub Gist or to a local folder. Once pushed to GitHub, anyone can quickly try your Fiddle out by just entering it in the address bar.";

// const stringArr = string.split(" ");
/*метод slice главное помнить, что метод мутирует исходный массив */

// console.log(stringArr);

// const firstTen = stringArr.slice(0, 10);

// console.log(firstTen);

// const lastTen = stringArr.slice(63);
// console.log(lastTen);

// const newArr = firstTen.concat(lastTen);
// console.log("new arr", newArr);

/*спред оператор, с его помощью можно достать все елементы и копировать в новый массив */
// const arrMass = [...firstTen, ...lastTen];
// // new arr
// console.log(arrMass);

// if (Array.isArray(arrMass)) {
//   console.log("its true its arr");
// }

// const hesUser = prompt("enter word ...");
// console.log(typeof hesUser);
// if (typeof hesUser === "string") {
//   console.log("its string");
// }
// let counter = 1;
// let total = 0;

/*работа с циклом while  */
/*работа с циклом do while  */

// const count = Number(prompt("enter number"));
// const arr = [];
// while (counter <= count) {
//   console.log(counter);
//   counter++;
//   const hesUser = Number(prompt("enter number"));
//   arr.push(hesUser);
//   total = total + hesUser;
// }

// console.log(arr);
// console.log("summ : ", total);

// let count;
// let counter = 0;
// const countArr = [];
// const numberArr = [];
// do {
//   count = prompt("enter number");
//   let newCount = Number(count);
//   counter++;

//   countArr.push(counter);
//   if (count !== null) {
//     numberArr.push(newCount);
//   }
// } while (count !== null);

// console.log(countArr);
// console.log(numberArr);

//------------- test morning --------

// берем строку
//перевести строку вмассив
// просим ввести слово через prompt
// if (){} слово есть в массиве
// ищем index
// меняем найден слово на новое которое получаем c prompt
// и выводим в console.log( слово которое меням и новое слово )

// const str =
//   "PropTypes предоставляет ряд валидаторов, которые могут использоваться для проверки, что получаемые данные корректны. В примере мы использовали PropTypes.string. Когда какой-то проп имеет некорректное значение, в консоли будет выведено предупреждение. По соображениям производительности propTypes проверяются только в режиме разработки.";

// const newStr = str.split(" ");

// console.log(newStr);

// const hesWord = prompt("enter word ...");

// if (newStr.includes(hesWord)) {
//   const renameWord = prompt("rename word ...");
//   const findWordIndx = newStr.indexOf(hesWord);
//   newStr.splice(findWordIndx, 1, renameWord);
//   alert(`${hesWord} rename --> ${renameWord}`);
// }

// console.log(newStr);

// for (let i = 0; i < newStr.length; i++) {
//   console.log(newStr[i]);
//   if (newStr[i] === "могут") break;
// }

// const arr = [];
// const word = "happy";

// for (let i = 1; i <= 20; i++) {
//   arr.push(word);
// }
// console.log(arr);

// for (let word of newStr) {
//   console.log(word);
//   if (word === "ряд") {
//     break;
//   }
// }

/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// console.log(matched); // [17, 14, 14, 32, 18, 26]

// console.log(newStr[Math.floor(Math.random() * newStr.length)]);

// let num = 0;
// for (let number of numbers) {
//   num += number;
// }

// console.log(num);

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you".split(" ");

// let longestWord;
// let startFind = 0;

// for (let word of message) {
//   if (startFind < word.length) {
//     startFind = word.length;
//     longestWord = word;
//   }
// }

// console.log(longestWord); // 'force'

// for (let i = 0; i < message.length; i++) {
//   if (startFind < message[i].length) {
//     startFind = message[i].length;
//     longestWord = message[i];
//   }
// }

// console.log(longestWord);

// let counter = 1;
// let total = 0;
// const arr = [];
// const wannaPlay = prompt("How many numbers you wanna count?");

// while (wannaPlay !== null) {
//   counter++;
//   const hesUser = Number(prompt("enter number"));
//   total += hesUser;

//   if (hesUser !== 0) {
//     arr.push(hesUser);
//   } else {
//     alert("wrong!");
//   }
// }

// console.log(arr);
// console.log("summ : ", total);

// do {
//   counter++;
//   wannaPlay = Number(wannaPlay);

//   arr.push(wannaPlay);
// } while (wannaPlay !== null);

// console.log(arr);
// // console.log("summ : ", total);

// function

// decrement();
// increment();

// function decrement() {
//   console.log("decrement");
// }

// const increment = function() {
//   console.log("increment");
// };

// console.log("o");

// const add = function(...rest) {
//   let count = 0;
//   let total = null;

// for (let num of rest) {
//   count += num;
//   total = count;
// }

//   for (count; count < rest.length; count++) {
//     console.log(rest[count]);
//     total += rest[count];
//   }

//   return total;
// };

// const result = add(1, 4, 5, 7, 87, 8, 9, 90);
// console.log("result", result);
// const result1 = add(1, 4, 5, 7);
// console.log("result", result1);
// const result2 = add(1, 4, 5, 7, 87, 8, 9, 90, 2, 5, 11, 33, 55, 6);
// console.log("result", result2);

// function b() {
//   console.log("Выполняется [b] 3"); //3
// }

// function a() {
//   console.log("Начала выполняться [a] 2"); //2
//   b();
//   console.log("Продолжила выполняться [a] после выхода из [b] 4 "); //4
// }

// console.log("Начал выполнение [global] 1"); //1
// a();
// console.log("Продолжил выполняться [global] после выхода из [a] 5"); //5

// const add = fn => fn + 10;
// console.log(add(3));

// const add = function(arr) {
//   let count = 0;
//   let total = null;

//   if (arr.length !== 0) {
//     for (count; count < arr.length; count++) {
//       console.log(arr[count]);
//       total += arr[count];
//     }
//   } else {
//     console.log("sorry not more arg ....");
//   }

//   return total;
// };

// const show = function(...x) {
//   console.log(x);
//   const result = add(x);
//   return transform(result);
// };

// const transform = param => param * 2;

// const result = show(2, 3, 4, 5, 6, 7, 88);

// console.log("result", result);

// console.log(transform(500));

// const uniqueFn = function(arr, callback) {
//   return callback(arr);
// };

// const add = function(arr) {
//   let count = 0;
//   let total = null;

//   if (arr.length !== 0) {
//     for (count; count < arr.length; count++) {
//       console.log(arr[count]);
//       total += arr[count];
//     }
//   } else {
//     console.log("sorry not more arg ....");
//   }

//   return total;
// };

// const result = uniqueFn([2, 3, 4, 5, 6, 7, 88], function(arr) {
//   for (let newArr of arr) {
//     console.log(newArr);
//   }
// });

// const fn = function(...rest) {
//   const arr = [];
//   for (let unique of rest) {
//     if (unique % 2 === 0) {
//       arr.push(unique);
//     }
//   }

//   return arr;
// };

// const result = fn(3, 5, 3, 2, 5, 6, 67, 7);

// console.log(result);

// const uniqueNumbers = [1, 2, 3, 5, 6];

// const unique = (arr, ...rest) => {
//   for (let uniqueNum of rest) {
//     if (!arr.includes(uniqueNum)) {
//       uniqueNumbers.push(uniqueNum);
//     }
//   }

//   return uniqueNumbers;
// };

// const result = unique(uniqueNumbers, 1, 2, 3, 4);

// console.log(result.sort());

/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// ); // вернется форматированная строка

// const add = function() {
//   console.log(arguments);
//   const arr = Array.from(arguments);
//   console.log(arr);
// };

// add(1, 2, 3, 34, 5);

// const name = "name";

// const user = {
//   [name]: "Bond",
//   lastName: "James",
//   age: 50,
//   isActive: true,
//   cars: ["audi", "jaguar", "aston martin"]
// };

// console.log(user.age);
// user.plus(10);
// console.log(user.age);
// user.plus(20);
// user.plus(100);
// console.log(user.age);

// user.work = true;

// delete user.age;

// console.log(user);

// const users = [
//   {
//     [name]: "Bond",
//     age: 50,
//     isActive: true,
//     cars: ["audi", "jaguar", "aston martin"]
//   },
//   {
//     [name]: "Jack",
//     age: 16,
//     isActive: false,
//     cars: ["audi", "jaguar"]
//   },
//   {
//     [name]: "Flash",
//     age: 20,
//     isActive: true,
//     cars: ["audi", "jaguar"]
//   },
//   {
//     [name]: "Bird",
//     age: 10,
//     isActive: false,
//     cars: ["audi", "jaguar", "aston martin"]
//   },
//   {
//     [name]: "Anna",
//     age: 30,
//     isActive: true,
//     cars: ["audi", "jaguar", "aston martin"]
//   }
// ];

// const fn = (someUsers, x) => {
//   const arr = [];
//   for (let user of someUsers) {
//     if (!user[x]) {
//       arr.push(user);
//     }
//   }
//   return arr;
// };

// const result = fn(users, "isActive");
// console.log(result);

// const Bond = {
//   apple: 20,
//   juice: 50,
//   nuts: 30,
//   milk: 2
// };

// // let start = 0;
// // for (let user in Bond) {
// //   start += Bond[user];
// //   console.log(Bond[user]);
// // }

// // console.log(start);

// const fruits = Object.entries(Bond);

// console.log(fruits);

// for (let key of fruits) {
//   console.log(key[0], "<---->", key[1]);
// }
