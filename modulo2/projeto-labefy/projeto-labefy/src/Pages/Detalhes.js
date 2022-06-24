import axios from "axios";
import React from "react";

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
            return <p key={musica.id}>{musica.name}</p>
        })

        return(
            <div>
                <h3>{this.props.passarIdPlaylist.name}</h3>
                {renderizaMusicas}
                <input 
                placeholder='nome da música'
                value={this.state.novaMusica}
                onChange={this.adicionaMusica}/>
                <input placeholder='nome do artista'
                value={this.state.novoArtista}
                onChange={this.adicionaArtista}/>
                <input placeholder='link da música'
                value={this.state.novoLink}
                onChange={this.adicionaLink}/>
                <button
                    onClick={() => this.enviaMusica()}>Adicionar música na playlist</button>
                <button 
                    onClick={() => this.props.voltarHome()}>
                    Voltar
                </button>
            </div>
        )
    }
};

export default Detalhes;