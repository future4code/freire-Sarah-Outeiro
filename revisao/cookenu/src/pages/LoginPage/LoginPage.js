import LoginForm from "./LoginForm"
import { goToSignUp } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = () => {
  useUnprotectedPage()
  
  const navigate = useNavigate()

    return (
      <>
        <LoginForm/>
        <button onClick={() => goToSignUp(navigate)}> Não possui conta? Cadastre-se!</button>
      </>
    );
  }
  
  export default LoginPage