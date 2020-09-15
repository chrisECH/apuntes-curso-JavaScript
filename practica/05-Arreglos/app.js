//Arreglos en javaScript

/* var nombres = ['Juan','Chris','Carlos','Lupita'];
var vegetales = new Array('Jitomate', 'lechuga','zanahoria');

console.log(nombres[2]);
console.log(vegetales[1]);

nombres[2] = 'Maria';
console.log(nombres[2]);
vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombres.length); */

/* var  frutas =  ['pera','manzana','uva','sandia'];
console.log(frutas);
 */
/* for(var i=0;i<=frutas.length -1;i++){
    console.log(frutas[i]);
}
 */

 /* frutas.forEach(function (elemento, indice, array){
     console.log(elemento, indice);
 })

 */

 /* frutas.push('naranja');
 console.log(frutas);
 frutas.unshift('fresa');
 console.log(frutas);
 frutas.pop();
 console.log(frutas);
 frutas.shift();
 console.log(frutas);

 var pos = frutas.indexOf('uva');
 console.log(pos);

 frutas.splice(1,2);
 console.log(frutas); */

 //Arreglo con elementos de diferentes tipos

/*  var persona = ['Chrsitian', 'Eduardo', 23, '4435095842', 1.81];
 console.log(persona); */



 /*************************
  * Objetos Literales
  *************************/

  /* var persona = {
      nombre: 'Christian',
      apellido: 'Camarena',
      gustos: ['Peliculas','Videojuegos','Fiesta', 'Programación'],
      trabajo: 'Programador',
      esCasado: true

  };

  console.log(persona.apellido);
  console.log(persona['trabajo']);
  persona.esCasado=false;
  console.log(persona.esCasado); */


  /***********************
   * Objetos con la sintaxis object
   ***********************/

   /* var persona2 = new Object();
   persona2.nombre = 'Mara';
   persona2.apellido = 'Ezequiel';
   persona2['trabajo'] = 'WebDeveloper';
   console.log(persona2); */

   /*********************
    * Objetos y metodos
    ********************/

   var persona = {
  //propiedades
    nombre: 'Christian',
    apellido: 'Camarena',
    gustos: ['Peliculas','Videojuegos','Fiesta', 'Programación'],
    trabajo: 'Programador',
    esCasado: true,
    yearNac: 1997,

    //Metodo 
    calcularEdad: function(){
        this.edad= 2020 - this.yearNac;
    }
};

persona.calcularEdad();
console.log(persona);
