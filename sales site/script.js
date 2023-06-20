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

    var removeButton = document.createElement("button");
    removeButton.textContent = "DELETE";
    removeButton.addEventListener(
      "click",
      (function (productId) {
        return function () {
          removeFromCart(productId);
        };
      })(item.id)
    );

    li.appendChild(removeButton);
    cartItemsElement.appendChild(li);
  }

  var totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = totalPrice;
}

function checkout() {
  // Check if the cart is empty
  if (cartItems.length === 0) {
    alert("Ваша корзина пуста. Добавьте товары перед оформлением заказа.");
    return;
  }

  // Prepare the cart data to send to the server
  var cartData = {
    items: cartItems,
    totalPrice: totalPrice,
  };

  // Simulate an AJAX request to send the cart data to the server
  // Replace this with your actual AJAX request
  simulateAjaxRequest("/placeOrder", cartData)
    .then(function (response) {
      // Clear the cart and reset the total price upon successful order placement
      cartItems = [];
      totalPrice = 0;

      updateCart();
      alert("Заказ оформлен! Номер заказа: " + response.orderNumber);
    })
    .catch(function (error) {
      alert("Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.");
      console.error(error);
    });
}

// Function to simulate an asynchronous AJAX request
function simulateAjaxRequest(url, data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // Simulate a successful response after a delay
      // Replace this with your actual AJAX implementation
      var response = {
        orderNumber: "123456789",
      };

      resolve(response);
    }, 2000); // Simulate a 2-second delay
  });
}

function removeFromCart(productId) {
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === productId;
  });

  if (itemIndex !== -1) {
    var removedItem = cartItems.splice(itemIndex, 1)[0];
    totalPrice -= removedItem.price * removedItem.quantity;
    updateCart();
  }
}

var currentUser = null;

function login(username, password) {
  // Здесь может быть логика аутентификации пользователя
  // Можно использовать Ajax запросы для проверки данных на сервере

  // Пример проверки логина и пароля
  if (username === "admin" && password === "password") {
    currentUser = {
      username: username,
      // Дополнительные данные о пользователе, если необходимо
    };
    showLoggedInView();
  } else {
    alert("Неверное имя пользователя или пароль");
  }
}

function logout() {
  currentUser = null;
  showLoggedOutView();
}

function showLoggedInView() {
  // Показать элементы интерфейса, доступные только авторизованным пользователям
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none";

  var logoutButton = document.getElementById("logoutButton");
  logoutButton.style.display = "block";

  var personalInfo = document.getElementById("personalInfo");
  personalInfo.textContent = "Добро пожаловать, " + currentUser.username + "!";
  personalInfo.style.display = "block";
}

function showLoggedOutView() {
  // Показать элементы интерфейса для неавторизованных пользователей
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "block";

  var logoutButton = document.getElementById("logoutButton");
  logoutButton.style.display = "none";

  var personalInfo = document.getElementById("personalInfo");
  personalInfo.style.display = "none";
}

function showLoggedInView() {
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none";

  var personalInfo = document.getElementById("personalInfo");
  personalInfo.style.display = "block";

  var usernameLabel = document.getElementById("usernameLabel");
  usernameLabel.textContent = "Добро пожаловать, " + currentUser.username + "!";
}

function showLoggedOutView() {
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "block";

  var personalInfo = document.getElementById("personalInfo");
  personalInfo.style.display = "none";
}

function login() {
  var usernameInput = document.getElementById("usernameInput").value;
  var passwordInput = document.getElementById("passwordInput").value;

  // Ваша логика аутентификации, например, проверка на сервере

  if (usernameInput === "admin" && passwordInput === "password") {
    currentUser = {
      username: usernameInput,
    };
    showLoggedInView();
  } else {
    alert("Неверное имя пользователя или пароль");
  }

  // Очистить поля ввода
  document.getElementById("usernameInput").value = "";
  document.getElementById("passwordInput").value = "";
}

function logout() {
  currentUser = null;
  showLoggedOutView();
}
