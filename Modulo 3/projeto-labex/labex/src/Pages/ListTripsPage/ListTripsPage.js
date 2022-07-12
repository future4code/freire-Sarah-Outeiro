import { Titulo } from './styled'
import BoxViagem from '../../Components/BoxViagem/BoxViagem';
import { ButtonPrimario } from '../../styles'
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {
  const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div>  
        <Titulo>Veja nossas viagens aqui</Titulo>
        <BoxViagem/>
        <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
      </div>
    );
  }
  
  export default ListTripsPage;