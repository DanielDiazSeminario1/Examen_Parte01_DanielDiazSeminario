/Ingrese datos en num
let num = 28;

let suma = 0;

for (let i = num; i >= 0; i--) {
  if (num % i === 0) {
    suma = suma + i;
  }
}

if (suma / 2 == num) {
  console.log("Si es Perfecto");
} else console.log("No es Capicua");