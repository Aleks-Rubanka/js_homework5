// 🔹 Створюємо сервіс
var service = {
  services: {
    "стрижка": "60 грн",
    "гоління": "80.5 грн",
    "Миття голови": "100.25 грн"
  }
};

// 🔹 Додаємо нову послугу
service.services["Розбити скло"] = "200.75 грн";

// 🔹 Метод загальної вартості
service.price = function () {
  var total = 0;

  for (var key in this.services) {
    var number = parseFloat(this.services[key]); // замість parseInt
    total += number;
  }

  return total + " грн";
};

// 🔹 Метод мінімальної ціни
service.minPrice = function () {
  var min = Infinity;

  for (var key in this.services) {
    var number = parseFloat(this.services[key]); // замість parseInt
    if (number < min) min = number;
  }

  return min + " грн";
};

// 🔹 Метод максимальної ціни
service.maxPrice = function () {
  var max = 0;

  for (var key in this.services) {
    var number = parseFloat(this.services[key]); // замість parseInt
    if (number > max) max = number;
  }

  return max + " грн";
};

// 🔹 Перевірка
console.log("Послуги:", service.services);
console.log("Загальна сума:", service.price());
console.log("Мінімальна ціна:", service.minPrice());
console.log("Максимальна ціна:", service.maxPrice());


