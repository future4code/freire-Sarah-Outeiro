import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
text-align: center;
`

const Formulario = styled.form`
display: flex;
flex-direction: column;
text-align: center;
`

const Input = styled.input`
width: 200px;
margin: 0 auto;
margin-bottom: 10px;
`

class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Titulo>ETAPA {this.props.etapa} - {this.props.titulo}</Titulo>
                </div>
                <div>
                    <Formulario>
                        <label htmlFor="curso"> 1. Qual curso? </label>
                        <Input type="text" id="curso" name="curso"/>

                        <label htmlFor="unidade"> 2. Qual a unidade de ensino? </label>
                        <Input type="text" id="unidade" name="unidade"/>
                    </Formulario>
                </div>
            </div>
        )
    }
}

export default Etapa2;