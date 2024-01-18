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

let firstNumber = prompt("Введите число которое хотите возвести в степень");
let secondNumber = prompt("Введите степень");
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);
const calculationResult = Number(firstNumber) ** Number(secondNumber);

console.log({ calculationResult });
alert(`Результат: ${calculationResult}`);

console.log("5" + 5);
