import styled from "styled-components"

export const Div = styled.div`
    padding-left: 150px;
    @media (max-width: 500px) {
        padding-left: 15px;
    }
`

export const TrailerTitle = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #131313;
    margin: 0;
    padding-bottom: 24px;
    @media (max-width: 500px) {
        padding-left: 8px;
        padding-bottom: 10px;
    }
`

export const Video = styled.img`
    width: 907px;
    height: 510px;
    padding-bottom: 64px;
    @media (max-width: 500px) {
        width: 324px;
        height: 182px;
        padding-bottom: 30px;
    }
`