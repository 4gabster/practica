function monedasFiltrar(monedasDevolver) {
    return monedasDevolver.filter(moneda => moneda.cantidadDevolver > 0);

}

function retVolta(precio) {
    let cartosIn = 0;
    let faltan;
    while (precio > cartosIn) {
        faltan = precio - cartosIn;
        // Convertimos a céntimos multiplicando por 100 y redondeando
        let entradaEuros = parseFloat(prompt(`Introduce os cartos restantes(faltan ${faltan / 100}€)`));
        let monedaIntroducida = Math.round(entradaEuros * 100);

        let monedaValida = monedas.some(moneda => moneda.valor === monedaIntroducida);

        if (monedaValida) {
            cartosIn += monedaIntroducida;
        } else {
            alert("Introduce unha moeda válida.");
        }
    }
    return cartosIn - precio;
}

const productos = [
    // Snacks y bebidas estándar (precios en céntimos)
    { id: "A1", nombre: "Agua Mineral 500ml", precio: 100 },
    { id: "A2", nombre: "Refresco de Cola 330ml", precio: 150 },
    { id: "A3", nombre: "Bebida Energética 250ml", precio: 200 },
    { id: "B1", nombre: "Zumo de Naranja 330ml", precio: 130 },
    { id: "B2", nombre: "Patatas Fritas Lays", precio: 120 },
    { id: "B3", nombre: "Barrita de Chocolate KitKat", precio: 110 },
    { id: "C1", nombre: "Galletas Oreo 66g", precio: 100 },
    { id: "C2", nombre: "Frutos Secos Variados", precio: 140 },
    { id: "C3", nombre: "Sándwich Mixto (Jamón y Queso)", precio: 250 },
    { id: "D1", nombre: "Chicles de Menta", precio: 80 },

    // Productos premium y electrónicos (precios en céntimos)
    { id: "E1", nombre: "Ensalada César Preparada", precio: 450 },
    { id: "E2", nombre: "Batido Proteico 500ml", precio: 380 },
    { id: "E3", nombre: "Café Frío Especialidad Cold Brew", precio: 320 },
    { id: "F1", nombre: "Auriculares Inalámbricos Básicos", precio: 1299 },
    { id: "F2", nombre: "Cargador USB-C Rápido", precio: 1550 },
    { id: "F3", nombre: "Powerbank Batería Externa 5000mAh", precio: 1995 }
];

const monedas = [
    { valor: 200, cantidadDevolver: 0 },
    { valor: 100, cantidadDevolver: 0 },
    { valor: 50, cantidadDevolver: 0 },
    { valor: 20, cantidadDevolver: 0 },
    { valor: 10, cantidadDevolver: 0 },
    { valor: 5, cantidadDevolver: 0 },
    { valor: 2, cantidadDevolver: 0 },
    { valor: 1, cantidadDevolver: 0 }
];

const productoPrompt = prompt("Introduce o producto desexado: ").toUpperCase();
let productoEscollido = productos.find(p => p.id === productoPrompt);

let volta = retVolta(productoEscollido.precio);

let monedasDevolver = monedas.map(moneda => {
    const copiaMonedas = { ...moneda };
    let cantidadSumar
    if (volta >= copiaMonedas.valor) {
        cantidadSumar = Math.floor(volta / copiaMonedas.valor);
        if (cantidadSumar > 0) {
            copiaMonedas.cantidadDevolver += cantidadSumar;
            volta -= cantidadSumar * copiaMonedas.valor;
        }
    }
    return copiaMonedas;
});

monedasFiltradas = monedasFiltrar(monedasDevolver)

const resultadoImprimir = monedasFiltradas.map(el => {
    const esEuro = el.valor >= 100

    let etiqueta = ""
    let valor = el.valor
    if (esEuro) {
        valor = Math.round(valor / 100)
        etiqueta = valor > 1 ? "euros" : "euro"
    }
    else {
        etiqueta = el.cantidadDevolver > 1 ? "céntimos" : "céntimos"
    }

    const textoMoneda = el.cantidadDevolver == 1 ? "moneda" : "monedas"

    return `${el.cantidadDevolver} ${textoMoneda} de ${valor} ${etiqueta}`
}).join(", ")


console.log(`La máquina devuelve: ${resultadoImprimir}`)

