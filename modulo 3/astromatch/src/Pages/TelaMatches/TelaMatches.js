import { Container, BoxMatch, CaixaMatches, Titulo, Perfil, Foto} from './styled'
import Logo from '../../Assets/Images/logoastro.png'

function TelaInicial() {
    const Itachi = 'https://cdna.artstation.com/p/assets/images/images/035/846/130/large/remii-rin-itachisticker.jpg?1616053664';
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <button>Voltar</button>
            <img src={Logo} alt='Logo'/>
        </Titulo>
            <CaixaMatches>
                <Perfil> 
                <Foto img={Itachi}></Foto>
                <p>Itachi Uchiha</p>
                </Perfil>
            </CaixaMatches>
      </BoxMatch>
    </Container>
  );
}

export default TelaInicial;