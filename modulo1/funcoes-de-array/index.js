// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* Exercício 1 
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
  
  Resposta a) Ele vai imprimir item por item do array (cada pessoa com seus apelidos), o número do item 
  do array junto e por fim o array inteiro todas as vezes. */

  
  /* Exercício 2 
  const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

Resposta a) O console irá imprimir apenas os nomes do array, sem os apelidos. */


/* Exercício 3 
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
Resposta a) Ele só vai imprimir os itens do array que não possuem o apelido "Chijo"*/


// EXERCICIOS DE ESCRITA DE CÓDIGO
/* Exercício 1 
//a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  
 let nomePets = pets.map((pet) => {
     return pet.nome
 })
 console.log(nomePets)
 
 //b)
 let petsSalsicha = pets.filter((pet) => {
     return pet.raca === "Salsicha"
 })
 console.log(petsSalsicha)

 //c)
 let racaPoodle = pets.filter((pet) => {
     return pet.raca === "Poodle"
 })
for (let pet of racaPoodle) {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)
}
*/ 


/* Exercício 2  
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 let nomeProdutos = produtos.map((produto) => {
     return produto.nome
 })
 console.log(nomeProdutos)

 //b)
 let descontoProdutos = produtos.map((produto) => {
     let desconto = produto.preco*0.05
     return {nome: produto.nome, preco: produto.preco-desconto}
 })
 console.log(descontoProdutos)

 //c)
 let produtosBebidas = produtos.filter((produto) => {
     return produto.categoria === "Bebidas"
 })
 console.log(produtosBebidas)

 //d) 
 let produtosYpe = produtos.filter((produto) => {
     return produto.nome.includes("Ypê")
    }
 )
 console.log(produtosYpe)

 //e) 
 let propagandaYpe = produtosYpe.map((produto) => {
         return `Compre ${produto.nome} por ${produto.preco}`
     }
 )
 console.log(propagandaYpe) */
    
