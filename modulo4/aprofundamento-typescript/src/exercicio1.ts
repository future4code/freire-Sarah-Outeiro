//Exercício 1
//a) Ele responde que o tipo deveria ser 'number' e nao 'string'
const minhaString: string = '12'


//b) Colocamos um "|" entre os tipos
const meuNumero: number | string = 'sarah'


//c) 
// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const sarah: Pessoa = {
//     nome: 'Sarah',
//     idade: 29,
//     corFavorita: 'rosa'
// }

// const kaio: Pessoa = {
//     nome: 'Kaio',
//     idade: 28,
//     corFavorita: 'roxo'
// }

// const juliana: Pessoa = {
//     nome: 'Juliana',
//     idade: 25,
//     corFavorita: 'amarelo'
// }


// d)
enum Cores {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const sarah: Pessoa = {
    nome: 'Sarah',
    idade: 29,
    corFavorita: Cores.AZUL
}

const kaio: Pessoa = {
    nome: 'Kaio',
    idade: 28,
    corFavorita: Cores.VIOLETA
}

const juliana: Pessoa = {
    nome: 'Juliana',
    idade: 25,
    corFavorita: Cores.AMARELO
}