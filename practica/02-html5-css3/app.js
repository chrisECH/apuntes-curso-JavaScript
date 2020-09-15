/******************
 * Sentencias if/else
 ******************/

 /* var nombre = 'Pablo';
 var estadoCivil = 'Soltero';
 var estaCasado = false;

 if(estaCasado){
     //si es verdadera la condicion
     console.log(nombre + ' esta '+estadoCivil);
 }else{
     //Si es falsa la condicion.
     console.log(nombre + ' esta '+estadoCivil);
 } */

//  var nombre = 'Pablo';
//  var edad = 61;

 // edad < 12 es un niño
 //edad  > 11, es < 18, es un adolecente,
 // edad > 17, es < 60, es un adulto
 //edad > 60, es un anciano

 /* if(edad < 12 ){
     console.log(nombre + ' es un niño');
 }else if((edad >11) && (edad < 18)){
     console.log(nombre + ' es un adolecente');
 }else if((edad > 17) && (edad < 60)){
     console.log(nombre + ' es un adulto');
 }else{
     console.log(nombre + ' es un anciano');
 } */

 /*****************************
  * Operador ternario
  *****************************/
  /* var nombre = 'Christian';
  var edad = 23;
  
  edad >=18 ? console.log(nombre + ' es mayor de edad ') : console.log(nombre + ' es un adolecente');

  /**************************
   * Sentencia switch
   **************************/

  /*  var mes = 8;

   switch(mes){
       case 1: console.log('enero'); break;
       case 2: console.log('febrero'); break;
       case 3: console.log('marzo'); break;
       case 4: console.log('abril'); break;
       case 5: console.log('mayo'); break;
       case 6: console.log('junio'); break;
       case 7: console.log('julio'); break;
       default: console.log('mes no considerado'); 
   } */ 

   /* SENTENCIAS FOR */
/* 
   for (var i = 0; i <= 10; i++){
       console.log(i);
   } */

   //Sentencia while
   /* var i = 1;
   while (i <= 10){
       console.log(i);
       i++;
   } */


   /**********************************
    * Ejercicio de sentencias
    **********************************/

    /***********************************************
     * Tienes dos alumnos, Pablo y Maria.
     * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8, 16.
     * Maria tiene las siguientes notas en el curso de JavaScript: 12, 18, 10.
     * 
     * Calcular el promedio de cada alumno, además quien tiene el promedio 
     * superior, e indicar si el alumno esta aprobado, para ello su promedio 
     * debe ser superior a 13.
     ***********************************************/

     var promPablo, promMaria;
     var aprobado = true;
     promPablo = (14 + 19 + 16)/3;
     promMaria = (12 + 16 + 10)/3;

     if(promPablo > 13){
         console.log('El promedio de Pablo es: '+promPablo+' ¿Pablo esta aprobado?'+aprobado)
     }else{
         aprobado = false;
        console.log('El promedio de Pablo es: '+promPablo+' ¿Pablo esta aprobado?'+aprobado)
     }

     if(promMaria > 13){
        console.log('El promedio de Maria es: '+promMaria+' ¿Maria esta aprobada?'+aprobado)
    }else{
        aprobado = false;
         console.log('El promedio de Maria es: '+promMaria+' ¿Maria esta aprobada?'+aprobado)
    }

    if(promMaria > promPablo){
        console.log('Maria tiene el mejor promedio.')
    }else{
        console.log('Pablo tiene el mejor promedio')
    }
