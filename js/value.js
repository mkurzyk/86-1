
var a = prompt("Enter the first number: ","");
var b = prompt("Enter the second number: ","");
value = (a * a) - (2 * a * b) - (b * b);
console.log(value);

if (value < 0) {
    document.write('The result is negative');
} else if (value > 0) {
    document.write('The result is positive');
} else {
    document.write('The result is zero');
}