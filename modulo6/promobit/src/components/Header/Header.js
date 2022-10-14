import { Container } from "./styled"
import HeaderVector from '../../assets/images/headervector.png'
import { Link } from "react-router-dom"

const Header = () => {
    return(
            <Container>
                 <Link to={'/'}><img src={HeaderVector} alt='TMDB'/></Link>
            </Container>
    )
}

export default Header