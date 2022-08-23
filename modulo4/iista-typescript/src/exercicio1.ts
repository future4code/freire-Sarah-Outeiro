function dadoDoUsuario(nome: string, dataDeNascimento: string): string {
    
const [dia, mes, ano] = dataDeNascimento.split('/')

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`
}

console.log(dadoDoUsuario('Sarah', '14/06/1993'))