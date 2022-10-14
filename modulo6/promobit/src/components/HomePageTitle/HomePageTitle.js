import { TitleContainer, Title } from './styled'
import HomePageFiltre from '../HomePageFiltre/HomePageFiltre'

const HomePageTitle = () => {
    return(
        <TitleContainer>
            <Title> Milhões de filmes, séries e pessoas para descobrir. Explore já.</Title>
            <HomePageFiltre/>
        </TitleContainer>
    )
}

export default HomePageTitle
