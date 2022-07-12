import { Titulo } from './styled'
import { ButtonPrimario } from '../../styles';
import AmdViagens from '../../Components/AdmViagens/AdmViagens';
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
}
  return (
    <div>  
      <Titulo> Painel Administrativo </Titulo>
      <AmdViagens/>
      <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
    </div>
  );
}

export default AdminHomePage;