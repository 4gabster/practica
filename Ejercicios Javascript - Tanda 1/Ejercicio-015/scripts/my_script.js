/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear estructuras de control repetitivas.
 *             Aprender a emplear funciones definidas por el usuario.
 *             Aprender difetentes formas de crear arrays
 *             Entender las funciones anónimas
 *             Aprender a emplear métodos del objeto Array para programación funcional
 *
 *   Tarea: Solicitamos un número entero n al usuario y mostramos en la consola los numeros pares desde 2 hasta ese numero
 *          Realizar 4 versiones: con for, while, do..while, con arrays y el método join
 *
 *   Entrada : numero entero n, n>=2
 *
 *   Salida  : 2, 4, 6, ..., n  (incluidas las coma y el espacio detras de cada número excepto el último)
 *
 ***************************************************************************************************************/

let num1

document.getElementById("formNum").addEventListener("submit", (e) => {
    e.preventDefault()

    num1 = document.getElementById("num1").value

    imprimirPantalla(`Os numeros pares son(VERSIÓN FOR): ${versionFor(num1)}`)
    imprimirPantalla(`Os numeros pares son(VERSIÓN WHILE): ${versionWhile(num1)}`)
    imprimirPantalla(`Os numeros pares son(VERSIÓN DOWHILE): ${versionDoWhile(num1)}`)
    imprimirPantalla(`Os numeros pares son(VERSIÓN JOIN): ${versionJoin(versionArray(num1))}`)

    let arrayNums = versionArray(num1)

    e.target.reset()
})

function versionFor(num1) {
    let resultado = ""
    for (let i = 2; i <= num1; i += 2) {
        resultado += (i + 2 <= num1) ? `${i}, ` : `${i}`
    }
    return resultado
}

function versionWhile(num1) {
    let contWhile = 2
    resultado = ""
    while (contWhile <= num1) {
        contWhile + 2 < num1 ? resultado += `${contWhile}, ` : resultado += `${contWhile}`
        contWhile += 2
    }
    return resultado
}


function versionDoWhile(num1) {
    let contWhile = 2
    let resultado = ""
    do {
        contWhile + 2 < num1 ? resultado += `${contWhile}, ` : resultado += `${contWhile}`
        contWhile += 2

    } while (contWhile <= num1);

    return resultado
}

function versionArray(num1) {
    let arrayNums = []
    for (let i = 2; i <= num1; i += 2) {
        arrayNums.push(i)
    }
    return arrayNums
}

function versionJoin(arrayNums) {
    let numPares = arrayNums.join(", ")
    return numPares
}

function imprimirPantalla(message) {
    console.log(message)
}