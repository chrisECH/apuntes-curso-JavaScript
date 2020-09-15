/* function bienvenido(){
    return 'Hola, bienvenido a la secicon de funciones';
}

var mensaje = bienvenido();
console.log(mensaje);

//Partes de una funcion,
//parametros (argumento)
//codigo - va dentro del bloque
//salida - es el retorno

function cuadradoNumero(num){
    var res = (num * num);
    return res;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(6));

//Funcion que convierte de grados Faharenheit a Celcius
// 32F = 0C, 68F = 20C
//C = (F - 32) * 5/9;

function convertidorFaC(faharenheit){
    var celcius = (faharenheit - 32) * 5/9;
    return celcius;
}

var tempUno = convertidorFaC(32);
var tempDos = convertidorFaC(69);
console.log(tempUno);
console.log(tempDos);
 */

/* function calcularEdad(yearNaci){
    return 2019 - yearNaci;
}

var edad = calcularEdad(1997);
console.log(edad); */

/****************************************
 * Ejercicio de codificacion 3
 * 
 * calcular cuantos años le faltan a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la funcion su año de nacimineto y su nombre.
 * **************************************/

 /* function jubilacion(nombre, yearNac){
    var year = 2020 - yearNac;
    var jubilacion = 65 - year;

    return 'A '+ nombre + ' le faltan ' + jubilacion + ' años para jubilarse.';
 }

 var jubilacion = jubilacion('Christian',1970);
 console.log(jubilacion); */

 /**********************************************
 * Funciones como expresiones
 *************************************************/

/*  var prueba = function (){
    return ('Mensajse de prueba');
 }

console.log(prueba());

//Argumentos undefinided

var nombre; 
var prueba = function(n) {
    return 'Hola '+ n;
}

nombre = 'Chrsitian';
console.log(prueba(nombre));

//Argumentos nulos
var a;
a = null;
var varNulo = function(a){
    return a;
}
console.log(varNulo(a));

//Argumentos por defecto
var sumar = function(a, b, c = 3){
    return a + b + c;
}

console.log(sumar(10,4,7)); */

//Plantillas de cadenas 8templates string)
/* var nombre = 'Christian';
console.log(`El nombre es: ${nombre}`); 

var a = 5, b=10;

// console.log('La suma es '+ (a+b));
console.log(`La suma es : ${a + b}`); */

/*************************************
 * Ejercicio 4.
 * 
 * Implementar una funcion que nos permita evaluar el 
 * procentaje de respuestas positivas y negativas de un examen 
 * La funcion debe de recibir el nombre, y la cantidad de
 * respuestas positivas y negativas
 * 
 * La funcion debe de calcular el porcentaje que presenta cada 
 * tipo de respesta, en una base de 100 preguntas.
 * 
 * De las respuestas positivas de define el score de la persona en:
 * A(> 90%), B(> 70%), C(>45%), D(< 45%)
 * 
 *************************************/
var calcular = function(nombre, positivas, negativas){
    var porPos = (positivas / 100) * 100;
    var porNeg = (negativas / 100) * 100;
    var score = '';

    if(porPos >= 90){
        score = 'A';
    }else if(porPos >= 70 ){
        score = 'B';
    }else if(porPos >= 45){
        score = 'C';
    }else{
        score = 'D';
    }
    return `${nombre}  tiene el score ${score}, Positivas ${porPos}%, Negativas ${porNeg}%`;
}

var res = calcular('Chrsitian', 44, 56);
console.log(res);