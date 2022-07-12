import { ButtonPrimario, Select, Input } from "../../styles";
import { Titulo } from './styled';
import { useNavigate } from 'react-router-dom';

function ApplicationFormPage() {
  const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div>  
        <Titulo> Inscreva-se para uma viagem </Titulo>
        <form>
          <Select>
            <option value=''>Escolha Uma Viagem</option>
            <option>2</option>
          </Select>
          <Input placeholder="Nome"/>
          <Input placeholder="Idade"/>
          <Input placeholder="Texto de Candidatura"/>
          <Input placeholder="Profissão"/>
          <Select>
            <option value=''>Escolha um País</option>
            <option>2</option>
          </Select>
          <ButtonPrimario>Enviar</ButtonPrimario>
        </form>
        <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
      </div>
    );
  }
  
  export default ApplicationFormPage;