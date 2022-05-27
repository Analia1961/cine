// CLASE 10 - Viernes 20 de mayo de 2022 - Estructuras de Datos y Métodos
// Ejercicio OBLIGATORIO (Fecha máxima de entrega: viernes 27/5)

// Ejercicio 1: CINE

/* • Diseñar un algoritmo que recorra las butacas de una sala 
de cine y determine cuántas butacas desocupadas hay.
• Suponga que para modelar este problema, se utiliza un 
arreglo con valores lógicos.
• La presencia de un valor verdadero (true) en el arreglo 
indica que la butaca está ocupada.
• La presencia de un valor falso (false) en el arreglo 
indica que la butaca está desocupada. */

let cantidadButacas: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en la sala")
);

let butacas: string[] = new Array(cantidadButacas);
let indice: number;
let butacasDesocupadas: number = 0;
for (indice = 0; indice < cantidadButacas; indice++) {
  butacas[indice] = prompt(
    "Ingrese true si está ocupada y false si no lo está, butaca[" + indice + "]"
  );
  if (butacas[indice] === "false") {
    butacasDesocupadas++;
  }
}
console.log(butacas);
console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas);

/* Ejercicio realizado gracias al aporte de prácticas 
y consultas del grupo de alumnos vía WhatsApp. */

//CINE -----------en clase-------------
// let cine: boolean[] = [true, false, false, true];
// 1 - CREAR EL ARREGLO CON LOS VALORES LOGICOS [true, false, false, true]
// 2- crear las variable sillas desocupadas.
// 3- si la silla está desocupada (false) entonces sillas desocupadas+1
// 4- retornar el valor de las sillas desocupadas

//-----------------------------------

/* let cantidadButacas: number = Number(
  prompt("Ingrese la cantidad de butacas que hay en el cine: ")
);

let cine: boolean[] = new Array(cantidadButacas);
let butacasDesocupadas: number = 0;

for (let i: number = 0; i < cantidadButacas; i++) {
  cine[i] = Boolean(
    prompt("¿La butaca está desocupada? (true si es SI y false si es NO)")
  );
  if (cine[i] === false) {
    butacasDesocupadas++;
  }
}
console.log("La cantidad de butacas desocupadas es: " + butacasDesocupadas);
*/
