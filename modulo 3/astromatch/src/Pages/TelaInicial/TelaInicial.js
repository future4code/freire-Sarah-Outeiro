import { Container, BoxMatch, Titulo, Logo, People, Perfis,Foto, Footer } from './styled'
import AstroLogo from '../../Assets/Images/logoastro.png'
import AstroPeople from '../../Assets/Images/people.png'
import Dislike from '../../Assets/Images/dislike.png'
import Like from '../../Assets/Images/like.png'


function TelaInicial(props) {
  const Itachi = 'https://i.pinimg.com/564x/33/9d/7c/339d7c777e1bdf1302faafa493a1e6e1.jpg';

  const onClickIr = () => {
    props.clickMatches()
  }

  const onClickInicio = () => {
    props.clickInicio()
  }
  
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Logo onClick={onClickInicio} src={AstroLogo} alt='Logo'/>
            <People onClick={onClickIr} src={AstroPeople} alt='Seus Matches'/>
        </Titulo>
        <Perfis>
            <Foto img={Itachi} alt='Imagem Itachi'>
            <h3>Itachi Uchiha, 21</h3>
            <p>Procuro uma conexão significativa, meu filme favorito é O Corvo. Não me pergunte sobre minha família.</p>
            </Foto>
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
