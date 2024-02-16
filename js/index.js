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

const numbers = [1, 2, 3, 15, 26, 5];

const findBiggestNumber = function (numbers) {
  let biggestNumber = numbers[0];
  for (number of numbers) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  return biggestNumber;
};

console.log(findBiggestNumber(numbers));
