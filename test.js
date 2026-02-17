
//Метод price() — загальна вартість
services.price = function () {
  var total = 0;

  for (var key in this) {
    if (typeof this[key] === "string") {
      var number = parseInt(this[key]);
      total += number;
    }
  }

  return total + " грн";
};


//Метод minPrice() — мінімальна ціна
services.minPrice = function () {
  var min = Infinity;

  for (var key in this) {
    if (typeof this[key] === "string") {
      var number = parseInt(this[key]);

      if (number < min) {
        min = number;
      }
    }
  }

  return min + " грн";
};

//Метод maxPrice() — максимальна ціна
services.maxPrice = function () {
  var max = 0;

  for (var key in this) {
    if (typeof this[key] === "string") {
      var number = parseInt(this[key]);

      if (number > max) {
        max = number;
      }
    }
  }

  return max + " грн";
};