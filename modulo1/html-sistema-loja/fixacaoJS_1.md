```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let valorComissao = qtdeCarrosVendidos * 100 + valorTotalVendas * 0.05
  let salarioFinal = 2000 + valorComissao
  
  return salarioFinal
}
```