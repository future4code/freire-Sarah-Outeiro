// EXERCICIOS DE INTERPRETACAO DE CODIGO
/* Exercicio 1 
Resposta a) O código testa se o número é par ou não
Resposta b) Quando o número é par ele recebe a mensagem de que passou no teste
Resposta c) Quando o número é ímpar ele não passa no teste
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */
/* Exercicio 2 
Resposta a) O código serve para imprimir o valor de uma fruta.
Resposta b) Se o valor de fruta for Maçã a mensagem impressa no console será "O preço da fruta maçã é R$2,25" 
Resposta c) A mensagem impressa será "O preço da fruta Pêra é R$5,5.
"Não daria problema pois o break que seria retirado está depois do item Pêra e não antes.
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)  */

/* Exercício 3 
Resposta a) A primeira linha está declarando uma variavel que pergunta para o usuario um numero e depois transforma o numero de string para number
Resposta b) A mensagem para o número 10 seria "Esse numero passou no teste" e "Essa mensagem é secreta"
Não teria mensagem para o número -10 pois não foi escrito o que se deve imprimir neste caso.
Resposta c) Hávera um erro de console pois a variável de dentro da função precisa ser chamada antes de chamar a função */


// EXERCICIOS DE ESCRITA DE CODIGO
/* Exercício 1 
let idadeUsuario = Number(prompt("Quantos anos você tem?"))
if (idadeUsuario >= 18){
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir.")
} 
*/

/* Exercício 2 
let turnoAluno = prompt("Em qual turno você estuda? Responda M para Matutino, V para Vespertino ou N para Noturno")
if (turnoAluno === "M"){
    console.log("Bom dia!")
} else if (turnoAluno === "V"){
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
} 
*/

/* Exercício 3 
let turnoAluno = prompt("Em qual turno você estuda? Responda M para Matutino, V para Vespertino ou N para Noturno")
switch (turnoAluno){
    case "M":
    console.log("Bom dia!")
    break
    case "V":
    console.log("Boa Tarde!")
    break
    case "N":
    console.log("Boa Noite!")
    break 
    default:
    console.log("Responda M para Matutino, V para Vespertino ou N para Noturno")
    break
}
*/

/* Exercício 4 */
let filmeUsuario = prompt("Qual é o gênero de filme que vocês irão assistir?")
let valorIngresso = Number(prompt("Quanto custa o ingresso do filme que vocês assistirão?"))
if ((filmeUsuario === "Fantasia") && (valorIngresso <= 15)){
    console.log("Bom Filme! :)")
} else {
    console.log("Escolha outro filme")
}