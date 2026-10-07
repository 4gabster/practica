/***************************************************************************************************************
 *
 *   Objetivo: Aprender a definir y usar funciones
 *             Entender la diferencia entre funciones declaradas y funciones expresadas
 *             Mejorar la lógica de programación
 *             Aprender a usar funciones anónimas (adicional)
 *             Aprender a definir arrays con el método estático Array.from (adicional)
 *             Aprender a emplear métodos del objeto Array para la programación funcional (adicional)
 *
 *   Tarea: Generar los primeros n números primos
 *
 *          Nota: Un número n es primo si sólo es divisible por 1 y por n
 *
 *   Entrada : numero entero
 *
 *   Salida  : 1, 3, 5, 7, ...
 *
 ***************************************************************************************************************/

num = Number(prompt("Introduce un número: "))

// funcion declarada

function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true
}

// funcion expresada

const esPrimo1 = (num) => {
    if (num <= 1) { return false }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true
}

(esPrimo(num)) ? console.log(`${num} es primo con función declarada`) : console.log(`${num} no es primo con función declarada`);
(esPrimo1(num)) ? console.log(`${num} es primo con función expresada`) : console.log(`${num} no es primo con función expresada`)