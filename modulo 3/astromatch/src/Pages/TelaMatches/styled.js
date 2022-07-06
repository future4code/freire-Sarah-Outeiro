import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
`

export const BoxMatch = styled.div`
    background-color: #F4E1D4;
    height: auto;
    width: 450px;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 10px;
`
export const CaixaMatches = styled.div`
    height: 70vh;
    overflow-y: scroll;
`
export const Titulo = styled.div`
    height: 70px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`

export const Voltar = styled.img`
    position: absolute;
    left: 20px;
    height: 30px;
    cursor: pointer;
`

export const Logo = styled.img`
    margin-top: 25px;
    height: 200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 15px;
    cursor: pointer;
`


export const Perfil = styled.div`
    display: flex;
    padding: 30px;
    color: #e54356;
`

export const Foto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${props => props.img});
    margin-right: 20px;
`