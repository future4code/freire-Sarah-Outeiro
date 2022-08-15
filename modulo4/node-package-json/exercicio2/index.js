/* Exercício 2 */

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch(operacao) {
	case "soma":
		const resul1 = num1 + num2
            console.log(`O resultado é: ${resul1}`)
		break;
	case "subt":
		const resul2 = num1 - num2
            console.log(`O resultado é: ${resul2}`)
		break;
    case "mult":
        const resul3 = num1 * num2
            console.log(`O resultado é ${resul3}`)
        break;
    case "div":
        const resul4 = num1 / num2
            console.log(`o resultado é ${resul4}`)
}
