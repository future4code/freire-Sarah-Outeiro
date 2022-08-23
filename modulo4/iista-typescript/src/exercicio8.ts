const exercicio8 = (dataNascimento: string, dataEmissao: string): boolean => {
    let precisaRenovar = false
    const dataAtual = new Date()
    const [dia, mes, ano] = dataNascimento.split('/')

    let idade = dataAtual.getFullYear() - Number(ano)
    console.log( dataAtual.getMonth())
    if(dataAtual.getMonth() + 1 < Number(mes)) {
        idade--
    }
    console.log(idade)
    return precisaRenovar
}
console.log(exercicio8('20/02/2000', '20/03/2015'))
console.log(exercicio8('30/05/2000', '20/03/2015'))
console.log(exercicio8('03/11/2000', '20/03/2015'))