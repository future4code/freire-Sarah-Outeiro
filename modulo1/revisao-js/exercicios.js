// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){
        return a - b;
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = array.filter((num) => {
        return num%2 === 0
    })
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter((num) => {
        return num%2 === 0
    })
    arrayParesElevados = numerosPares.map((num) => {
        return num = num * num
    })
    return arrayParesElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = Math.max(num1, num2)
    let menorNumero = Math.min(num1, num2)
    let diferenca = maiorNumero - menorNumero

    let maiorDivisivelPorMenor
    if(maiorNumero%menorNumero === 0){
        maiorDivisivelPorMenor = true
    } else {
        maiorDivisivelPorMenor = false
    }

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

    }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    let number = 0
    for(let i = 0; i < n; i++) {
        numerosPares.push(number)
        number += 2
    }
    return numerosPares
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
     let arrayOrdenado = array.sort((a, b) => {
        return a - b
    })

    return [arrayOrdenado[array.length-2], arrayOrdenado[1]]
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) { 
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayPessoasAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return arrayPessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayPessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >=60
    })
    return arrayPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let contasAtualizadas = contas.map((conta) => {
        let somaCompras = 0

        for(let compra of conta.compras) {
            somaCompras += compra
        }

        let saldoRestante = conta.saldoTotal - somaCompras
        return {...conta, saldoTotal: saldoRestante, compras: []}
    })
    return contasAtualizadas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}