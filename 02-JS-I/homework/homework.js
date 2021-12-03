// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
var flores = "rosa, girasol, cecilias";

// Crea una variable numérica, puede ser cualquier número:
var newNum = 5;

// Crea una variable booleana:
var estoyEntendiendo= true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
// falso null es un valor vacio por lo que no se resta nada a 10
//entonces 10 no seria identico a 5

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * null === 40 ;
// creo que segguiria sin funcionar ya que null no tiene un
//valor y no habria un valor por multiplicar a 10
// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;
//esto seria falso ya que el 5 porciento de 21 tendria 
// un valor en especifico y null no lo tiene por lo cual no
// hay similitud


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  
  var devolverString="a,b,c"
  return devolverString;
  
}


function suma(x, y) {
  var a = x + y;
 
  return a;
  
}

function resta(x, y) {
  var a = x - y;

  return a;
  
}

function multiplica(x, y) {
  var a = x * y;
  return a ;
  
}

function divide(x, y) {
  var a = x / y;
  return a;
  
}

function sonIguales(x, y) {
var a = x 
var b = y
if(a===b){
  return true
}
else{
  return false
}
  
}

function tienenMismaLongitud(str1, str2) {
  var a = str1;
  var b = str2;

   if (a === b){
     return true
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 9){
    return true
  }
  
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num < 50){
     return true
  }
  else{
    return false
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var a = x % y ;
  return a ;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2===0){
    return true
  }else{
    return false
  }
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%3===0){
    return true
  }else{
    return false
  }
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  Math.pow(num)
  
}

function elevarAlCubo(num) {
 var elevado = num ** 3;
 return elevado
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  Math.pow(num,2)
  return Math
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  Math.round(num)
  return Math
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  Math.ceil(num)
  return Math
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.floor(Math.random()*max);
}

function esPositivo(numero) {
  //La función va a recibir un entero.
  // Devuelve como resultado 
  //una cadena de texto que indica si 
  //el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> 
  //"Es positivo"
  //Si el número es negativo, devolver ---> 
  //"Es negativo"
  //Si el número es 0, devuelve false
  Math. sign(numero)
  if (numero === +){
    return "es positivo"
  }else{
    return "es negativo"
  } 
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al 
  //final de la string "str" y devuelve una 
  //nueva string
  // Ejemplo: "hello world" pasaría a ser
  //"hello world!"
  // Tu código:
 var str 
 str.push( "!");
  return(str);
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido"
  // combinados en una string y
  // separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  var cadena1 = nombre;
  var cadena2 = apellido;
  var cadena3 = cadena1 + cadena2;
  return cadena3
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena 
  //otras string en la cadena para que tome
  // la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
 var nombre= nombre;
 var nombre1 = nombre + "!";
 return nombre1
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo
  // su altura y ancho
  // Tu código:
  var alto, ancho;
  area= alto*ancho;
  return area
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba
  // el valor del lado de un cuadrado y
  // retorne su perímetro.
  //Escribe tu código aquí
  var lado;
  perimetro= lado*4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule 
  //el área de un triángulo.
  //Escribe tu código aquí
  var base, altura;
  areaTriangulo= base*altura
  return areaTriangulo

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20
  // dólares. Escribe un programa que reciba
  //como parámetro un número de euros y 
  //calcule el cambio en dólares.
  //Escribe tu código aquí
euro = parseFloat(1);
dollar = parseFloat(1,20);
if(euro > 1){
  return dollar;
}

}


function esVocal(letra){
  //Escribe una función que reciba una letra
  // y, si es una vocal, muestre el mensaje 
  //“Es vocal”. 
  //Verificar si el usuario ingresó un string
  // de más de un carácter, en ese caso, 
  //informarle 
  //que no se puede procesar el dato mediante
  // el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver
  // "Dato incorrecto".
  //Escribe tu código aquí
 
  if(letra === "a" || letra === "e" || letra === "i" || letra ==="o" || letra === "u"){
    return " es una vocal"
  }else( letra === "string" ){
    return "dato incorrecto"
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
