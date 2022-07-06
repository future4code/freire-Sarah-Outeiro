import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
`

export const BoxMatch = styled.div`
    background-color: #F4E1D4;
    height: auto;
    width: 450px;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 10px;
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
export const Logo = styled.img`
    margin-top: 30px;
    height: 200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 15px;
    cursor: pointer;
`

export const People = styled.img`
    margin-top: 10px;
    position: absolute;
    right: 20px;
    height: 30px;
    cursor: pointer;
`

export const Perfis = styled.div`
    padding: 20px;
`
export const Foto = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url(${props => props.img});
    -webkit-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    -moz-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
    h3 {
        position: absolute;
        top: 580px;
        padding-left: 20px;
        color: white;
        text-shadow: -1px 0px 16px #000000;
    }
    p {
        position: absolute;
        top: 610px;
        width: 360px;
        padding-left: 20px;
        color: white;
        text-shadow: -1px 0px 16px #000000;
        font-size: 15px;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 10px;
    padding-bottom: 30px;
    img {
        height: 50px;
    }
`