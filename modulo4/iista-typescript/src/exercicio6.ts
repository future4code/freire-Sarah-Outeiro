type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const contasClientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const saldosNegativos = (contasClientes: Cliente[]): Cliente[] => {
    contasClientes.forEach((cliente) => {
        let soma = 0
        // for (let i = 0 ; i <= cliente.debitos.length - 1; i++) {
        //     soma += cliente.debitos[i]
        // }
        const somaDeDebitos = cliente.debitos.reduce((a, b) => {
            return a + b 
        }, soma)
        cliente.saldoTotal = cliente.saldoTotal - somaDeDebitos
        cliente.debitos = []
    })

    const listaSaldosNegativos = contasClientes.filter((cliente) => {
        return cliente.saldoTotal < 0
    })

    return listaSaldosNegativos
}

console.log(saldosNegativos(contasClientes))




