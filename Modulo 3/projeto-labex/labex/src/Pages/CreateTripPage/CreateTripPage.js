import { Titulo, Botoes } from './styled';
import { ButtonPrimario, Select, Input} from '../../styles';
import { useNavigate } from 'react-router-dom';

function CreateTripPage() {
  const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        
         <div>  
          <Titulo> Inscreva-se para uma viagem </Titulo>
          <form>
            <Input placeholder="Nome"/>
            <Select>
              <option value=''>Escolha um Planeta</option>
              <option>2</option>
            </Select>
            <Select>
              <option value=''>Data</option>
              <option>2</option>
            </Select>
            <Input placeholder="Descrição"/>
            <Input placeholder="Duração em Dias"/>
            <ButtonPrimario>Criar</ButtonPrimario>
          </form>
          <Botoes>
            <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
          </Botoes>
      </div>
    );
  }
  
  export default CreateTripPage;
  