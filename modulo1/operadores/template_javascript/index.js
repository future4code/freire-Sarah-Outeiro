//Exercícios de Interpretação de Código
/* Exercício 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2
let resultado = bool1 && bool2
console.log("a. ", resultado)
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
console.log("d. ", typeof resultado)
Resposta Exercício 1: a. FALSE  b. FALSE  c. TRUE  d. Boolean */

/* Exercício 2. 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
/* Resposta Exercício 2: Ele vai só juntar as duas informações do primeiroNumero e do segundoNumero como se fosse texto por causa do prompt.*/

/* Exercício 3 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let primeiroNumeroConvertido = Number(primeiroNumero)
let segundoNumeroConvertido = Number(segundoNumero)
const soma = primeiroNumeroConvertido + segundoNumeroConvertido
console.log(soma)
Resposta Exercício 3: Fazer a conversão de string para Number declarando as variáveis de conversão das primeiras variáveis. */

// Exercícios de Escrita de Código
/* Exercício 1 
let idadeUsuario = prompt("Qual é a sua idade?")
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")
let comparacao = Number(idadeUsuario) > Number(idadeAmigo)
console.log(`Sua idade é maior do que a do seu melhor amigo?`, comparacao) */

/* Exercício 2 
let usuarioNumeroPar = prompt("Digite um número par")
let numeroDividido = Number(usuarioNumeroPar)%2
console.log(numeroDividido)
Resposta 2: C. Quando colocamos número par o resultado sempre é 0, pois todo numero par é dividido por 2 e não possui resto. 
D. Todo número ímpar tem o número 1 de sobra. */

/* Exercício 3 
let idadeUsuario = prompt("Quantos anos você tem")
let idadeConvertida = Number(idadeUsuario)
let idadeUsuarioMeses = idadeConvertida * 12
let idadeUsuarioDias = idadeConvertida * 365
let idadeUsuarioHoras = idadeUsuarioDias * 24
console.log(idadeUsuarioMeses)
console.log(idadeUsuarioDias)
console.log(idadeUsuarioHoras) */

/* Exercício 4 */
/* let numeroUm = prompt("Diga um número")
let numeroDois = prompt("Diga outro número")
let numeroUmConvertido = Number(numeroUm)
let numeroDoisConvertido = Number(numeroDois)
let maiorQueSegundo = numeroUmConvertido > numeroDoisConvertido
let igualQueSegundo = numeroUmConvertido === numeroDoisConvertido
let divisivelSegundo = numeroUmConvertido % numeroDoisConvertido == 0
let divisivelPrimeiro = numeroDoisConvertido % numeroUmConvertido == 0
console.log("O primeiro número é maior que o segundo?", maiorQueSegundo)
console.log("O primeiro número é igual ao segundo?", igualQueSegundo)
console.log("O primeiro número é divisível pelo segundo", divisivelSegundo)
console.log("O segundo número é divisível pelo primeiro",divisivelPrimeiro) */

let numeroPrimo = (numero) => {
    if(numero%2 !== 0){
        console.log("É Primo!")
    } else {
        console.log("Não é primo!")
    }
}
numeroPrimo(12)
