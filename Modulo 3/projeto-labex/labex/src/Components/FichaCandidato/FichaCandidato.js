import { Ficha } from './styled';
import { ButtonPrimario } from '../../styles';

function FichaCandidato() {
    return (
      <Ficha>  
        <p>Nome: Sarah Outeiro</p>
        <p>Profissão: Fotógrafa</p>
        <p>Idade: 28 anos</p>
        <p>País: Brasil</p>
        <p>Texto de candidatura: Projeto de livro fotográfico que mostrará diversas culturas do Mundo Ninja</p>
        <ButtonPrimario>Aprovar</ButtonPrimario>
        <ButtonPrimario>Reprovar</ButtonPrimario>
      </Ficha>
    );
  }
  
  export default FichaCandidato;