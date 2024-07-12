//* Incre-Decre Input Value
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const inputValue = document.getElementById("inputValue");

decrementButton.addEventListener("click", () => {
  if (parseInt(inputValue.value) > 1) {
    inputValue.value = parseInt(inputValue.value) - 1;
  }
});

incrementButton.addEventListener("click", () => {
  inputValue.value = parseInt(inputValue.value) + 1;
});
