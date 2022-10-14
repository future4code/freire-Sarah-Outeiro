import styled from "styled-components"

export const TitleContainer = styled.div`
    background-color: #2D0C5E;
    @media (max-width: 500px) {
        padding: 16px;
    }
`

export const Title = styled.h1`
    color: #FFF;
    font-size: 48px;
    text-align: center;
    width: 781px;
    margin: 0 auto;
    padding-top: 85px;
    padding-bottom: 40px;
    @media (max-width: 500px) {
        font-size: 24px;
        text-align: left;
        width: 285px;
        padding-top: 34px;
        padding-bottom: 36px;
        margin: 0;
    }
`