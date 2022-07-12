import { Titulo, Infos, Lista } from './styled';
import FichaCandidato from '../../Components/FichaCandidato/FichaCandidato';
import { ButtonPrimario } from '../../styles';
import { useNavigate } from 'react-router-dom';

function TripDetailsPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
    return (
      <div>  
        <Titulo> Viagem </Titulo>
        <Infos>Nome: Excursão pelo Universo Ninja</Infos>
        <Infos>Descrição: O mundo Naruto é semelhante ao Japão feudal em vários aspectos; esses países mantêm o equilíbrio entre si através de nada além de poder.</Infos>
        <Infos>Planeta: Mundo Ninja</Infos>
        <Infos>Duração: 5 anos.</Infos>
        <Infos>Data: 2036-06-18</Infos>

        <Titulo> Candidatos Pendentes </Titulo>
        <FichaCandidato/>

        <Titulo> Candidatos Aprovados </Titulo>
          <Lista>
            <li>Sarah</li>
            <li>Giovana</li>
            <li>Kaio</li>
          </Lista>
          <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
      </div>
    );
  }
  
  export default TripDetailsPage;