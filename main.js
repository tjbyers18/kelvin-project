//Todays Forecast-Kelvin
var kelvin = 0;

//Todays Forecast-Celsius
var celsius = (kelvin -= 273);
console.log (celsius);

//Farenheit
var farenheit = (celsius * (9/5) + 32);
console.log (farenheit);

// Farenheit Rounded
var farenheitFloor = (Math.floor (farenheit));
console.log(Math.floor(farenheitFloor));

console.log (`The temperature is ${farenheitFloor} degrees Fahrenheit.`);
