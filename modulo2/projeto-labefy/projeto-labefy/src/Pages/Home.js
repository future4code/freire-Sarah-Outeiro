import React from "react";
import VisualizarPlaylists from "../Components/VisualizarPlaylists";

class Home extends React.Component {

    capturarPlaylistClicada = (playlist) => {
        this.props.mandarIdHome(playlist)
    }

    render() {
        return(
            <div>
                <VisualizarPlaylists irParaDetalhe={this.capturarPlaylistClicada}/>
            </div>
        )
    }
}

export default Home;