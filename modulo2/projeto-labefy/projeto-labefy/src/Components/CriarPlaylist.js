import axios from "axios";
import React from "react";
import styled from "styled-components";

const ContainerCria = styled.div`
text-align: center;
padding-top: 50px;
padding-bottom: 50px;
background-color: #0a0708;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
`

const Titulo1 = styled.h1`
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Titulo2 = styled.h3`
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Input = styled.input`
height: 25px;
width: 250px;
border-radius: 10px;
border: solid #204132 1px;
text-align: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Button = styled.button`
height: 30px;
width: 80px;
margin-left: 8px;
border-radius: 10px;
cursor: pointer;
background-color: #9f99c4;
color: white;
border: none;
transition: all 0.5s ease-in-out;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
&:hover {
    background-color: #563771;
}
`

class CriarPlaylist extends React.Component {
    state = {
        playlist: ''
    };

    handlePlaylist = (event) => {
        this.setState({playlist: event.target.value})
    };

    fazerPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlist
        };

        axios.post(url, body, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        })
        .then((sucess) => {
            alert('Playlist criada com sucesso!')
            this.setState({playlist: ''})
            this.props.atualizarPlaylist()
        })
        .catch((error) => alert(error.response.data.message))
    };
    

    render() {
        return(
            <ContainerCria>
                <Titulo1>SarahFy</Titulo1>
                <Titulo2>Crie suas playlists aqui!</Titulo2>
                <Input
                placeholder='Criar Playlist'
                value={this.state.playlist}
                onChange={this.handlePlaylist}
                />
                <Button onClick={this.fazerPlaylist}>Criar</Button>
            </ContainerCria>
        )
    }
};

export default CriarPlaylist;