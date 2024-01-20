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

// let firstNumber = prompt("Введите число которое хотите возвести в степень");
// let secondNumber = prompt("Введите степень");
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

const blackListedWord1 = "спам";
const blackListedWord2 = "распродажа";

const string1 = "спам";
const string2 = "РАСПродажа";
const string3 = "fatlivesmatter";

console.log(string1.toLowerCase().includes(blackListedWord1));
console.log(string1.toLowerCase().includes(blackListedWord2));

console.log(string2.toLowerCase().includes(blackListedWord1));
console.log(string2.toLowerCase().includes(blackListedWord2));

console.log(string3.toLowerCase().includes(blackListedWord1));
console.log(string3.toLowerCase().includes(blackListedWord2));
