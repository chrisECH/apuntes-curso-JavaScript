//console.dir(document); //Muestra todo lo que comprende el objeto document de la pagina

/**************
 * Examinando el DOM
 **************/

/*  console.log(document.title);
 document.title = 'Prueba';
 console.log(document.title); //muestra el titurlo del documento
 console.log(document.head); //muestra el contenido del head
 console.log(document.body); //muestra el contenido del body
 //console.log(document.all); 
 console.log(document.all[10]); //muestra un arreglo (HTML collections) y al indicar una posicion nos muestra lo que hay en esa posicion

 console.log(document.forms[0]); //muetra un arreglo (HTML collections)
 console.log(document.images); //nos muestra las imagenes que hay en el docummento.
 console.log(document.links); //nos muestra los links que hay en el documento. */



 //GetElementbyId
/*  console.log(document.getElementById('header-title'));  //Nos v¡devuleve la referencia hacia el objeto que tiene ese ID en el documento
 var headerTitle = document.getElementById('header-title');
 var header = document.getElementById('main-header');
 //console.log(header)3
 h
 eaderTitle.textContent = 'Hola';
 headerTitle.innerText = 'Adios';
 headerTitle.innerHTML = '<h3>Prueba</h3>'; */



 //GetElementsByClassName

/*  var items = document.getElementsByClassName('list-group-item');
 console.log(items[3]);
 items[0].textContent = 'Prueba'; */


 //getElementsByTagName
/*  var items = document.getElementsByTagName('li');
items[2].textContent = 'Prueba 02'; */

//querySelector
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 10px red';


var input = document.querySelector('input');
input.value = 'Hola mundo';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Enviar';

var item = document.querySelector('.list-group-item');
item.style.color = 'red'; */


//querySelectorAll

/* var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');
for(var i =0;i<impar.length;i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4';
} */

//ParentNode
/* var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroundColor ='#f4f4';
console.log(main.parentNode.parentNode); */

//ParentElement
//var itemList = document.querySelector('#items');
/* console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor ='#f4f4';
console.log(main.parentElement.parentElement); */

//ChildNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstElementChild
/* console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Prueba'; */

//lastElementChild
/* console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Prueba2' */

//previousSibiling
/* console.log(itemList.previousSibling);


//previuosElementSibiling
console.log(itemList.previousElementSibling);

//nextSibiling
console.log(itemList.nextSibling);

//nextElementSibiling
console.log(itemList.nextElementSibling); */

//createElement
//tagName
/* var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'Hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title' ,'Hola mundo');


console.log(nuevoDiv);
//createTextNode
var nuevoNodoText = document.createTextNode('Hola mundo');
nuevoDiv.appendChild(nuevoNodoText);
console.log(nuevoDiv);

var contenedor = document.querySelector('.container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);
contenedor.insertBefore(nuevoDiv,h1);
 */

 //Agregar eventos
/* document.getElementById('boton').addEventListener('click',function(){
    console.log('Prueba con el addListener');
});
 */
/* document.getElementById('boton').addEventListener('click',hacerClick);



 function hacerClick(){ 
     //console.log('Hola, esto es una prueba')
     document.getElementById('header-title').textContent = 'Nuevo titulo';
 } */

//Agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');
//Evento submit del formulario
form.addEventListener('submit',agregarItem);
//Evento click de la lista
lista.addEventListener('click',eliminarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);

//Funcion para agregar un item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var botonEliminar = document.createElement('button');
    botonEliminar.className = 'btn btn-danger btn-sm float-right eliminar';
    botonEliminar.appendChild(document.createTextNode('X'));
    li.appendChild(botonEliminar);
    lista.appendChild(li);

}

//Funcion para eliminar un item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
        lista.removeChild(li);
        }
        
    }
}
//Funcion para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';
        }
    });
}