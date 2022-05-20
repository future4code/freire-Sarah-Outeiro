// EXERCÍCIOS DE INTERPRETACAO DE CODIGO
/* EXERCICIO 1 
let valor = 0

for(let loop = 0; loop < 5; loop++) {
    //valor = valor + loop
    valor += loop
}

console.log(valor)
Resposta 1 : O valor impresso no console será 10. Pois o for conta os numeros até 5 e o valor += loop soma o valor antigo mais o valor do novo loop.  */

/* EXERCICIO 2 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} */
// Resposta a) O console vai imprimir todos os numeros do array que forem maiores que 18. 
/* Resposta b) sim, 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
let index = 0

for (let numero of lista) {
    console.log(numero,index)
    index++
} */

/* EXERCICIO 3 
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

let quantidadeAtual = 0

while(quantidadeAtual < quantidadeTotal){
  let textoFinal = ""

  for(let index = 0; index < quantidadeAtual + 1; index++){
    textoFinal = textoFinal + "*"
  }

  console.log(textoFinal)
  quantidadeAtual++
}
Resposta: Se o usuario escrever o numero 4, cada linha irá imprimir a quantidade de astericos do numero do loop: *, **, ***, **** . */

// EXERCÍCIOS DE ESCRITA DE CODIGO //
/* EXERCÍCIO 1 
let quantidadeBichinhosUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

if(quantidadeBichinhosUsuario < 1){
  let mensagem = "Que pena! Você pode adotar um bichinho!"
  console.log(mensagem)
}

if(quantidadeBichinhosUsuario > 0){
  let arrayBichinhos = []
  let loopAtual = 0

  while(loopAtual < quantidadeBichinhosUsuario){
    let perguntaNome = prompt("Diga o nome de um bichinho")
    arrayBichinhos.push(perguntaNome)
    loopAtual++
  }
   console.log(arrayBichinhos)
} */


/* EXERCÍCIO 2 
//a)
let arrayOriginal = [2, 10, 37, 26, 40]

function listaNumeros(numeros){
  for(let numero of numeros){
    console.log(numero)
  }
}
listaNumeros(arrayOriginal)

//b)
function divideNumero(numeros){
  for(let numero of numeros){
    console.log(numero/10)
  }
}
divideNumero(arrayOriginal)

//c)
function numerosPares(numeros){
  let arrayPares = []

  for(let numero of numeros){
    if((numero % 2) === 0){
      arrayPares.push(numero)
    }
  }
  console.log(arrayPares)
}
numerosPares(arrayOriginal)

//d)
function listaIndice(numeros){
  let arrayIndice = []

  for (let index = 0; index < numeros.length; index++){
    let textoIndice = `O elemento do indice ${index} é o numero ${numeros[index]}`
    arrayIndice.push(textoIndice)
  }
  console.log(arrayIndice)
}
listaIndice(arrayOriginal)
*/