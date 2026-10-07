/***************************************************************************************************************
 *
 *   Objetivo: Reforzar en el uso de estructuras de programación repetitivas
 *             
 *   Tarea: Se solicita un número entero n entre 1 y 10 al usuario. 
 *          Se mostrará una pirámide de la siguiente forma:
 *
 *                 1
 *                2 2
 *               3 3 3
 *              4 4 4 4
 *                ...
 *          n n n n n n n (n veces)
 *
 *          Realizar en ejercicio con for, while, do while
 * 
 *   Entrada : numero entero: n
 *
 *   Salida  : La pirámide mostrada en la tarea del ejercicio
 *
 ***************************************************************************************************************/
function generarPiramideFor(num1) {
    numFilas = []

    for (let i = 1; i <= num1; i++) {
        numFilas.push(String(i).repeat(i))
    }
    return numFilas;
}

function imprimirPiramideFor(arrayPira) {
    
}

document.getElementById("formNum").addEventListener('submit', (e) => {
    e.preventDefault()

    let num1 = document.getElementById("num1").value

    imprimirPiramideFor(num1)
    imprimirPiramideWhile(num1)

})
