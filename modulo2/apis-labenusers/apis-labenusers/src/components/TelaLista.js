import axios from "axios";
import React from "react";

class TelaLista extends React.Component{
    state = {
        listaUsuarios: []
    };

    mostrarUsuarios = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        }).then((response) => {
            this.setState({listaUsuarios: response.data})
        }).catch((error) => {
            alert('Error')
        })
    }

    deletarUsuario = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: "sarah-outeiro-freire"
            }
        }).then((response) => {
            alert('Deletado com Sucesso')
            this.mostrarUsuarios()
        }).catch((error) => {
            alert('Não foi possível deletar usuário')
        })
    }

    componentDidMount() {
        this.mostrarUsuarios()
    }

    render() {
        const listaUsuarios = this.state.listaUsuarios.map((usuario) => {
            return (
                <p key={usuario.id}>
                    {usuario.name}
                    <span 
                        className='deletar'
                        onClick={() => this.deletarUsuario(usuario.id)}>
                        X
                    </span>
                </p>
            )
        })
        return(
            <div>
                <ul>{listaUsuarios}</ul>
            </div>
        )
    }
}

export default TelaLista;