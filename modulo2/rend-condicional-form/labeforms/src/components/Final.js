import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
text-align: center;
`
const SubTitulo = styled.p`
text-align: center;
`

class Final extends React.Component{
    render(){
        return(
            <div>
                <Titulo>{this.props.titulo}</Titulo>
                <SubTitulo>{this.props.subTitulo}</SubTitulo>
            </div>
        )
    }
}

export default Final