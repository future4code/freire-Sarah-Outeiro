import styled from "styled-components"

export const Container = styled.div`
    background-color: #2D0C5E;
    height: 580px;
    width: 100%;
    @media (max-width: 500px) {
        height: auto;
    }
`

export const TitleContainer = styled.div`
    padding-top: 72px;
    display: grid;
    grid-template-columns: 35% 65%;
    column-gap: 30px;
    margin-left: 150px;
    max-width: 1100px;
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        max-width: 328px;
        justify-content: center;
        margin: 0 auto;
        padding-top: 40px;
    }
`

export const Poster = styled.div`
    text-align: center;
    @media (max-width: 500px) {
        padding-bottom: 40px;
    }
    img {
        width: 383px;
        height: auto;
        border-radius: 8px;
        box-shadow: 10px 5px 5px black;
        -webkit-box-shadow: 3px 3px 4px 0px rgba(50, 50, 50, 0.25);
        -moz-box-shadow:    3px 3px 4px 0px rgba(50, 50, 50, 0.25);
        box-shadow:         3px 3px 4px 0px rgba(50, 50, 50, 0.25);
        @media (max-width: 500px) {
            width: 185px;
            height: auto;
        }
    }
`

export const MovieText = styled.div`
    color: white;
    p {
        margin: 0;
        padding-top: 8px;
    }
`

export const MovieName = styled.p`
    margin: 0;
    font-size: 32px;
    font-weight: 700;
`

export const MovieSubtitle = styled.p`
    margin: 0;
    padding-top: 8px;
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 500px) {
        max-width: 328px;
    }
`

export const Avaliacao = styled.div`
    padding-top: 16px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        padding-top: 31px;
        padding-bottom: 31px;
    }
    img {
        width: 60px;
        height: 60px;
        margin-right: 11px;
    }
    p {
        margin: 0;
        padding: 0;
        font-size: 16px;
        max-width: 102px;
        font-weight: 400;
    }
`

export const Sinopse = styled.p`
    font-size: 20px;
    font-weight: 700;
    padding-bottom: 8px;
    @media (max-width: 500px) {
        padding-bottom: 16px;
    }
`

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #DDDDDD;
    padding-bottom: 24px;
    @media (max-width: 500px) {
        padding-bottom: 33px;
    }
`

export const DatasheetDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 40px;
    }
`