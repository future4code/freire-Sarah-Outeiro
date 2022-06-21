import './App.css';
import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';

class App extends React.Component {
  state = {
    telaAtiva: 'cadastro'
  }

  entrarCadastro = () => {
    this.setState({telaAtiva: 'cadastro'})
  }

  entrarLista = () => {
    this.setState({telaAtiva: 'lista'})
  }

  render() {
    return (
      <div>
        <div className='header'>
          <ul>
            <li onClick={this.entrarCadastro}>Cadastro</li>
            <li onClick={this.entrarLista}>Lista de Cadastros</li>
          </ul>
        </div>
        <div className='container'>
          {this.state.telaAtiva === 'cadastro' ? <TelaCadastro/> : <TelaLista/> }
          {this.state.telaAtiva === 'lista' ? <button onClick={this.entrarCadastro}>Voltar</button> : null}
        </div>
      </div>
    );
  }
}

export default App;
