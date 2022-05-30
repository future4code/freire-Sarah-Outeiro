```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let filtrarOcorrencia = arrayDeNumeros.filter((num) => {
    return numeroEscolhido === num
  })
   if (filtrarOcorrencia.length >= 1) {
      return `O número ${numeroEscolhido} aparece ${filtrarOcorrencia.length}x`
   } else {
     return `Número não encontrado`
   }
}
```