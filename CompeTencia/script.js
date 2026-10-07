// Cada objeto representa una compra: [precioDoñaCompe, precioSeñoraTencia]
const compras = [
    { compe: 10, tencia: 15 },
    { compe: 12, tencia: 10 },
    { compe: 8, tencia: 9 },
    { compe: 20, tencia: 18 },
    { compe: 5, tencia: 7 }
];

const minC = 2;
const minT = 2;

function calcularMinimoGasto(compras, minC, minT) {
    let gastoTotal = 0
    let contCompe = 0
    let contTencia = 0
    const planDeVisitas = []

    for (let i = 0; i < compras.length; i++) {
        let compraActual = compras[i]
        let esCompeMasBarata = compraActual.compe < compraActual.tencia

        planDeVisitas.push({
            numCompra: i,
            tiendaElexida: esCompeMasBarata ? "compe" : "tencia",
            precioPagado: esCompeMasBarata ? compraActual.compe : compraActual.tencia
        })
        esCompeMasBarata ? contCompe++ : contTencia++
    }

    if (contCompe < minC) {
        let opcionesDeTencia = planDeVisitas.filter(compra => compra.tiendaElexida == "tencia")
        let faltan = minC - contCompe

        opcionesDeTencia.forEach(compra => {
            let i = compra.numCompra
            compra.diferencia = compras[i].compe - compras[i].tencia
        });

        opcionesDeTencia.sort((a, b) => a.diferencia - b.diferencia)

        let modificar = opcionesDeTencia.splice(0, faltan)
        modificar.forEach(el => {
            let index = el.numCompra

            planDeVisitas[index].tiendaElexida = "compe"
            planDeVisitas[index].precioPagado = compras[index].compe
        });
    }

    if (contTencia < minT) {
        let opcionesDeCompe = planDeVisitas.filter(compra => compra.tiendaElexida == "compe")
        let faltan = minT - contTencia

        opcionesDeCompe.forEach(compra => {
            let i = compra.numCompra
            compra.diferencia = compras[i].compe - compras[i].tencia
        });
        opcionesDeCompe.sort((a, b) => a.diferencia - b.diferencia)


        let modificar = opcionesDeCompe.splice(0, faltan)

        modificar.forEach(el => {
            let index = el.numCompra

            planDeVisitas[index].tiendaElexida = "tencia"
            planDeVisitas[index].precioPagado = compras[index].tencia
        });
    }

    gastoTotal = planDeVisitas.reduce((cont, valorActual) => cont + valorActual.precioPagado, gastoTotal)

    return { gastoTotal, planDeVisitas }
}

console.log(calcularMinimoGasto(compras, minC, minT));