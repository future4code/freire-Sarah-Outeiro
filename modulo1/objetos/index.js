// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* EXERCÍCIO 1 
Resposta a) Matheus Nachtergaele, Virgínia Cavendish, {canal: "Globo", horario: "14h"} */
/* EXERCÍCIO 2 
Resposta a) 
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
    idade: 3, 
    raca: "SRD" 

    nome: "Jubo", 
    idade: 3, 
    raca: "SRD" 
    
Resposta b) Ele faz um espalhamento do objeto como se o copiasse para então colocarmos novas propriedades no mesmo */

/* EXERCÍCIO 3 
Resposta a) False, Undefined 
Resposta b) A primeira foi False porque em backender a propriedade está como "false" que é booleano, então
quando foi escrito "backender"no console o boleano voltou como false também. E o Undefined ocorreu porque 
a propriedade "altura" não foi declarada então a informação voltou como undefined também  */

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/* EXERCÍCIO 1 
Resposta a) 
const pessoa = {
    nome: "Sarah",
    apelidos: ["Sah", "sa", "Sarinha"]
}

function chamarObjeto(apresentacao){
    console.log(`Eu sou ${apresentacao.nome}, mas pode me chamar de ${apresentacao.apelidos[0]}, ${apresentacao.apelidos[1]}, ${apresentacao.apelidos[2]}`)
}
chamarObjeto(pessoa)

let novosApelidos = {...pessoa, apelidos: ["sahrabens", "sahravilhosa","sarahcional"]}

chamarObjeto(novosApelidos) */

/* EXERCÍCIO 2 
const cadastroUm = {
    nome: "Sarah",
    idade: 28,
    profissao: "Estudante"
}
const cadastroDois = {
    nome: "Kaio",
    idade: 28,
    profissao: "Front End Developer"
}
function propriedadesObjeto(objetoUm, ObjetoDois){
    let infosUm = [
        objetoUm.nome, 
        objetoUm.nome.length, 
        objetoUm.idade, 
        objetoUm.profissao, 
        objetoUm.profissao.length
        ]
    let infosDois = [
            ObjetoDois.nome, 
            ObjetoDois.nome.length, 
            ObjetoDois.idade, 
            ObjetoDois.profissao, 
            ObjetoDois.profissao.length
        ]
    return [infosUm, infosDois]
}
let resultado = propriedadesObjeto(cadastroUm, cadastroDois)
console.log(resultado) */

/* EXERCÍCIO 3 
const carrinho = []
let frutaUm = {
    nome: "Abacaxi",
    disponibilidade: true
}
let frutaDois = {
    nome: "Melancia",
    disponibilidade: true
}
let frutaTres = {
    nome: "Laranja",
    disponibilidade: true
}
function sacolao(lista, fruta){
    return lista.push(fruta)
}
sacolao(carrinho, frutaUm)
sacolao(carrinho, frutaDois)
sacolao(carrinho, frutaTres)
console.log(carrinho) */

