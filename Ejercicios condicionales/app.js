// 1. Crear una variable llamada miNombre y guardar en ella su primer nombre.

let miNombre = "Eyver";

// 2. Crear una variable llamada miApellido y guardar en ella su apellido.

let miApellido = "Vergara";

// 3. Crear una variable llamada miEdad y guardar en ella su edad.

let miEdad = 27;

// 4. Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

let miMascota = "Gato2";

// 5. Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

let edadMascota = 7;

// 6. Visualizar todas las variables dentro de la consola del navegador escribiendo el
// nombre de cada una de ellas.

console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

// 7. Crear una variable llamada nombreCompleto y guardar en ella la concatenación de
// miNombre y miApellido.

let nombreCompleto = miNombre + " " + miApellido;

// 8. Crear una variable llamada textoPresentacion y guardar en ella un texto
// comprendido con todas las variables creadas hasta el momento.

let textoPresentacion =
  "Hola, mi nombre es " +
  nombreCompleto +
  " tengo " +
  miEdad +
  " años y mi mascota se llama " +
  miMascota +
  " y tiene " +
  edadMascota +
  " años.";

// 9. Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y
// calcular sus respectivas operaciones con las variables miEdad y edadMascota.

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;

// 10. Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego
// ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos
// cargados.

miNombre = prompt("Ingrese su nombre");
miApellido = prompt("Ingrese su apellido");
miEdad = parseInt(prompt("Ingrese su edad"));
miMascota = prompt("Ingrese el nombre de su mascota");
edadMascota = parseInt(prompt("Ingrese la edad de su mascota"));

nombreCompleto = miNombre + " " + miApellido;
textoPresentacion =
  "Hola, mi nombre es " +
  nombreCompleto +
  " tengo " +
  miEdad +
  " años y mi mascota se llama " +
  miMascota +
  " y tiene " +
  edadMascota +
    " años.";

sumaEdades = miEdad + edadMascota;
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota;

console.log(textoPresentacion);
console.log(sumaEdades);
console.log(restaEdades);
console.log(productoEdades);
console.log(divisionEdades);

// 11. Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
// objeto utilizando console.table() y también mostrar cada una de las propiedades
// del objeto por separado.

let alumno = {
  nombre: miNombre,
  apellido: miApellido,
  edad: miEdad,
  mascota: miMascota,
  edadMascota: edadMascota,
};

console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.mascota);
console.log(alumno.edadMascota);

// 12. Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho
// objeto utilizando console.table() y también mostrar cada una de las propiedades
// del objeto por separado.

let mascota = {
  nombre: miMascota,
  edad: edadMascota,
  color: "gris",
  hermanos: "2",
  vacunas: true,
};

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.color);
console.log(mascota.hermanos);
console.log(mascota.vacunas);

// 13. Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por
// consola el array completo y cada uno de los elementos por separado.

let frutas = ["manzana", "pera", "uva", "naranja", "banana"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

// 14. Crear un array llamado números con un mínimo de 5 elementos y mostrar por
// consola el array completo y cada uno de los elementos por separado.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

// 15. Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola
// el array completo y cada uno de los elementos por separado.

let familia = [
  {
    nombre: "Juan",
    parentesco: "Hermano",
    edad: 27,
  },
  {
    nombre: "Luis",
    parentesco: "Padre",
    edad: 50,
  },
  {
    nombre: "Maria",
    parentesco: "Madre",
    edad: 48,
  },
  {
    nombre: "Lucia",
    parentesco: "Hermana",
    edad: 20,
  },
  {
    nombre: "Carlos",
    parentesco: "Primo",
    edad: 28,
  },
];

console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

// 16. Crear una variable llamada textoAleatorio formando una frase con el segundo
// elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto
// objeto del array del punto 15.

let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4].nombre;
console.log(textoAleatorio);

// 17. Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y
// mostrar por consola los resultados de comparar los valores y guardarlos en
// variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y
// mostrar mensajes en consola como los siguientes:
// a. Mi edad es igual a la de mi compañero: false
// b. Mi edad es mayor a la de mi compañero: true
// c. Mi edad es menor a la de mi compañero: false

let miEdadCompanero = parseInt(prompt("Ingrese la edad de su compañero"));
let edadesIguales = miEdad === miEdadCompanero;
let soyMayor = miEdad > miEdadCompanero;
let soyMenor = miEdad < miEdadCompanero;

console.log("Mi edad es igual a la de mi compañero: " + edadesIguales);
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor);
console.log("Mi edad es menor a la de mi compañero: " + soyMenor);


// 18. Compare su edad ingresada por pantalla con prompt() con el numero 18 y
// guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un
// mensaje que diga: Soy mayor de edad y el valor de la variable.

let soyMayorDeEdad = miEdad >= 18;
console.log("Soy mayor de edad: " + soyMayorDeEdad);

// 19. Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
// separadas y en una variable llamada puedeSubir el resultado de la operación
// resultante de si la persona es mayor de 6 años y además tiene una altura mínima
// de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
// atracción y el valor de la variable resultante.

let edadPersona = parseInt(prompt("Ingrese la edad de la persona"));
let alturaPersona = parseInt(prompt("Ingrese la altura de la persona"));
let puedeSubir = edadPersona >= 6 && alturaPersona >= 120;
console.log("Puede subir a la atracción: " + puedeSubir);

// 20. Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL”
// o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una
// variable llamada puedePasar guardar el resultado de la operación resultante de si
// la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un
// mensaje que diga: La persona puede pasar y el resultado de la variableresultante.

let pasePersona = prompt("Ingrese el pase de la persona");
let saldoPersona = parseInt(prompt("Ingrese el saldo de la persona"));
let puedePasar = pasePersona === "VIP" || saldoPersona > 1000;
console.log("La persona puede pasar: " + puedePasar);
