import axios from "axios";
import React from "react";

class TelaUsuarios extends React.Component {
    state = {
        listaUsuarios: []
    }

    componentDidMount() {
        this.pegarListaUsuarios()
    }

    pegarListaUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios.get(url, {
            headers: {
                Authorization:'sarah-outeiro-freire'
            }
        }).then ((sucesso) => {
            this.setState({listaUsuarios: sucesso.data})
        }).catch ((erro) => {
            console.log(erro)
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        axios.delete(url, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        }).then((sucesso) => {
            alert('Usuário deletado com sucesso!')
            this.pegarListaUsuarios()
        }).catch((erro) => {
            alert('Ocorreu um erro, tente novamente.')
        })
    }

    render() {
        const renderUsuarios = this.state.listaUsuarios.map((usuario) => {
            return <p key={usuario.id}>
                {usuario.name}
                <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                </p>
        })
        return(
            <div>
                <h2>Lista de Usuários</h2>
                {renderUsuarios}
                <button onClick={this.props.irParaCadastro}>Cadastro</button>
            </div>
        )
    }
}

export default TelaUsuarios;