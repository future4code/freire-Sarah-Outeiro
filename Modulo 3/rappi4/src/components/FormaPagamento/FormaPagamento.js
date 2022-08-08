import { Div, Lista, Pagamento, Button } from './styled'

const FormaPagamento = () => {
    return(
        <Div>
            <p>Forma de Pagamento</p>
            <Lista>
                <Pagamento>
                    <input type='checkbox' id='dinheiro' name='dinheiro' value='Dinheiro'/>
                    <label htmlFor='dinheiro'> Dinheiro </label>
                </Pagamento>
                <Pagamento>
                    <input type='checkbox' id='credito' name='credito' value='Credito'/>
                    <label htmlFor='credito'> Cartão de crédito </label>
                </Pagamento>
            </Lista>
                <Button>Confirmar</Button>
        </Div>
    )
}

export default FormaPagamento