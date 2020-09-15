/*var primerNombre = 'Grover';
console.log(primerNombre);

var edad = 34;
var sueldo = 1800.99;

console.log(sueldo,edad);

var boolean = false;
console.log(boolean);

var indefinidad;
console.log(indefinidad);

indefinidad = null;
console.log(indefinidad);*/

//Comentario de una sola linea

/*comentario
de
varias
lineas*/

/*************************
 * Este tipo de comentarios sde bloques, es una buena practica hacer esto
 * ***********************/

 //Conversion de tipos

 /*var primerNombre, edad, sexo, esSoltero;

 primerNombre = 'Christian';
 edad = 23;
 sexo = 'M';
 esSoltero = false;

 console.log("El nomnre es " + primerNombre + " su edad es " + edad + " sexo es "+sexo + " ¿es soltero? " + esSoltero);

 //Mutacion de variables.
 edad = 'veinte';
 console.log(edad); */

/******************************************
 * Operadores - Matematicos (+, -, *, /)
 ******************************************/

/*var edadChris, edadLalo, diferenciaEdad, sumaEdades, yearActual,yearLalo, yearChris;

edadChris = 23;
edadLalo = 12;
yearActual = 2020;


diferenciaEdad = edadChris - edadLalo;
sumaEdades = edadChris + edadLalo;
yearLalo = yearActual - edadLalo;
yearChris = yearActual - edadChris;
console.log(diferenciaEdad, sumaEdades);
console.log("Año en que nacio Lalo: "+yearLalo);
console.log("Año en que nacio Chris: "+ yearChris);
console.log(yearActual*5);
console.log(yearActual/2);

/************************************
 * Operadores logicos
 *********************************** */

/* var mayorChris = edadChris == edadLalo;
 console.log(mayorChris);

 //Operador TypeOf

 console.log(typeof edadLalo);
 console.log(typeof mayorChris);
 console.log(typeof 'Chris es mayor que Lalo');*/

 //Operadores Unarios aritméticos. 
//++ Incremento
//-- Decremento
/*var edadCarmen = 18;
var edadMaria = 14;
//edadCarmen++;

console.log(edadCarmen++);
console.log(--edadCarmen);

//Operadores de asignación.
//=

var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;
var c;
c = a % b; //Devuelve el residuco de una división. 
a %= b;*/

//Ejercicio de codificacion
//Se tienen los siguientes datos.

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoMaria = 89;
var alturaMaria = 1.75;

/* Utilizar la siguiente formula para calcular el IMC de Luis y de Maria,
    IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Maria 
    es superior al de Luis.
*/

var imcLuis, imcMaria;

imcLuis = pesoLuis/(alturaLuis*alturaLuis);
imcMaria = pesoMaria/(alturaMaria*alturaMaria);



console.log(imcMaria,imcLuis,imcMaria>imcLuis);
