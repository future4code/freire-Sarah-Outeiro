import styled from "styled-components"

export const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 48px;
    padding: 29px 112px;
    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 29px 16px;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
        padding: 29px 16px;
    }
`