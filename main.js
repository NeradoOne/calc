//SUMA
function sumar(a,b){
    return a+b;
}

function sumarDN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    var numB = parseInt(prompt('Ingrese un numero'));
    var resultado = sumar(numA, numB);
    alert('La suma de ambos es= '+ resultado);
}

//MULTIPLICACION
function mult(a,b){
    return a*b;
}

function multDN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    var numB = parseInt(prompt('Ingrese otro numero'));
    var resultado= mult(numA,numB);
    alert('El resultado es= ' + resultado)
}

//RESTA
function resta(a,b){
    return a-b;
}

function restaDN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    var numB = parseInt(prompt('Ingrese un numero'));
    var resultado = resta(numA, numB);
    alert('La resta de ambos es= '+ resultado);
}

//DIVIDIR

function divid(a,b){
    return a/b;
}

function dividDN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    var numB = parseInt(prompt('Ingrese un numero'));
    var resultado = divid(numA, numB);
    alert('La divicion de ambos es= '+ resultado);
}

//POTENCIA2

function potencia2(a,b){
    return a*a;
}

function potencia2DN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    
    var resultado = potencia2(numA, numA);
    alert('La potencia cuadrada de su numero es= '+ resultado);
}

//POTENCIA

function potencia(a,b){
    return Math.pow(a,b);
}

function potenciaDN() {
    var numA = parseInt(prompt('Ingrese un numero'));
    var numB = parseInt(prompt('Ingrese un numero al cual elevarlo'));
    var resultado = potencia(numA, numB);
    alert('La potencia de ambos es= '+ resultado);
}
