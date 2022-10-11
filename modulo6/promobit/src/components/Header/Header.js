import { Container } from "./styled"
import HeaderVector from '../../assets/images/headervector.png'

const Header = () => {
    return(
        <Container>
            <img src={HeaderVector} alt='TMDB'/>
        </Container>
    )
}

export default Header