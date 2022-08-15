//exercício 1

function checaTriangulo(
    a: number, 
    b: number, 
    c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

const resp = checaTriangulo(2, 3, 2)
console.log(resp)