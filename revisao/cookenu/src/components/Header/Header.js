import { Barra } from './styled'
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
 
const Header = () => {
  const navigate = useNavigate()

    return (
      <>
        <Barra>
            <h1 onClick={() => goToRecipesList(navigate)}>cookenu</h1>
            <h2 onClick={() => goToLogin(navigate)}>Login</h2>
        </Barra>
      </>
    );
  }
  
  export default Header