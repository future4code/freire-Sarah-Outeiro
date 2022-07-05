import axios from "axios";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`
const Titulo = styled.h3`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 30px;
margin-top: 50px;
`

const Nome = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
const Inputs = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const Input = styled.input`
height: 25px;
width: 280px;
border-radius: 10px;
border: solid #204132 1px;
text-align: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin: 5px;
`
const Button = styled.button`
height: 30px;
width: 280px;
border-radius: 10px;
border: none;
margin: 10px;
transition: all 0.5s ease-in-out;
background-color: #563771;
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
&:hover {
    background-color: black;
}
cursor: pointer;
`
class Detalhes extends React.Component {
    state = {
        musicas: [],
        novaMusica: '',
        novoArtista: '',
        novoLink: ''
    };

    componentDidMount() {
        this.pegarMusicas(this.props.passarIdPlaylist.id)
    }

    pegarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        })
        .then((sucess) => {
            this.setState({musicas: sucess.data.result.tracks})
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    };

    adicionaMusica = (event) => {
        this.setState({novaMusica: event.target.value})
    };

    adicionaArtista = (event) => {
        this.setState({novoArtista: event.target.value})
    };

    adicionaLink = (event) => {
        this.setState({novoLink: event.target.value})
    };

    enviaMusica = () => {
        const id = this.props.passarIdPlaylist.id
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.novaMusica,
            artist: this.state.novoArtista,
            url: this.state.novoLink
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        })
        .then((sucess) => {
            alert('Música adicionada com sucesso!')
            this.setState({
                novaMusica: '',
                novoArtista: '',
                novoLink: ''
            })
            this.pegarMusicas(this.props.passarIdPlaylist.id)
        })
        .catch((erro) => {
            alert('Algo deu errado. Tente Novamente.')
        })
    };

    render() {
        const renderizaMusicas = this.state.musicas.map((musica) => {
            return (
            <div>
                <Nome key={musica.id}>{musica.name}</Nome>
                <audio controls>
                <source src={musica.url} type="audio/mp3"/>
                </audio>
            </div>
            )
        })

        return(
            <Container>
                <Titulo>{this.props.passarIdPlaylist.name}</Titulo>
                {renderizaMusicas}
                <Inputs>
                    <Input 
                    placeholder='nome da música'
                    value={this.state.novaMusica}
                    onChange={this.adicionaMusica}/>
                    <Input  placeholder='nome do artista'
                    value={this.state.novoArtista}
                    onChange={this.adicionaArtista}/>
                    <Input placeholder='link da música'
                    value={this.state.novoLink}
                    onChange={this.adicionaLink}/>
                </Inputs>
                <Button
                    onClick={() => this.enviaMusica()}>Adicionar música na playlist
                </Button>
                <Button 
                    onClick={() => this.props.voltarHome()}>
                    Voltar
                </Button>
            </Container>
        )
    }
};

export default Detalhes;