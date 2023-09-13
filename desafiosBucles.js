// Imprimir impares 1 - 20
for(let i=1;i<=20;i++){
  if(i % 2 !== 0){
    console.log(i);
  }
}

// Disminuir múltiplos de 3
for(let i=100;i>=0;i--){
  if(i % 3 === 0){
    console.log(i);
  }
}

// Imprimir secuancia 4, 2.5, 1, -0.5, -2, -3.5
let num = 4;
while(num >= -3.5){
  console.log(num);
  num -= 1.5;
}

// Sigma
let sum = 0;
let i = 1;
while(i <= 100){
  sum += i;
  i++;
}
console.log(sum);

// Factorial
let product = 1;
for(let i=1;i<=12;i++){
  product *= i;
}
console.log(product);