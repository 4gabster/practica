/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear estructuras de control repetitivas.
 *             Aprender a emplear funciones definidas por el usuario.
 *             Aprender difetentes formas de crear arrays
 *             Entender las funciones anónimas
 *             Aprender a emplear métodos del objeto Array para programación funcional
 *
 *   Tarea: Definir una función a la que se le pase un array de enteros y devuelva el número total de bumeranes
 *          de un array de números enteros e imprima cada uno de ellos:
 *              - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, 
 *                en el que el primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 *              - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 *
 ***************************************************************************************************************/

const arrayNumeros = [2, 1, 2, 3, 3, 4, 2, 4]
let num1
let num2


for (let i = 1; i < arrayNumeros.length; i++) {
    arrayNumeros[i-1] == arrayNumeros[i +1]
}