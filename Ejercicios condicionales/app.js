// 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
// mayor que el segundo.

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
  console.log("El primer número es mayor que el segundo");
} else {
  console.log("El primer número no es mayor que el segundo");
}

// 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
// iguales o si son diferentes.

let num3 = 10;
let num4 = 10;

if (num3 === num4) {
  console.log("Los números son iguales");
} else {
  console.log("Los números son diferentes");
}

// 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
// es el mas grande o si son iguales.

let num5 = 10;
let num6 = 5;

if (num5 > num6) {
  console.log("El primer número es mayor que el segundo");
} else if (num5 < num6) {
  console.log("El segundo número es mayor que el primero");
} else {
  console.log("Los números son iguales");
}

// 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
// chico.

let num7 = 10;
let num8 = 5;
let num9 = 15;

if (num7 < num8 && num7 < num9) {
  console.log("El primer número es el más chico");
} else if (num8 < num7 && num8 < num9) {
  console.log("El segundo número es el más chico");
} else {
  console.log("El tercer número es el más chico");
}

// 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
// nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
// es la de mayor edad.

let persona1 = {
  nombre: "Juan",
  edad: 20,
  altura: 170,
};

let persona2 = {
  nombre: "Maria",
  edad: 25,
  altura: 160,
};

if (persona1.altura > persona2.altura) {
  console.log("La persona 1 es la más alta");
} else {
  console.log("La persona 2 es la más alta");
}

if (persona1.edad > persona2.edad) {
  console.log("La persona 1 es la de mayor edad");
} else {
  console.log("La persona 2 es la de mayor edad");
}

// 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
// y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
// una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
// mínimo.

let nombre = "Juan";
let edad = 20;
let altura = 170;
let vision = 8;

if (edad >= 18 && altura > 150 && vision >= 8) {
  console.log("Estás capacitado para conducir");
} else {
  console.log("No estás capacitado para conducir");
}

// 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
// (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
// tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
// mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
// caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
// mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
// afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
// de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
// caso contrario a no querer comprar, mostrar mensaje de despedida.

let nombreIngresado = "Juan";
let pase = "vip";
let tieneEntrada = true;
let dineroDisponible = 1000;

if (nombreIngresado === "Juan" || pase === "vip") {
  console.log("Bienvenido");
  if (tieneEntrada) {
    console.log("Bienvenido");
  }
} else {
  console.log("¿Desea comprar?");
  if (dineroDisponible >= 1000) {
    console.log("Venta de entrada y bienvenida");
  } else {
    console.log("Rechazo de venta");
  }
}

// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
// llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
// deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
// guardar en una variable llamada numeroIngresado, y en cada intento deberás
// mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
// intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
// adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
// usas mucho código repetido, mas adelante veraz como realizar este juego de manera
// más eficiente.

let numeroIncognita = 5;
let numeroIngresado = 0;

for (let i = 0; i < 3; i++) {
  numeroIngresado = 5;
  if (numeroIngresado > numeroIncognita) {
    console.log("El número ingresado es mayor, vuelve a intentarlo");
  } else if (numeroIngresado < numeroIncognita) {
    console.log("El número ingresado es menor, vuelve a intentarlo");
  } else {
    console.log("Ganaste, haz adivinado el número");
    break;
  }
}

// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
// años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
// 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
// preguntando si en realidad tiene esa edad.

let edadIngresada = 20;

if (edadIngresada >= 0 && edadIngresada <= 12) {
  console.log("Eres un infante");
} else if (edadIngresada >= 13 && edadIngresada <= 18) {
  console.log("Eres un adolescente");
} else if (edadIngresada >= 19 && edadIngresada <= 45) {
  console.log("Eres un mayor joven");
} else if (edadIngresada > 45) {
  console.log("Eres un anciano");
} else {
  console.log("¿En realidad tienes esa edad?");
}

// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
// jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
// algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
// trampa.

let jugador1 = "PIEDRA";
let jugador2 = "PAPEL";

if (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") {
  console.log("Ganó el jugador 1");
} else if (jugador1 === "PAPEL" && jugador2 === "PIEDRA") {
  console.log("Ganó el jugador 1");
} else if (jugador1 === "TIJERAS" && jugador2 === "PAPEL") {
  console.log("Ganó el jugador 1");
} else if (jugador1 === jugador2) {
  console.log("Empate");
} else {
  console.log("Uno de los jugadores ha hecho trampa");
}

// 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
// por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
// color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
// Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
// Excelente elección, no lo teníamos pensado.

function colorMessage(color) {
  switch (color.toLowerCase()) {
    case "blanco":
    case "negro":
      return "Falta de color";
    case "verde":
      return "El color de la naturaleza";
    case "azul":
      return "El color del agua";
    case "amarillo":
      return "El color del sol";
    case "rojo":
      return "El color del fuego";
    case "marrón":
      return "El color de la tierra";
    default:
      return "Excelente elección, no lo teníamos pensado.";
  }
}

console.log(colorMessage("Verde"));

// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
// Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
// deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
// elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
// ERROR si el divisor ingresado fue 0.

function calcular(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return `El resultado de la suma es: ${num1 + num2}`;
    case "resta":
      return `El resultado de la resta es: ${num1 - num2}`;
    case "multiplicación":
      return `El resultado de la multiplicación es: ${num1 * num2}`;
    case "división":
      if (num2 === 0) {
        return "ERROR: No se puede dividir por cero";
      } else {
        return `El resultado de la división es: ${num1 / num2}`;
      }
    default:
      return "Operación no reconocida";
  }
}

console.log(calcular(10, 2, "suma"));

// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
// identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
// pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
// dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
// mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
// mostrar un mensaje que diga: vuelva a intentarlo en 1 mes

function ingresarDatos() {
    let dni = {
        nombre: prompt("Ingrese su nombre"),
        apellido: prompt("Ingrese su apellido"),
        edad: prompt("Ingrese su edad"),
        cedula: prompt("Ingrese su cedula"),
        fechaNacimiento: prompt("Ingrese su fecha de nacimiento"),
        nacionalidad: prompt("Ingrese su nacionalidad"),
        genero: prompt("Ingrese su genero"),
        estadoCivil: prompt("Ingrese su estado civil"),
        tipoSangre: prompt("Ingrese su tipo de sangre")
    };

    console.table(dni);

    let confirmacion = prompt("¿Son correctos estos datos? (s/n)");

    if (confirmacion.toLowerCase() === 's') {
        console.log("Registro exitoso");
    } else {
        console.log("Vuelva a intentarlo en 1 mes");
    }
}
ingresarDatos();