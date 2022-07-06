import { Container, BoxMatch, CaixaMatches, Titulo, Voltar, Logo, Perfil, Foto} from './styled'
import LogoImg from '../../Assets/Images/logoastro.png'
import VoltarImg from '../../Assets/Images/voltar.png'

function TelaMatches(props) {
    const Itachi = 'https://i.pinimg.com/564x/33/9d/7c/339d7c777e1bdf1302faafa493a1e6e1.jpg'

    const onClickVoltar = () => {
      props.clickInicio()
    }
    
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Voltar onClick={onClickVoltar} src={VoltarImg} alt='voltar'/>
            <Logo onClick={onClickVoltar} src={LogoImg} alt='Logo'/>
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

export default TelaMatches;