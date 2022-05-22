/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    if(confirm("Quer iniciar uma nova rodada?")) {
       const cartaUsuarioUm = comprarCarta()
       const cartaUsuarioDois = comprarCarta()
       const cartaComputadorUm = comprarCarta()
       const cartaComputadorDois = comprarCarta()
       let somaCartasUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
       let somaCartasComputador = cartaComputadorUm.valor + cartaComputadorDois.valor

       console.log(`Usuário - Cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} - pontuação ${somaCartasUsuario} `)
       console.log(`Computador - Cartas: ${cartaComputadorUm.texto} ${cartaComputadorDois.texto} - pontuação ${somaCartasComputador}`)

       if(somaCartasUsuario === somaCartasComputador){
          console.log("O jogo empatou!")
       }

       if(somaCartasUsuario > somaCartasComputador){
          console.log("Você ganhou o jogo!")
       }

       if(somaCartasUsuario < somaCartasComputador){
          console.log("O computador ganhou o jogo!")
       }
       
    } else {
       console.log("O jogo acabou!")
    }
