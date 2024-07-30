let firstNumber = "";
let secondNumber = "";

const firstNumberInput = document.getElementById("first-number");
firstNumberInput.addEventListener("input", function () {
  firstNumber = event.target.value;
});

const secondNumberInput = document.getElementById("second-number");
secondNumberInput.addEventListener("input", function () {
  secondNumber = event.target.value;
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  if (firstNumber === "" || secondNumber === "") {
    alert("Please fill in all fields");
  } else {
    const resudlt = document.getElementById("result");
    let total = Number(firstNumber) + Number(secondNumber);
    result.innerHTML = total;
  }
});
