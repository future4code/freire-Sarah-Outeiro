import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component{
    state = {
        nome: '',
        email: ''
    };

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    enviarInfos = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'sarah-outeiro-freire'
            }
        }).then((response) => {
            alert('Cadastro Enviado com Sucesso!')
        }).catch((error)=> {
            alert('Epa! Seu cadastro deu erro!')
        })
    }

    render() {
        return(
            <div>
                <h2>Cadastre-se Aqui!</h2>
                <input placeholder="Nome Completo" value={this.state.nome} onChange={this.onChangeNome}/>
                <input placeholder="E-mail" value={this.state.email} onChange={this.onChangeEmail}/>
                <button onClick={this.enviarInfos}>Enviar</button>
            </div>
        )
    }
}

export default TelaCadastro;