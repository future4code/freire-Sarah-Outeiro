import styled from "styled-components"

export const Div = styled.div`
    padding-left: 150px;
    padding-right: 115px;
    padding-bottom: 400px;
    @media (max-width: 500px) {
        padding-left: 15px;
        padding-right: 15px;
    }
`

export const RecomTitle = styled.p`
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

export const RecomList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 32px;
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 32px;
    }
`