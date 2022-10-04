import { goToCards } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { HomePageDiv, BotaoStart } from './styled'
import TitleImage from '../../assets/titleimage.png'

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <>
            <HomePageDiv>
                <img src={TitleImage} alt='Retrô Tarot'/>
                <p>Tire uma carta agora e veja como você pode aproveitar o melhor do seu dia!</p>
                <BotaoStart onClick={() => goToCards(navigate)}>
                    Tirar Carta
                </BotaoStart>
            </HomePageDiv>
        </>
    )
}

export default HomePage