// ⚠️ Tenha muito cuidado! É fácil causar loops infinitos utilizando o while!


let counter = 0;

while(counter !== 5) {
  counter += 1;
}

// 
// 


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}