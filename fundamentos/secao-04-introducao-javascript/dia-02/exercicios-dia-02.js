let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let sum = 0;

for (let indice = 0; indice < numbers.length; indice++) {
    sum += numbers[indice];
}
console.log(sum);

Math.floor(sum / 10);
console.log(Math.floor(sum / 10));

if (sum >= 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20");
}