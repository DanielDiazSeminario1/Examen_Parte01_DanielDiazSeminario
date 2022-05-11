//Ingrese datos en num
let num = 1001;
let numtext1 = num.toString();
let numtextin = num.toString().split("").reverse().join("");

if (numtext1 != numtextin) {
  console.log("No es capicúa");
} else console.log("Si es capicúa");