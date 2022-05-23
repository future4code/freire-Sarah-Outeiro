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
    for(let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares
}
retornaNPrimeirosPares(3)


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}