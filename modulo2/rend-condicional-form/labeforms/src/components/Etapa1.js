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
const Select = styled.select`
width: 210px;
height: 25px;
margin: 0 auto;
margin-bottom: 10px;
margin-top: 5px;
text-align: center;
`



class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Titulo>ETAPA 1 - DADOS GERAIS</Titulo>
                </div>
                <div>
                    <Formulario>
                        <label htmlFor="name"> 1. Qual o seu nome? </label>
                        <Input type="text" id="name" name="name"/>

                        <label htmlFor="idade"> 2. Qual sua idade? </label>
                        <Input type="text" id="idade" name="idade"/>

                        <label htmlFor="email"> 3. Qual o seu e-mail? </label>
                        <Input type="text" id="email" name="email"/>

                        <label htmlFor="escolaridade"> 1. Qual a sua escolaridade? </label>
                        <Select id="escolaridade" name="escolaridade">
                            <option value="etapa1">Ensino superior completo</option>
                            <option value="etapa2">Ensino superior incompleto</option>
                        </Select>
                    </Formulario>
                </div>
            </div>
        )
    }
}

export default Etapa1;