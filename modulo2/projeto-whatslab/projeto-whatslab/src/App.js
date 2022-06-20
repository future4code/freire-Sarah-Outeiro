import React from 'react';
import './App.css';
import Conversa from './components/Conversa'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:column;
border: solid 1px #65c9b9;
border-radius: 20px;
max-width: 600px;
height: 100vh;
background-color: #def2f0;
justify-content: center;
`

const Nome = styled.input`
  width: 100px;
  border: solid 1px #65c9b9;
  border-bottom-left-radius: 20px;
  padding-left: 10px;
  height: 35px;
  background-color: #fcf3ef;
`

const Mensagem = styled.input`
  height: 35px;
  width: 380px;
  border: solid 1px #65c9b9;
  padding-left: 10px;
  background-color: #fcf3ef;
`

const Enviar = styled.button`
  height: 35px;
  width: 92px;
  border: solid 2px #6ac6be;
  background-color: #f3693a;
  border-bottom-right-radius: 20px;
  color: #fff0e4;
  font-weight: 900 bolder;
  cursor: pointer;
  &:hover{
    background-color: #6ac7bc;
  }
`


class App extends React.Component {
  state = {
    mensagens: [
    ],
    inputNome: '',
    inputMensagem: ''
  };

  onChangeInputNome = (event) =>{
    this.setState({inputNome: event.target.value});
  };

  onChangeInputMensagem = (event) =>{
    this.setState({inputMensagem: event.target.value})
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem
    };
    
    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({mensagens: novasMensagens})
    this.setState({inputMensagem:''})
  }

  render(){
    return(
      <Container>
        <Conversa mensagens={this.state.mensagens}/>
        <div>
          <Nome
            placeholder='Nome' 
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
          />
          <Mensagem
            placeholder='Mensagem' 
            value={this.state.inputMensagem}
            onChange={this.onChangeInputMensagem}
          />
          <Enviar onClick={this.adicionaMensagem}><b>Enviar</b></Enviar>
        </div>
      </Container>
    )
  }
}


export default App;
