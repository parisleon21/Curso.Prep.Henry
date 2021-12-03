// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera 
  //de los dos
  // Tu código:
  var x = x;
  var y = y;
  if( x < y ){
    return x
  } else if( y < x){
    return y;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su 
  //edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> 
  //"Allowed"
  //Si es menor, devolver --> "Not allowed"
  var edad = edad
  if(  edad <= 18){
    return "allowed"
  }else if ( edad > 18){
    return "not allowed"
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de
  // un usuario representado por un valor 
  //numérico. 
  //Cuando el estado es igual a 1, el usuario
  // está "Online"
  //Cuando el estado es igual a 2, el usuario
  // está "Away"
  //De lo contrario, presumimos que el usuario
  // está "Offline"
  //Devolver el estado de conexión de usuario
  // en cada uno de los casos.
  var Online= 1;
  var Away = 2;
  if( status = Online){
    return "online";
  }else if( status = Away){
    return "away";
  }else{return "offline"}
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes
  // lenguajes:
  // Si "idioma" es "aleman", devuelve 
  //"Guten Tag!"
  // Si "idioma" es "mandarin", devuelve 
  //"Ni Hao!"
  // Si "idioma" es "ingles", devuelve 
  //"Hello!"
  // Si "idioma" no es ninguno de los anteiores
  // o es `undefined` devuelve "Hola!"
  // Tu código:
  var aleman = "guten tag!";
  var mandarin = "ni hao!";
  var ingles = "hello!";
  if( saludo = aleman){
    return "guten tag!"
  }else if( saludo = mandarin){
    return " ni hao!"
  }else if ( saludo = ingles){
    return "hello!"
  }else{
    return "hola!"
  }
}

function colors(color) {
  //La función recibe un color. Devolver el 
  //string correspondiente:
  //En caso que el color recibido sea "blue",
  // devuleve --> "This is blue"
  //En caso que el color recibido sea "red", 
  //devuleve --> "This is red"
  //En caso que el color recibido sea "green",
  // devuleve --> "This is green"
  //En caso que el color recibido sea "orange",
  // devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color){
    case blue:
     return "this is blue";
     case red:
       return "this is red";
       case green:
         return "return this is green";
         case orange:
           return "this is orange";
           
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var numero1 = 10;
  var numero2 = 5;
  if( numero = numero1 || numero = numero2){
     return true
  } else{return "false"}
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor
  //que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero >50 && numero <20){
    return "true"
  }else{
    return "false"
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero
  // (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando
  // `Math.floor`
  // Tu código:
  return Math.floor(numero);
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve
  // "fizz"
  // Si "numero" es divisible entre 5, 
  //devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5
  // (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además
  // es positivo, retornar ---> "Número 1 es 
  //mayor y positivo"
  //Si alguno de los tres números es negativo,
  // retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2,
  // aumentar su valor en 1 y retornar el nuevo 
  //valor.
  //0 no es ni positivo ni negativo. Si alguno de
  // los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las
  // condiciones anteriores, retornar false. 
  var num1 = num1
  var num2 = num2
  var num3 = num3
  if( num1 < num2 && num1 < num3 && num1 === +){
    return " numero 1 es mayor y positivo"
  }else if( num1 === - && num2 === - && num3 === - ){
    return "hay negativos"
  }else if ( num3 < num1 && num3 < num2){
     (num3 += ++);
     return num3 
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible
  // por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle
  // `for`
  // Nota: Los números 0 y 1 NO son considerados
  // números primos
  var a = 100;
  var b = 2;
  var numerosPrimos =[];
  for (; a < b; a++){
    if(esPrimo(b)){
      numerosPrimos.push(b);
      return "true"
    }
  }
  function esPrimo(numero){
    for( var i = 2; i< numero; i++){
      if (numero % I == 0){
        return "false"
      }
    }
  }
}


function esVerdadero(valor){
  //Escribe una función que reciba un valor 
  //booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” 
  //si su valor es false.
  //Escribe tu código aquí


}

function tablaDelSeis(j){
  //Escribe una función que muestre
  // la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados
  //de la tabla de multiplicar del 6 en orden 
  //creciente.
  var j=7;
  for(i = 1; i <= 10;i++){
document.write(j + "x" + i + "=" + j * i)

  }
   
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si
  //tiene 3 dígitos. Caso contrario,
  // retorna false.
  //Escribe tu código aquí
var numero= numero
  if( isInteger(numero) && length(3)){
    return "true"
  }else{
    return "false"
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya
  // aumentando el valor recibido en 5 hasta 
  //un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
