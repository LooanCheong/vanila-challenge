const gameForm = document.querySelector(".gameForm");
const maxNum = document.querySelector(".maxNum");
const inputNum = document.querySelector(".inputNum");
const guessForm = document.querySelector(".guessForm");
const choseNum = document.querySelector(".choseNum");
const result = document.querySelector(".result");

function handlerInput() {
  const maxRange = maxNum.value;
  inputNum.setAttribute("max", maxRange);
}

gameForm.addEventListener("input", handlerInput);

function randomNum(event) {
  event.preventDefault();
  const maxRange = maxNum.value;
  const num = inputNum.value;
  const randomNum = Math.ceil(Math.random() * maxRange);
  makeResult(num, randomNum);
}

guessForm.addEventListener("submit", randomNum);

function makeResult(num, randomNum) {
  choseNum.innerText = `You chose: ${num}, the machine chose: ${randomNum}.`;
  num = parseInt(num);
  if (num == randomNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}
