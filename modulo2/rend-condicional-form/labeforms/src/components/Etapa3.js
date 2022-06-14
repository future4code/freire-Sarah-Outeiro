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

class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                 <div>
                    <Titulo>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Titulo>
                </div>
                <div>
                    <Formulario>
                        <label htmlFor="pq"> 1. Por que você não terminou um curso de graduação? </label>
                        <Input type="text" id="pq" name="pq"/>

                        <label htmlFor="complementar"> 1. Você fez algum curso complementar? </label>
                        <Select id="complementar" name="complementar">
                            <option value="nenhum">Nenhum</option>
                            <option value="fiz">Fiz</option>
                        </Select>
                    </Formulario>
                </div>    
            </div>
        )
    }
}

export default Etapa3;