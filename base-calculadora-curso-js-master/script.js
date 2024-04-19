//ESTO AGREGA A LA PANTALLA EL VALOR DEL BORON DEL CALCULADOR QUE TOQUEMOS

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// ESTA ACCION VACIA LA PANTALLA

function borrar() {
    document.getElementById('pantalla').value = ''
}

// Esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado
}