import React from 'react';
import './CardGrande.css';
import styled from 'styled-components';

const BigCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardTitulo = styled.h4`
    margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <BigCardContainer className="bigcard-container">
            <BigCardImg src={ props.imagem } />
            <div>
                <BigCardTitulo>{ props.nome }</BigCardTitulo>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;