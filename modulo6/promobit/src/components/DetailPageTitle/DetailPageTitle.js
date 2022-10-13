import { 
    Container, 
    TitleContainer, 
    Poster, 
    MovieText, 
    MovieName, 
    MovieSubtitle, 
    Avaliacao,
    Sinopse,
    Description,
    DatasheetDiv,
 } from './styled'
import Elipse from '../../assets/images/elipse.png'
import DataSheet from '../DataSheet/DataSheet'

const DetailPageTitle = () => {
    return(
        <Container>
            <TitleContainer>
                <Poster>
                    <img src='https://upload.wikimedia.org/wikipedia/pt/0/0b/How_to_Train_Your_Dragon_3_poster.jpg' alt='title'/>
                </Poster>
                <MovieText>
                    <MovieName>Titulo(2016)</MovieName>
                    <MovieSubtitle>16 anos - 11/02/2016(BR) - Ação, Aventura, Comédia, Ficção Cientifica - 1h 47m </MovieSubtitle>
                    <Avaliacao>
                    <img src={Elipse} alt='exemplo'/>
                    <p>Avaliação dos usuarios</p>
                    </Avaliacao>
                    <Sinopse>Sinopse</Sinopse>
                    <Description>Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.</Description>
                    <DatasheetDiv>
                        <DataSheet/>
                        <DataSheet/>
                        <DataSheet/>
                        <DataSheet/>
                        <DataSheet/>
                    </DatasheetDiv>
                </MovieText>
            </TitleContainer>
        </Container>
    )
}

export default DetailPageTitle