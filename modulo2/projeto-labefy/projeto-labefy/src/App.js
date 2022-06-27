import React from "react";
import Home from './Pages/Home'
import Detalhes from './Pages/Detalhes'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');
body {
  margin: 0;
  padding: 0;
  background-color: #9f99c4;
  font-family: 'Mukta', sans-serif;
}
`
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
          <GlobalStyle/>
          {this.selectPage()}
        </div>
    )
  }
};

export default App;
