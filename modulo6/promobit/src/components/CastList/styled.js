import styled from "styled-components"

export const Container = styled.div`
    margin-left: 150px;
    padding-top: 100px;
    margin-right: 110px;
    @media (max-width: 500px) {
        margin: 0;
        padding: 30px 15px 0 15px;
    }
`

export const Cast = styled.p`
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

export const ActorCards = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: scroll;
    padding-bottom: 85px;
`