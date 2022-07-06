import { 
  Container, 
  BoxMatch, 
  Titulo, 
  Logo, 
  People, 
  Perfis, 
  Footer } from './styled'
import AstroLogo from '../../Assets/Images/logoastro.png'
import AstroPeople from '../../Assets/Images/people.png'
import Dislike from '../../Assets/Images/dislike.png'
import Like from '../../Assets/Images/like.png'


function TelaInicial() {
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Logo src={AstroLogo} alt='Logo'/>
            <People src={AstroPeople} alt='Seus Matches'/>
        </Titulo>
        <Perfis>
            <img src='https://cdna.artstation.com/p/assets/images/images/035/846/130/large/remii-rin-itachisticker.jpg?1616053664' alt='Imagem Itachi'/>
        </Perfis>
        <Footer>
            <img src={Dislike} alt='Gostei'/>
            <img src={Like} alt='Não Gostei'/>
        </Footer>
      </BoxMatch>
    </Container>
  );
}

export default TelaInicial;
