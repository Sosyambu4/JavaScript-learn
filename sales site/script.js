var cartItems = [];
var totalPrice = 0;

function addToCart(productId) {
  // Получаем информацию о продукте (например, с сервера)
  var product = getProductById(productId);

  // Проверяем, есть ли уже такой продукт в корзине
  var existingItem = cartItems.find(function (item) {
    return item.id === product.id;
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    product.quantity = 1;
    cartItems.push(product);
  }

  // Увеличиваем общую стоимость
  totalPrice += product.price;

  updateCart();
}

function getProductById(productId) {
  // Вернуть информацию о продукте с указанным идентификатором
  // Здесь может быть Ajax запрос к серверу или использование хранилища данных

  // Пример возврата информации о продукте
  var products = [
    { id: 1, name: "Продукт 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Продукт 2", price: 20, image: "product2.jpg" },
    { id: 3, name: "Продукт 3", price: 30, image: "product3.jpg" },
  ];

  return products.find(function (product) {
    return product.id === productId;
  });
}

function updateCart() {
  var cartItemsElement = document.getElementById("cartItems");
  cartItemsElement.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    var li = document.createElement("li");
    li.textContent = item.name + " x " + item.quantity + " - " + item.price + " рублей";
    cartItemsElement.appendChild(li);
  }

  var totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = totalPrice;
}

function checkout() {
  // Здесь можно добавить логику оформления заказа
  // Можно использовать Ajax запросы для отправки данных на сервер

  // Пример очистки корзины
  cartItems = [];
  totalPrice = 0;

  updateCart();
  alert("Заказ оформлен!");
}
