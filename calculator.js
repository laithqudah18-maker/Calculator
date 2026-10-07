const display = document.querySelector("#num");
const numbers = document.querySelectorAll(".number");
const add = document.querySelector("#plus");
let firstnumber;
let secondnumber;
const equal = document.querySelector("#equal");
const result = document.querySelector("#result");
const minus = document.querySelector("#minus");
let operator;
const times = document.querySelector("#times");
const divide = document.querySelector("#divide");
const clear = document.querySelector("#clear");


function chooseOperation(operation) {

  if (operator !== undefined) {
    secondnumber = Number(display.value);

    firstnumber = calculate(firstnumber, secondnumber, operator);
  } else {
    firstnumber = Number(display.value);
  }

  operator = operation;
  display.value = "";
}


function calculate(firstnumber, secondnumber, operator) {

  if (operator === "+") {
    return firstnumber + secondnumber;
  }

  if (operator === "-") {
    return firstnumber - secondnumber;
  }

  if (operator === "/") {

    if (secondnumber === 0) {
      alert("can not divide  by 0");
      return;
    }

    return firstnumber / secondnumber;
  }

  if (operator === "*") {
    return firstnumber * secondnumber;
  }
}


numbers.forEach(function(button) {

  button.addEventListener("click", function() {

    display.value += button.textContent;

  });

});


add.addEventListener("click", function() {
  chooseOperation("+");
});


equal.addEventListener("click", function() {

  if (operator === undefined) {
    return;
  }

  secondnumber = Number(display.value);

  result.textContent = calculate(firstnumber, secondnumber, operator);

});


minus.addEventListener("click", function() {
  chooseOperation("-");
});


times.addEventListener("click", function() {
  chooseOperation("*");
});


divide.addEventListener("click", function() {
  chooseOperation("/");
});


clear.addEventListener("click", function() {

  display.value = "";
  result.textContent = "";
  operator = undefined;
  firstnumber = undefined;
  secondnumber = undefined;

});
