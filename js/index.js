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

for (let i = 0; i <= 50000; i += 1) {
  console.log(i);
}
