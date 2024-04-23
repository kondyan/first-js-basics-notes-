// const quantity = prompt("Введите количество товаров");
// const shoudRenew = confirm("Хотите продлить подписку?");
// let elementWidth = "100.55px";
// elementWidth = parseFloat(elementWidth);
// elementWidth = Number(elementWidth.toFixed(2));
// console.log("elementWidth: ", elementWidth);
// console.log({ quantity });
// console.log({ shoudRenew });
// console.log({ elementWidth });
// alert(
//   `${quantity} hello ${shoudRenew} ${typeof quantity} ${typeof shoudRenew}`
// );

// const base = 5;
// const power = 2;

// const result = Math.pow(base, power);

// console.log(result);

// FIRST SCRIPT

// let firstNumber = prompt("Enter a number wich you want to involute");
// let secondNumber = prompt("Enter an involute");
// // firstNumber = Number(firstNumber);
// // secondNumber = Number(secondNumber);
// const calculationResult = Number(firstNumber) ** Number(secondNumber);

// console.log({ calculationResult });
// alert(`Результат: ${calculationResult}`);

// console.log("5" + 5);

// // const result = Math.round(Math.random() * (max - min) + min);

// // console.log(result);

// // const message = "23123";

// // const messageLength = message.length;
// // console.log(messageLength);

// // SECOND SCRIPT

// const max = 300;
// const min = 800;

// const firstName = prompt("Enter your First name");
// const lastName = prompt("Enter your Last name");
// const fullName = firstName + " " + lastName;
// const room = Math.round(Math.random() * (max - min) + min);
// const type = "VIP";
// const result = `Your registration data: ${fullName} Room Number: ${room} Room type: ${type}`;

// console.log(result);

// const brand = "Samsung";
// const normalizedBrand = brand.toLowerCase();

// console.log(normalizedBrand);

// const blackListedWord1 = "spam";
// const blackListedWord2 = "sale";

// const string1 = "spam";
// const string2 = "SAle";
// const string3 = "fatlivesmatter";

// console.log(string1.toLowerCase().includes(blackListedWord1));
// console.log(string1.toLowerCase().includes(blackListedWord2));

// console.log(string2.toLowerCase().includes(blackListedWord1));
// console.log(string2.toLowerCase().includes(blackListedWord2));

// console.log(string3.toLowerCase().includes(blackListedWord1));
// console.log(string3.toLowerCase().includes(blackListedWord2));

// console.log(4 || 7 || false || 10);

// let stars = prompt("Type how many stars you want your hotel to be");
// stars = Number(stars);
// let price;
// const doesntExist = "This star amount does not exist";

// if (stars === 1) {
//   price = "20$";
// } else if (stars === 2) {
//   price = "30$";
// } else if (stars === 3) {
//   price = "50$";
// } else if (stars === 4) {
//   price = "70$";
// } else if (stars === 5) {
//   price = "120$";
// } else {
//   console.log(doesntExist);
// }

// diferent posibility to do the same:

// switch (stars) {
//   case 1:
//   case 2:
//     price = "20$";
//     break;
//   case 3:
//   case 4:
//     price = "50$";
//     break;
//   case 5:
//     price = "120$";
//     break;

//   default:
//     console.log(doesntExist);
// }
// console.log(price);

// let chooseOption = prompt("Choose delivery option 1, 2, ,3");
// chooseOption = Number(chooseOption);
// const pickUp = 1;
// const houseDelivery = 2;
// const post = 3;
// let message;
// const callBack = "Manager will call you back.";

// switch (chooseOption) {
//   case 1:
//     message =
//       "You will be able to pickup package at the office tomorrow at 12 AM.";
//     break;
//   case 2:
//     message = "Cureer will deliver your package tomorrow from 9AM till 6PM.";
//     break;
//   case 3:
//     message = "Package will be sent today";
//     break;
//   default:
//     message = "You have chosen incorect delivery option.";
// }

// console.log(message);
// const arr = [1, 2, 3];
// if (arr.includes(chooseOption)) {
//   console.log(callBack);
// }

// for (let i = 0; i <= 50000; i += 1) {
//   console.log(i);
// }

