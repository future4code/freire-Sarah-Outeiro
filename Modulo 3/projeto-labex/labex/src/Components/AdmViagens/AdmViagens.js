import { Box, Remove } from './styled';
import { ButtonPrimario } from '../../styles';
import Trash from '../../Assets/trash-icon.png'
import { useNavigate } from 'react-router-dom';

function AdmViagens() {
    const navigate = useNavigate()

    const goToCreateTrip= () => {
      navigate('/criar-viagem')
    }

    const goToDetailsPage= () => {
        navigate('/detalhes')
      }

    return (
      <div>  
        <Box>
            <p onClick={goToDetailsPage}>Viagem</p>
            <Remove src={Trash} alt='Remover'/>
        </Box>
        <ButtonPrimario onClick={goToCreateTrip}>Criar Viagem</ButtonPrimario>
      </div>
    );
  }
  
  export default AdmViagens;