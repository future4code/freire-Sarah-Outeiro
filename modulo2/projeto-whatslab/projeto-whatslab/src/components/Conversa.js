import React from "react";
import styled from "styled-components";

const BoxConversa = styled.div`
flex: 1 1 0%;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 20px;
`

class Conversa extends React.Component {

    render(){
        const listaMensagens = this.props.mensagens.map((mensagem) => {
            return (
                <p><b>{mensagem.nome} :</b> {mensagem.mensagem}</p>
            )
        })
        return (
            <BoxConversa>{listaMensagens}</BoxConversa>
        )
    }
}

export default Conversa;