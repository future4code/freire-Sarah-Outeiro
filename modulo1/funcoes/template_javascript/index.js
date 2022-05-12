// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* Exercício 1 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/
//Resposta a) O que vai ser impresso no console? 
//Os números 10 e 50 respectivamente.
//Resposta b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// O código iria quebrar e iria ter uma resposta de erro. 

/* Exercício 2 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */
//Resposta a. Explique o que essa função faz e qual é sua utilidade: 
//Essa função faz com que o texto que o usuário escreveu fique toda em minúsculo e determina se a palavra cenoura pode ser encontrada nesse texto.
//Resposta b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   `Eu gosto de cenoura` : true
//ii.  `CENOURA é bom pra vista` : true
//iii. `Cenouras crescem na terra` : true

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/* Exercício 1 */
/* Resposta 1 
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
Eu sou Sarah, tenho 28 anos, moro em Florianópolis e sou estudante 
RESPOSTA 
let meuNome = "Sarah"
let minhaIdade = 28
let minhaCidade = "Florianópolis"
let estudante = "Estudante"

const funcao = function(){
    console.log(`Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e sou ${estudante}`)
}

funcao() 
b) RESPOSTA 

const funcao = function(meuNome, minhaIdade, minhaCidade, estudante){
    console.log(`Eu sou ${meuNome}, tenho ${minhaIdade} anos, moro em ${minhaCidade} e sou ${estudante}`)
}
funcao("Sarah", 28, "Florianópolis", "Estudante")
funcao("kaio", 28, "Florianópolis", "Estudante") */

/* Exercício 2 
a) Resposta 

const somarDoisNumeros = function(um,dois){
   return um + dois 
}

let resultadoSoma = somarDoisNumeros(3,10)
console.log(resultadoSoma) 

b) Resposta 
const checarNumero = function(um,dois){
    return um >= dois
}
let resultadoCheck = checarNumero(9,5)
console.log(resultadoCheck) 

c) Resposta 
const paridade = function(numero){
    return numero % 2 == 0
}
let resultadoPar = paridade(2)
console.log(resultadoPar) 

d) resposta 
const tamanhoMaiusculo = function(mensagem){
    console.log(mensagem.toUpperCase(), mensagem.length)
}
tamanhoMaiusculo("Eu vou chorar") */

/* Exercício 3
Resposta 
let numeroUmUsuario = prompt("Escreva um número, brother")
let numeroDoisUsuario = prompt("Agora escreva outro número")
let numberUmUsuario = Number(numeroUmUsuario)
let numberDoisUsuario = Number(numeroDoisUsuario)

const soma = function(um, dois){
    return um+dois 
}

const subtracao = function(um, dois){
    return um-dois
}

const multiplicacao = function(um,dois){
    return um*dois
}

const divisao = function(um,dois){
    return um/dois
}

let resultadoSoma = soma(numberUmUsuario, numberDoisUsuario)
let resultadoSubtracao = subtracao(numberUmUsuario, numberDoisUsuario)
let resultadoMultiplicacao = multiplicacao(numberUmUsuario, numberDoisUsuario)
let resultadoDivisao = divisao(numberUmUsuario, numberDoisUsuario)

console.log(resultadoSoma, resultadoSubtracao, resultadoMultiplicacao, resultadoDivisao) */ 