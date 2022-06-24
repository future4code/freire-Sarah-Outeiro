import React from "react";
import styled from "styled-components";
import axios from "axios";
import CriarPlaylist from '../Components/CriarPlaylist'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    max-width: 900px;
    @media (max-width: 560px) {
        grid-template-columns: 1fr 1fr
    }
`

const CardPlaylist = styled.div`
border: 1px solid black;
width: 100%;
height: 180px;
display: flex;
justify-content: space-between;
`
const Del = styled.button`
width: 20px;
height: 18px;
padding: 0;
`

class VisualizarPlaylists extends React.Component {
    state = {
        playlists: []
      };
    
      componentDidMount() {
        this.pegarPlaylists()
      };
    
      pegarPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    
        axios.get(url, {
          headers: {
            Authorization: 'sarah-outeiro-freire'
          }
        })
        .then((sucess) => {
            console.log(sucess.data)
          this.setState({playlists: sucess.data.result.list})
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
      };

      deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        })
        .then((sucess) => {
            alert('Playlist deletada com sucesso!')
            this.pegarPlaylists()
        })
        .catch((error) => {
            alert('Tente Novamente!')
        })
      };

    render() {
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
            <CardPlaylist 
                key={playlist.id}
                onClick={() => this.props.irParaDetalhe(playlist)}>
                    {playlist.name}
                    <Del onClick={() => this.deletarPlaylist(playlist.id)}> X </Del>
            </CardPlaylist>
            );
        });

        return (
            <div>
                <CriarPlaylist atualizarPlaylist={this.pegarPlaylists}/>
                <h2>Suas playlists</h2>
                <Container>
                    {listaPlaylists}
                </Container>
            </div>
        )
    }
};

export default VisualizarPlaylists;