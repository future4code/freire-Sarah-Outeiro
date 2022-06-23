import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component {
    state = {
        name: '',
        email: ''
    };

    onChangeNome = (event) => {
        this.setState({name: event.target.value})
    };

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    };

    enviarCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post(url, body, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
        }}).then((sucesso) => {
            alert('Cadastro feito com sucesso!')
            this.setState({name: '', email: ''})
        }).catch((erro) => {
            alert(erro.data.response.message)
        })
    }

    render() {
        return(
            <div>
                <h2>Cadastro</h2>
                <input 
                    placeholder='Name'
                    value={this.state.name}
                    onChange={this.onChangeNome}
                />
                <input 
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
                <button onClick={this.enviarCadastro}> Enviar </button>
                <button onClick={this.props.irParaLista}>Lista de Usuários</button>
            </div>
        )
    }
}

export default TelaCadastro;