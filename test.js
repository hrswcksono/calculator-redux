const mathOp = "121 + 13342";

const temp = mathOp.indexOf(" ");
const temp2 = mathOp.indexOf(" ", temp + 1);

const num1 = +mathOp.slice(0, temp);
const num2 = +mathOp.slice(temp2, mathOp.length);

console.log(num1);
console.log(num2);

const operation = mathOp.slice(temp2 - 1, temp2);
console.log(operation);

// const operation = +mathOp.slice(0, temp) + console.log(mathOp.slice(0, temp));
