import { Viagem } from './styled'
import { ButtonPrimario } from '../../styles'
import { useNavigate } from 'react-router-dom';

function BoxViagem() {
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate('/inscricao')
    }
    return (
        <div>
            <Viagem>  
                <p><b>Nome:</b> Excursão Universo Ninja</p>
                <p><b>Descrição:</b> O mundo Naruto é semelhante ao Japão feudal em vários aspectos; esses países mantêm o equilíbrio entre si através de nada além de poder.</p>
                <p><b>Planeta:</b> Mundo Ninja </p>
                <p><b>Duração:</b> 5 anos </p>
                <p><b>Data:</b> 2036-06-18 </p>
            </Viagem>
            <ButtonPrimario onClick={goToApplicationFormPage}>Inscrever-se</ButtonPrimario>
        </div>
    );
  }
  
  export default BoxViagem;