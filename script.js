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
