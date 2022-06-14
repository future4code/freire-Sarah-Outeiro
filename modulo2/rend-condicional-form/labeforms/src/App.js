import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
display: flex;
flex-direction: column;
width: 150px;
margin: 0 auto;
margin-top:10px;
`


class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 etapa={this.state.etapa} titulo="DADOS GERAIS" />;
      break;

      case 2:
        return <Etapa2 etapa={this.state.etapa} titulo="INFORMAÇÕES DO ENSINO SUPERIOR" />;
      break;

      case 3:
        return <Etapa3 etapa={this.state.etapa} titulo="INFORMAÇÕES GERAIS DE ENSINO" />;
      break;

      case 4:
        return <Final titulo="O FORMULÁRIO ACABOU" subTitulo="Muito obrigada por participar! Entraremos em contato!" />;
      break;
    
      default:
        return <Etapa1 />;
        break;
    }
  }

  

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }
  render(){
    return (
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4
          ? 
            <Button>
              <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
            </Button>
          :
            null
        }
      </div>
    );
  }
}

export default App;
