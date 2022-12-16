




let orderPrice = 0;
let peopleNumber = 1;
let result;
let tip = 0

function calculator(orderPrice,tip,peopleNumber) {
    console.log(orderPrice,tip,peopleNumber);
 return {
  pricePerson:(orderPrice / peopleNumber ),
  tipPerson: (orderPrice * tip / 100)/ peopleNumber,
 }
  }