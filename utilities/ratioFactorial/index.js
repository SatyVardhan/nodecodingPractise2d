const ratioFun = require("../ratio/index");
const factFun = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratioOftwoNumbers = ratioFun(num1, num2);
  const factorial = factFun(num3);
  return { ratioOftwoNumbers, factorial };
};
module.exports = ratioAndFactorial;
