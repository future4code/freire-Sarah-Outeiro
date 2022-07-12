import { Titulo, Botoes } from './styled';
import { Input, ButtonPrimario } from '../../styles';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate()

    const goToAdminHomePage = () => {
      navigate('/admin/home')
    }

    const goBack = () => {
        navigate(-1)
    }
    return (
      <div>  
        <Titulo>Login</Titulo>
        <Input placeholder='E-mail'/>
        <Input placeholder='Senha'/>
        <ButtonPrimario onClick={goToAdminHomePage}>Entrar</ButtonPrimario>
        <Botoes>
          <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
        </Botoes>
      </div>
    );
  }
  
  export default LoginPage;
  