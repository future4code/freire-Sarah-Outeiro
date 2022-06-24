import React from "react";
import Home from './Pages/Home'
import Detalhes from './Pages/Detalhes'
class App extends React.Component {
  state = {
    paginaAtual: 'home',
    playlistSelecionada: ''
  }

  puxarDetalhes = (playlist) => {
    this.setState({playlistSelecionada: playlist })
    this.setState({paginaAtual: 'detalhe'})
  }

  voltarParaHome = () => {
    this.setState({paginaAtual: 'home'})
  }

  selectPage = () => {
    switch (this.state.paginaAtual) {
      case 'home':
        return <Home mandarIdHome={this.puxarDetalhes}/>
      case 'detalhe':
        return <Detalhes 
                  passarIdPlaylist={this.state.playlistSelecionada} 
                  voltarHome={this.voltarParaHome}/>
      default: 
        return <Home/>
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
};

export default App;
