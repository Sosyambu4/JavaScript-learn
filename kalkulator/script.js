const sumTotal = document.getElementById("summ_2");
const sumAmount = document.getElementById("summ_1");
let orderPriceInput = document.querySelector("#orderPrice");
let numberPeopleInput = document.querySelector("#peopleNumber");
let containerButton = document.querySelector(".container_button");
let customTipInput = document.querySelector("#Custom");
let resetButton = document.querySelector("#submit");
let orderPrice = 0;
let peopleNumber = 1;
let result;
let tip = 0;

/* const body = document.querySelector('body')
const obj = {
  x: 1
}
body.innerText = obj.x */

console.log(orderPrice);
function calculator(orderPrice, tip, peopleNumber) {
  console.log(orderPrice, tip, peopleNumber);
  return {
    pricePerson: orderPrice / peopleNumber,
    tipPerson: (orderPrice * tip) / 100 / peopleNumber,
  };
}

function showResult() {
  const { pricePerson, tipPerson } = result;
  console.log(pricePerson, tipPerson);
}

orderPriceInput.addEventListener("keyup", (e) => {
  console.log(e);
  orderPrice = Number(e.target.value);
  result = calculator(orderPrice, tip, peopleNumber);
});

numberPeopleInput.addEventListener("keyup", (e) => {
  console.log(e);
  peopleNumber = Number(e.target.value);
  result = calculator(orderPrice, tip, peopleNumber);
});

containerButton.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.value) {
    tip = Number(e.target.value);
    result = calculator(orderPrice, tip, peopleNumber);
    resultSumm = result.pricePerson + result.tipPerson;
    document.getElementById("summ_1").innerHTML = `$${result.tipPerson}`;
    document.getElementById("summ_2").innerText = `$${resultSumm}`;
  }
});

customTipInput.addEventListener("keyup", (e) => {
  console.log(e);
  tip = Number(e.target.value);
  result = calculator(orderPrice, tip, peopleNumber);
  resultSumm = result.pricePerson + result.tipPerson;
  document.getElementById("summ_1").innerHTML = `$${result.tipPerson}`;
  document.getElementById("summ_2").innerText = `$${resultSumm}`;
});

function checkParams() {
  if (orderPriceInput.length != 0 && numberPeopleInput.length != 0 && containerButton.length != 0 && customTipInput.length != 0) {
    resetButton.removeAttribute("disabled");
  } else {
    resetButton.attributes("disabled");
  }
}

let form = document.getElementById("form");
let formNumber = document.getElementById("form_number");

resetButton.addEventListener("click", function () {
  orderPriceInput.value = "";
  containerButton.value = "";
  numberPeopleInput.value = "";
  document.getElementById("summ_1").innerHTML = "$0.00";
  document.getElementById("summ_2").innerHTML = "$0.00";
  location.reload();
});

numberPeopleInput.onblur = function () {
  if (numberPeopleInput.value.includes("0")) {
    numberPeopleInput.classList.add("invalid");
    error.innerHTML = "Can`t be zero";
  }
};

numberPeopleInput.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};