// const employees = 4;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 0; i < employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Salary of employeer number ${i} - ${salary}`);

//   totalSalary += salary;
// }

// console.log(`Total salary of all employeers is ${totalSalary}`);

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log("не чётное: ", i);
//     continue;
//   }

//   console.log("чётное: ", i);

//   total += i;
// }

// console.log("total = ", total);

// const numbers = [
//   1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 120, 150, 125, 10050, 10051,
// ];

// let total = 0;

// for (value of numbers) {
//   if (value % 2 !== 0) {
//     continue;
//   } else {
//     console.log(value);
//     total += value;
//   }
// }

// console.log(total);

// const logins = ["vasya", "petya", "senya"];
// const loginToFind = prompt();

// let message = "Login was not found";

// for (value of logins) {
//   if (value == loginToFind) {
//     message = "Login has been found";
//     break;
//   }
// }

// console.log(message);

// const numbers = [1, 2, 3, 15, 26, 5];
// let biggestNumber = numbers[0];

// for (number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log(biggestNumber);

// console.log("first line on laptop");

// const inputNumber = prompt(
//   "Guess a number, multiply your number by 2, add 7 and enter your number: "
// );

// const guessedNumber1 = inputNumber - 7;
// const guessedNumber2 = guessedNumber1 / 2;
// console.log(guessedNumber2);

// const title = "Top 10 Benefits of React Framework";

// const titleToLowerCase = title.toLowerCase().split();

// const titleConnected = titleToLowerCase.join("-");

// console.log(title);
// console.log(titleToLowerCase);
// console.log(titleConnected);

// const array1 = [1, 2, 3];
// const array2 = [10, 20, 30];

// const numbers = array1.concat(array2);

// let total = 0;

// for (number of numbers) {
//   total += number;
// }

// console.log(total);

// const add = function (x, y) {
//   // .....
//   console.log("this is function");
//   console.log(x);
//   console.log(y);
// };

// add(1, 30);

// const logins = ["vasya", "petya", "senya"];

// // const findLogin = function (allLogins, loginToFind) {
// //   return allLogins.includes(loginToFind)
// //     ? "Login has been found"
// //     : "Login was not found";
// // };

// const findLoginNew = function (allLogins, loginToFind) {
//   for (value of allLogins) {
//     if (value == loginToFind) {
//       return "Login has been found";
//     }
//   }
//   return "Login was not found";
// };

// const testFnc = function (func, allLogins, loginToFind) {
//   return func(allLogins, loginToFind);
// };

// console.log(testFnc(findLoginNew, [1, 2], prompt()));
// console.log(findLogin(logins, prompt()));
// console.log(findLogin([1, 2], Number(prompt())));

// const numbers = [1, 2, 3, 15, 26, 5];
// let biggestNumber = numbers[0];

// for (number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log(biggestNumber);

// const numbers = [1, 2, 3, 15, 26, 5];

// const findBiggestNumber = function (numbers) {
//   let biggestNumber = numbers[0];

//   for (number of numbers) {
//     if (number > biggestNumber) {
//       biggestNumber = number;
//     }
//   }

//   return biggestNumber;
// };

// console.log(findBiggestNumber(numbers));

// const fn = function (a, ...args) {
//   return args;
// };

// console.log(fn("hello", 1, 2, 3));
// console.log(fn("aloha", 1, 2, 3, 4, 5));
// console.log(fn("hi", 1, 2, 3, 4, 5, 6, 7));

// const add = function (...args) {
//   let totalNumber = 0;
//   for (arg of args) {
//     totalNumber += number;
//   }
//   return totalNumber;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const filteNumbers = function (array, ...args) {
//   let totalArray = [];
//   for (arrayNumber of array) {
//     if (args.includes(arrayNumber)) {
//       totalArray.push(arrayNumber);
//     }
//   }
//   return totalArray;
// };

// console.log(filteNumbers([1, 2, 3], 1, 2, 3, 4, 5));
// console.log(filteNumbers([2, 4, 6], 7, 10, 15, 24, 254, 4));
// console.log(filteNumbers([1052, 23, 10], 124, 325, 9, 47, 10));

