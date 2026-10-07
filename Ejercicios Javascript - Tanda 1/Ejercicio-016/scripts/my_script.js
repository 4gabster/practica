/***************************************************************************************************************
 *
 *   Objetivo: Aprender a emplear métodos de programación funcional sobre objetos
 *             Aprender a crear una función expresada
 *             Aprender a crear una función anónima
 *             Programar para no repetir
 *
 *   Tarea: Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:
 *    {
 *      cliente: String
 *      total: Number
 *      entregado: Boolean
 *     }
 *
 *   Tienes que crear una función o funciones para filtrar todas las órdenes de compra entregadas que tengan un total mayor o igual a 100 
 *
 *   Entrada : array de objetos de la forma indicada
 *      
 *   Ejemplo:
 * 
 *   [
 *       {
 *          cliente: "Nicolas",
 *          total: 100,
 *          entregado: true,
 *       },
 *       {
 *         cliente: "Zulema",
 *         total: 120,
 *         entregado: false,
 *      },
 *      {
 *        cliente: "Santiago",
 *        total: 300,
 *        entregado: true,
 *      }
 *    ]
 *  
 *   Salida  : array de objetos que cumplen los filtros
 * 
 *   [
 *      {
 *         cliente: "Nicolas",
 *         total: 100,
 *         entregado: true,
 *      },
 *      {
 *         cliente: "Santiago",
 *         total: 300,
 *         entregado: true,
 *       }
 *   ]
 * 
 *
 ***************************************************************************************************************/
const ordenesDeCompra = [
    {
        cliente: "Nicolas",
        total: 100,
        entregado: true,
    },
    {
        cliente: "Zulema",
        total: 120,
        entregado: false,
    },
    {
        cliente: "Santiago",
        total: 300,
        entregado: true,
    },
    {
        cliente: "Valentina",
        total: 80,
        entregado: true,
    },
    {
        cliente: "Lucía",
        total: 50,
        entregado: false,
    }
]

const filtrarXTotales=(ordenesDeCompra)=>ordenesDeCompra.filter(el=>ordenesDeCompra.total >= 100)
const filtrarXEntregados=(ordenesDeCompra) => ordenesDeCompra.filter(el=>el.entregado)

console.log(filtrarXEntregados(filtrarXTotales(ordenesDeCompra)))


