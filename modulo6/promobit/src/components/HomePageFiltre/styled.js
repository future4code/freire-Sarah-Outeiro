import styled from "styled-components"


export const FiltreTitle = styled.p`
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    padding-bottom: 16px;
    @media (max-width: 500px) {
        text-align: left;
        padding-bottom: 8px;
    }
`

export const GenreContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    max-width: 1050px;
    margin: 0 auto;
    padding-bottom: 84px;
    @media (max-width: 500px) {
        justify-content: left;
        padding-bottom: 40px;
    }
`