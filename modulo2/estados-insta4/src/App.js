import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Roberta'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario={'Juliana'}
          fotoUsuario={'https://picsum.photos/50/53'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
    );
  }
}

export default App;
