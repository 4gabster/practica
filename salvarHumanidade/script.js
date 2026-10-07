const stringADN = "AGGGGTCC"

const secuencias = stringADN.match(/(.)\1*/g)

const secuenciasOrdenada =  secuencias.sort((a, b)=> b.length - a.length)

const posicionInicioCadena = stringADN.indexOf(secuenciasOrdenada[0])
const longitudCadena = secuenciasOrdenada[0].length

console.log(`La secuencia mas larga corresponde al aminoácido ${secuenciasOrdenada[0]}`)
console.log(`La secuencia se produce a partir de la posicion ${posicionInicioCadena} del ADN`)
console.log(`La longitud mas larga de aminoácido es ${longitudCadena}`)
console.log(`El ADN con el virus desactivado es ${stringADN.replace(secuenciasOrdenada[0], "")}`)

