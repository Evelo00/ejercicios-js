
// Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

let numero = parseInt(prompt("Ingrese un número"));
let tabla = "";

for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(tabla);

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let acumulador = 0;
let num2 = parseInt(prompt("Ingrese un número"));

while (num2 !== 0) {
    acumulador += num2;
    num2 = parseInt(prompt("Ingrese un número"));
}

console.log(acumulador);

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let num3 = parseInt(prompt("Ingrese un número"));
console.log(numeroSecreto)

while (num3 !== numeroSecreto) {
    if (num3 < numeroSecreto) {
        console.log("El número secreto es mayor");
    } else {
        console.log("El número secreto es menor");
    }
    num3 = parseInt(prompt("Ingrese un número"));
    intentos++;
}

console.log(`Felicitaciones, adivinaste el número secreto en ${intentos} intentos`);

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

let num4 = parseInt(prompt("Ingrese un número"));
let esPrimo = true;

for (let i = 2; i <= num4 / 2; i++) {
    if (num4 % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    console.log("El número es primo");
} else {
    console.log("El número no es primo");
}

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let num5 = parseInt(prompt("Ingrese un número"));
let divisores = "";

for (let i = 1; i <= num5; i++) {
    if (num5 % i === 0) {
        divisores += `${i} `;
    }
}

console.log(divisores);

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i] * 2);
}

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    { nombre: "Pepito", edad: 30, sexo: "Masculino", parentesco: "Padre" },
    { nombre: "Pepita", edad: 28, sexo: "Femenino", parentesco: "Madre" },
    { nombre: "Pepe", edad: 10, sexo: "Masculino", parentesco: "Hermano" },
    { nombre: "Rei", edad: 5, sexo: "Femenino", parentesco: "Hija" },
    { nombre: "Eva", edad: 2, sexo: "Masculino", parentesco: "Hija" }
];

for (let i = 0; i < familia.length; i++) {
    console.log(`Hola, mi nombre es ${familia[i].nombre}, tengo ${familia[i].edad} años, soy ${familia[i].sexo} y soy ${familia[i].parentesco}`);
}

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 !== 0) {
        console.log(array3[i]);
    }
}

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

let sumaPares = 0;
let sumaImpares = 0;
let num10 = parseInt(prompt("Ingrese un número"));

while (num10 !== 0) {
    if (num10 % 2 === 0) {
        sumaPares += num10;
    } else {
        sumaImpares += num10;
    }
    num10 = parseInt(prompt("Ingrese un número"));
}

console.log(`La suma de los números pares es ${sumaPares} y la suma de los números impares es ${sumaImpares}`);

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mayor = array4[0];

for (let i = 1; i < array4.length; i++) {
    if (array4[i] > mayor) {
        mayor = array4[i];
    }
}

console.log(mayor);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let menor = array5[0];

for (let i = 1; i < array5.length; i++) {
    if (array5[i] < menor) {
        menor = array5[i];
    }
} 

console.log(menor);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

// Función para obtener la elección del jugador
function obtenerEleccion(jugador) {
  let eleccion;
  do {
    eleccion = prompt(jugador + ", elige: piedra, papel o tijeras").toLowerCase();
  } while (eleccion !== "piedra" && eleccion !== "papel" && eleccion !== "tijeras");
  return eleccion;
}

// Función para determinar el ganador
function determinarGanador(eleccion1, eleccion2) {
  if (eleccion1 === eleccion2) {
    return "Empate";
  } else if (
    (eleccion1 === "piedra" && eleccion2 === "tijeras") ||
    (eleccion1 === "papel" && eleccion2 === "piedra") ||
    (eleccion1 === "tijeras" && eleccion2 === "papel")
  ) {
    return "Jugador 1";
  } else {
    return "Jugador 2";
  }
}

// Ingresar nombres de los jugadores
let jugador1 = prompt("Ingresa el nombre del Jugador 1");
let jugador2 = prompt("Ingresa el nombre del Jugador 2");

// Bucle del juego que mande un mensaje para cuando quedan en empate y otro para cuando hay un ganador
let ganador;
do {
  let eleccionJugador1 = obtenerEleccion(jugador1);
  let eleccionJugador2 = obtenerEleccion(jugador2);
    ganador = determinarGanador(eleccionJugador1, eleccionJugador2);
    if (ganador === "Empate") {
        console.log("Empate, sigan jugando");
    } else {
        console.log(`El ganador es ${ganador}`);
    }
} while (ganador === "Empate");




// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

let triangulo = "";

for (let i = 1; i <= 5; i++) {
    triangulo += "*".repeat(i) + "\n";
}

console.log(triangulo);

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

let trianguloInvertido = "";

for (let i = 5; i >= 1; i--) {
    trianguloInvertido += "*".repeat(i) + "\n";
}

console.log(trianguloInvertido);




// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

let array6 = [5, 2, 8, 1, 9, 3, 7, 4, 6, 10];
let arrayOrdenado = [];

for (let i = 0; i < array6.length; i++) {
    let menor = array6[i];
    for (let j = 0; j < array6.length; j++) {
        if (array6[j] < menor) {
            menor = array6[j];
        }
    }
    arrayOrdenado.push(menor);
    array6[array6.indexOf(menor)] = Infinity;
}

console.log(arrayOrdenado);