// function makeArray(firstArray, secondArray, maxLength) {

//   const concatedArray = firstArray.concat(secondArray);

//   return concatedArray.slice(0, maxLength);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// function filterArray(numbers, value) {
//   let filteredNumbers = [];

//   for (element of numbers) {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   }

//   return filteredNumbers;
// }

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = Number(i);
//     break;
//   }
// }
// console.log(number);

// const cart = {
//   items: [],
//   getItems() {
//     return this.items.map((item) => ({ ...item }));
//   },
//   add(product) {
//     const productName = product.name;
//     for (item of this.items) {
//       if (item.name === productName) {
//         item.quantity += product.quantity;
//         return;
//       }
//     }
//     this.items.push(product);
//   },
//   remove(productName) {
//     const newArray = [];
//     for (item of this.items) {
//       if (item.name !== productName) {
//         newArray.push(item);
//       }
//     }
//     this.items = [...newArray];
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalprice() {
//     let totalPrice = 0;
//     for (item of this.items) {
//       totalPrice += item.price * item.quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     for (item of this.items) {
//       if (item.name === productName) {
//         return (item.quantity += 1);
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const newArray = [];
//     for (item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         break;
//       }
//     }
//     for (item of this.items) {
//       if (item.quantity !== 0) {
//         newArray.push(item);
//       }
//     }
//     this.items = [...newArray];
//   },
// };

// cart.add({ name: "apple", price: 50, quantity: 2 });
// cart.add({ name: "apple", price: 50, quantity: 1 });
// cart.add({ name: "watermelon", price: 100, quantity: 3 });

// console.log(cart.getItems());
// console.log(cart.countTotalprice());

// cart.add({ name: "apple", price: 50, quantity: 2 });

// console.log(cart.getItems());
// console.log(cart.countTotalprice());

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(lastTag);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let color of colors) {
//   console.log(color.hex);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let allValues = [];

//   const keys = Object.keys(products[0]);

//   console.log(keys);

//   if (!keys.includes(propName)) {
//     return allValues;
//   }

//   for (let value of products) {
//     allValues.push(value[propName]);
//     console.log(value);
//   }
//   return allValues;

//   // Change code above this line
// }

// getAllPropValues("name");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return 0;

//   // Change code above this line
// }

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// // how u shouldnt do below ->
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };

// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;

// }

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const indexOfBook = this.books.indexOf(oldName);

//     if (indexOfBook !== -1) {
//       this.books.splice(indexOfBook, 1, newName);
//     }

//     // Change code above this line
//   },
// };
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const indexOfOldName = this.potions.indexOf(oldName);

//     if (indexOfOldName !== -1) {
//       this.potions[indexOfOldName] = newName;
//     }

//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   getIndex(str) {
//     for (const [indexOf, potion] of this.potions.entries()) {
//       if (potion.name === str) {
//         return indexOf;
//       }
//     }

//     return -1;
//   },

//   addPotion(newPotion) {
//     if (this.getIndex(newPotion) !== -1) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.getIndex(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.getIndex(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const cans = [
//   {
//     index: 1,
//     fulled: false,
//     closed: false,
//     stickerOn: false,
//   },
//   {
//     index: 2,
//     fulled: false,
//     closed: false,
//     stickerOn: false,
//   },

//   {
//     index: 3,
//     fulled: false,
//     closed: false,
//     stickerOn: false,
//   },

//   {
//     index: 4,
//     fulled: false,
//     closed: false,
//     stickerOn: false,
//   },
// ];

// const canFulling = (can) => {
//   can.fulled = true;
//   return can;
// };

// const canClosing = (can) => {
//   can.closed = true;
//   return can;
// };

// const canStickerOn = (can) => {
//   can.stickerOn = true;
//   return can;
// };

// // const cansDone = cans
// //   .map((can) => canFulling(can))
// //   .map((can) => canClosing(can))
// //   .map((can) => canStickerOn(can));

// const cansDone = cans.map(canFulling).map(canClosing).map(canStickerOn);

// console.log(cansDone);
