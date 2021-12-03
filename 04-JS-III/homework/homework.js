// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un 
  // array (pasado por parametro)
  // Tu código:
  var array = ["banano","arandano","fresa","manzana"]
  console.log(array[0])
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = ["arroz","carne","papa","jugo"]
  console.log(array[3])
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var array=["celular","pc","tv"]
  console.log(array.lenght)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros
  // (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
var array = [1,2,3,4]
for(let i =0; i< array.lenght;i++){
  console.log(array + [i])
}
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var array = ["disney","fox","tbs"]
  var elemento =["tnt"]
  array.push (elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var array = ["disney","fox","tbs"]
  var elemento =["tnt"]
  array.unshift (elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las
  // palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var array = ["hello"]
  var palabras = ["world!"]
  array=array.contacat(palabras)
  return array
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro
  // de "array"
  // Devuelve "true" si está, o "false"
  // si no está
  // Tu código:
  var array = ["luisa","sofia","daniela","nicol"]
  console.info(array.includes("nicol"))
  console.info(array.includes("gladis"))
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros 
  //(int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numeros = [1,2,3,4]
  var total = numeros.reducer((a,b)=> a + b,0);
  return total
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de 
  //enteros (int/integers)
  // Itera (en un bucle) los elementos del array,
  // calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest = [1,2,3]
  for(let i = 1 || i = 2|| i = 3; i = resultadosTest;i++){
  return (100 * partialValue) / totalValue;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros
  // (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeros = [1,2,3,4,]
  return Math.max(numeros)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments`
  // para multiplicar todos los argumentos
  // y devolver el producto
  // Si no se pasan argumentos devuelve 0. 
//Si se pasa un argumento, simplemente 
//devuélvelo
  // Escribe tu código aquí:
  var argumentos = argumentos
  if (isNaN(argumentos) ) {
    argumentos*2
    return argumentos
  }else if  {
    return "0"
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne 
  //la cantidad de los elementos del}
  // arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
return(arreglo.lenght)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se 
  //codifican como 1 = Domingo, 2 = Lunes y
  // así sucesivamente. 
  //Realiza una función que dado el número
  // del día de la semana, retorne: Es fin de 
  //semana
  //si el día corresponde a Sábado o
  // Domingo y “Es dia Laboral” en caso 
  //contrario. 
  //Escribe tu código aquí   
  var lunes = 2;
  var martes = 3;
  var miercoles = 4;
  var jueves = 5;
  var viernes = 6;
  var sabado = 7;
  var domingo = 1;
  if (numeroDeDia = lunes || numeroDeDia = martes || numeroDeDia = miercoles || numeroDeDia = jueves || numeroDeDia = viernes)
  return "es dia laboral"
    
  }else if (numeroDeDia = sabado || numeroDeDia = domingo) {
    return " es fin de semana"
    
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe
  // como parámetro un número entero n.
  // Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.unshift = 9) {
    return "true"
  }else if  {
    return "false"
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales,
  // que indique si todos los elementos
  // de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var arreglo = ["maria","maria","maria"];
  var Tam = contador.lenght;
  var igual = false;
  function bantrue(){
    for(let i=0; i< Tam-1; i++){
      igual=true
    }else{
      igual=false
      break
    }
  }
  return igual
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos
  // meses del año desordenados, recorrer 
  //el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre",
  // guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: 
  //"No se encontraron los meses pedidos"
  // Tu código:
  var array = ["marzo","enero","septiembre","noviembre"]
  var arraySegundo = []
  for( var i = 0; i < array.lenght ; i++){
    if (array = "enero" || array = "marzo" || array = "noviembre") {
      arraySegundo.push("enero","marzo","noviembre")
      return arraySegundo
    }else{
      return "no se encontraron los meses perdidos"
    }
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros 
  //entre 0 y 200. Recorrer el array y guardar
  // en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100).
  // Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero
  // recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma
  // y la cantidad de iteraciones coinciden, 
  //debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 
  //el numero recibido hasta un límite
  // de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance
  //el valor 5, no se suma en ese caso y se
  // continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
for( let numero = 0 ; numero ++; ){
    if (numero = 10) {
      break;
    }
  }

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
