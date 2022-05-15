// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
// soma(1,2)

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
// imprimeMensagem()

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01


function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alturaUsuario = prompt('Digite a altura do retângulo aqui')
  let larguraUsuario = prompt('Digite a largura do retângulo aqui')
  let alturaNumber = Number(alturaUsuario)
  let larguraNumber = Number(larguraUsuario)
  let resultado = alturaNumber*larguraNumber
  console.log(resultado)
}
// calculaAreaRetangulo(alturaUsuario,larguraUsuario)


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtualUsuario = prompt("Em que ano estamos?")
  let anoNascimentoUsuario = prompt("Em que ano você nasceu?")
  let anoAtualNumber = Number(anoAtualUsuario)
  let anoNascimentoNumber = Number(anoNascimentoUsuario)
  let idadeUsuario = anoAtualNumber-anoNascimentoNumber
  console.log(idadeUsuario)
}
// imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}
// calculaIMC(60, 1.63)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual é a sua idade?")
  let email = prompt("Qual é o seu e-mail?")
  let idadeNumber = Number(idade)
  console.log(`Meu nome é ${nome}, tenho ${idadeNumber} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Escreva aqui sua primeira cor favorita")
  let cor2 = prompt("Escreva aqui sua segunda cor favorita")
  let cor3 = prompt("Escreva aqui sua terceira cor favorita")
  let listaCores = [cor1, cor2, cor3]
  console.log(listaCores)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}
retornaStringEmMaiuscula("oi")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   return custo/valorIngresso
}
calculaIngressosEspetaculo(3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length
}
checaStringsMesmoTamanho("ola","abc")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
retornaPrimeiroElemento([1, 2, 3])

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}
retornaUltimoElemento([1, 2, 3, 4, 5])
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return replaceAll(array[0], array.length-1)
}
trocaPrimeiroEUltimo([1, 2, 3, 4, 5])

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase()==string2.toLowerCase()
}
checaIgualdadeDesconsiderandoCase("LARANJA", "laranja")
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}