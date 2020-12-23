const kelvin = 293;
// This is like 20 degrees of Celsuis, but in Kelvin 

const celsuis = kelvin - 273;
// This is the same temperature, but in Celsuis

let fahrenheit = celsuis * (9/5) + 32;
// Still the same temperature, but in  Fahrenheit

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


