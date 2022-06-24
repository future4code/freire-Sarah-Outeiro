import axios from "axios";
import React from "react";

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
            <div>
                <input 
                placeholder='Criar Playlist'
                value={this.state.playlist}
                onChange={this.handlePlaylist}
                />
                <button onClick={this.fazerPlaylist}>Criar</button>
            </div>
        )
    }
};

export default CriarPlaylist;