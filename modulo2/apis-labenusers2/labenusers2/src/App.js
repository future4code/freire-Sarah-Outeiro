import React from 'react';
import './App.css';
import TelaCadastro from './components/TelaCadastro';
import TelaUsuarios from './components/TelaUsuarios';

class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
  };

escolherTela = () => {
  switch (this.state.telaAtual) {
    case 'cadastro':
      return <TelaCadastro irParaLista={this.irParaLista} />
    case 'lista':
      return <TelaUsuarios irParaCadastro={this.irParaCadastro} />
    default: 
      return <div>ERRO - PÁGINA NÃO ENCONTRADA </div>
  }
}

irParaCadastro = () => {
  this.setState({telaAtual: 'cadastro'})
}

irParaLista = () => {
  this.setState({telaAtual: 'lista'})
}

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    );
  }
}

export default App;
