import styled from "styled-components";

export const Container = styled.div`
    margin-top: 150px;
`

export const BoxMatch = styled.div`
    background-color: #ebcfd4;
    height: auto;
    width: 450px;
    margin: 0 auto;
`
export const CaixaMatches = styled.div`
height: 70vh;
overflow-y: scroll;
`
export const Titulo = styled.div`
    height: 60px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
    img {
        height: 150px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom: 15px;
    }
    button {
        position: absolute;
        left: 20px;
    }
`

export const Perfil = styled.div`
    display: flex;
    padding: 20px;
`

export const Foto = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${props => props.img});
    margin-right: 10px;
`