const convertToCelsius = function(fahrenheitDegree) {
  let celsius = (fahrenheitDegree - 32)* (5/9);
  let roundedOneDecimal = Math.round(celsius*10) / 10;
  return roundedOneDecimal;
};

const convertToFahrenheit = function(celsiusDegree) {
  let fahrenheit = celsiusDegree* (9/5) + 32;
  let roundedOneDecimal = Math.round(fahrenheit*10) / 10;
  return roundedOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
