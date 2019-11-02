"use strict";

// const a = {
//   name: "Valera",
//   age: 20,
//   showName() {
//     console.log(this.name, this.age);
//   }
// };

// a.showName();
//
// const someUser = {
//   name: "Valera",
//   someFn() {
//     const showThisInnerFn = () => {
//       console.log(this);
//     };
//     showThisInnerFn();
//   }
// };

// someUser.someFn();

// function ShowName(param) {
//   console.log(this.name);
//   console.log(param);
//   return param;
// }

// const user = {
//   name: "Valera"
// };

// user.fn = ShowName;

// user.fn("ChoToTam");

// console.log(user);

// const user = {
//   name: "Valera",
//   age: 20,
//   showName() {
//     console.log(this.name, this.age);
//   }
// };

// // user.showName();

// function fn(callback) {
//   console.log(callback);
//   callback();
// }

// fn(user.showName.bind(user));

// function ShowName(param, second) {
//   console.log(this.name);
//   console.log(param);
//   console.log(second);
// }

// const user = {
//   name: "Valera"
// };

// const arr = ["someText", "secondParam"];

// ShowName.apply(user, arr);

// console.log(user);

//----------------

// function ShowName2() {
//   console.log(this.name);
// }

// const user2 = {
//   name: "Valera"
// };

// user2.fn = ShowName2;

// user2.fn();

// console.log(user2);

//--------------

// const Zina = {
//   name: "Zina",
//   count: 0,
//   allProducts: [],
//   saleProducts(product) {
//     this.count += 1;
//     this.allProducts.push(product);
//     console.log(product);
//   },
//   saleDay() {
//     console.log(
//       `за сегодня было продано ${this.count}, [${this.allProducts.join(
//         " "
//       )}] продавец : ${this.name} `
//     );
//   }
// };

// Zina.saleProducts("Tv");
// Zina.saleProducts("apple");
// Zina.saleProducts("phone");
// Zina.saleProducts("window");

// //------------- default ------
// Zina.saleDay();

// const Valera = {};

//------------ constructor ----------

const price = [
  { name: "apple", count: 4, price: 15 },
  { name: "juice", count: 14, price: 40 },
  { name: "pineApple", count: 2, price: 121 }
];

function Cashear(name, price) {
  this.name = name;
  this.count = 0;
  this.allProducts = [];
  // this.numProducts = 0;
  this.price = price;
  this.showName = function() {
    console.log(this.name);
  };
  this.saleProducts = function(product, num) {
    for (let elem of this.price) {
      if (elem.name === product) {
        if (elem.count - num === 0) {
          console.log(elem.count);
          this.numProducts = num;
          this.allProducts.push(elem.name);
          console.log(
            `за сегодня было продано  [${this.allProducts.join(
              " "
            )}] --> ${num} продавец : ${this.name} заработали ${elem.price *
              num} `
          );
        }
      }
    }
  };
  this.saleDay = function() {
    console.log(
      `за сегодня было продано  [${this.allProducts.join(" ")}] --> ${
        this.numProducts
      } продавец : ${this.name} заработали  `
    );
  };
}

// const zina = new Cashear("Zina");

// zina.saleProducts("tv");
// zina.saleProducts("laptop");
// zina.saleDay();

// console.log(zina);

// const valera = new Cashear("Valera");

// valera.saleProducts("tv");
// valera.saleProducts("laptop");
// valera.saleDay();

// console.log(valera);

const jack = new Cashear("Jack", price);

// jack.saleProducts("apple", 4);

jack.saleProducts("juice", 4);

console.log(jack.allProducts);
// jack.saleDay();
