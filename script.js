function toFahrenheit(celsius) {
 // Write your code here
	const a = celsius+32;
	return a.toFixed(2);
}

 // Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
