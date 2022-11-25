
// console.log(numero * 1);
// console.log(numero * 2);
// console.log(numero * 3);
// console.log(numero * 4);
// console.log(numero * 5);
// console.log(numero * 6);
// console.log(numero * 7);
// console.log(numero * 8);
// console.log(numero * 9);


var numero = 9;

for (var contador = 1; contador < 9; contador += 1) {
    console.log(numero * contador);
}

// 
//

var listaDeNomes = ["Joana", "Maria", "Lucas"];

for (var indice = 0; indice < listaDeNomes.length; indice += 1) {
    var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
    console.log(mensagem);
}

// 
// 

let cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars[0]); // Saab
// console.log(cars[1]); // Volvo
// console.log(cars[2]); // BMW


for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

// 
// 

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}