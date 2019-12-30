let toFahrenheit = function(fahrenheit) {
    let celsius = 0;
    celsius = (fahrenheit -32)*(5/9);
    return celsius;
}

console.log(toFahrenheit(32));