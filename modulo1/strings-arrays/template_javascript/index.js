// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGOS
/*Exercício 1 
let array 
console.log('a. ', array) 

array = null
console.log('b. ', array) 

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array) 

const valor = array[i+6]
console.log('f. ', valor) */
//Respostas : a. Undefined, b. null, c. 11, d. 3, e. 19, f. 9 .

/* Exercício 2 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)*/
//Resposta: SUBI NUM ONIBUS EM MIRROCOS 27

//EXERCÍCIO DE ESCRITA DE CÓDIGO
/* Exercício 1 
const nomeDoUsuario = prompt("Qual é o seu nome?")
const emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja Bem Vinda(o) ${nomeDoUsuario}`)*/

/* Exercício 2 
let minhasComidasFavoritas = ["Lasanha", "Cachorro Quente", "Lamen", "Açaí", "Subway"]
let comidaUsuario = prompt("Qual é a sua comida favorita?")
minhasComidasFavoritas[1] = comidaUsuario

console.log(minhasComidasFavoritas)
console.log(`Essas são as minhas comidas favoritas ${minhasComidasFavoritas}`) */

/* Exercício 3 
let listaDeTarefas = []
let tarefaUmUsuario = prompt("Escreva uma tarefa que você precisa realizar hoje")
let tarefaDoisUsuario = prompt("Escreva outra tarefa que você precisa realizar hoje")
let tarefaTresUsuario = prompt("Escreva mais uma tarefa que você precisa realizar hoje")
listaDeTarefas.push(tarefaUmUsuario)
listaDeTarefas.push(tarefaDoisUsuario)
listaDeTarefas.push(tarefaTresUsuario)
let tarefaRealizadaUsuario = prompt(`Digite o índice da tarefa realizada`)
let tarefaRealizadaNumber = Number(tarefaRealizadaUsuario)
listaDeTarefas.splice(tarefaRealizadaNumber, 1)

console.log(listaDeTarefas) */