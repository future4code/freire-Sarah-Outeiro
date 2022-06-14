import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 0px;
  margin-bottom: 20px;
  width: 300px;
`
const StyleInput = styled.input`
  border: solid;
  border-radius: 10px;
  height: 25px;
  padding-left: 10px;
`

const StyleButton = styled.button`
  height: 40px;
  border-radius: 10px;
  background-color: #ea9d4b;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #db5133;
  }
 `

 const StyleTitulo = styled.h2 `
  margin-top: 40px;
  margin-bottom: 0px;
  font-size: 20px;
  color: #cf5734;
 `

 const StyleSubtitulo = styled.h4 `
  margin-top: 10px;
  margin-bottom: 10px;
  color: #54889e;
`

class App extends React.Component {
  state = {
    posts: [
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151'
    },
    {
      nomeUsuario:'Roberta',
      fotoUsuario:'https://picsum.photos/50/52',
      fotoPost:'https://picsum.photos/200/152'
    },
    {
      nomeUsuario:'Juliana',
      fotoUsuario:'https://picsum.photos/50/53',
      fotoPost:'https://picsum.photos/200/153'
    }
  ],
    inputNomeUsuario:'',
    inputFotoUsuario:'',
    inputFotoPost:''
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({
      inputNomeUsuario: event.target.value
    })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      inputFotoUsuario: event.target.value
    })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({
      inputFotoPost: event.target.value
    })
  }

  adicionaPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({
      posts: novosPosts
    })
  }

  render() {

    const listaComponentes = this.state.posts.map((post) => {
      return (
        <Post nomeUsuario={post.nomeUsuario} 
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}/>
      )
    }
    )
    return (
      <MainContainer>
        <StyleTitulo>Insta 4</StyleTitulo>
        <StyleSubtitulo>Compartilhe Sua Foto Aqui!</StyleSubtitulo>
        <InputPost>
          <StyleInput 
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={'Nome'}
          />
          <StyleInput 
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={'Foto do Usuario'}
          />
          <StyleInput 
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={'Foto do Post'}
          />
          <StyleButton onClick={this.adicionaPost}>Enviar</StyleButton>
        </InputPost>
        <div>{listaComponentes}</div>
      </MainContainer>
    );
  }
}

export default App;
