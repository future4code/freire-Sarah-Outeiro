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
`
export const Logo = styled.img`
    height: 150px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 15px;
`

export const People = styled.img`
    position: absolute;
    right: 20px;
    height: 30px;
`

export const Perfis = styled.div`
    padding: 20px;
    img {
        width: 100%;
        border-radius: 20px;
        -webkit-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
        -moz-box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
        box-shadow: 10px 10px 34px -14px rgba(71,71,71,1);
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