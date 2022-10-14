import styled from "styled-components"

export const TagBody = styled.div`
    background: ${props => props.selected ? "#D18000" : "white"};
    color: ${props => props.selected ? "#FFF" : "#323232"};
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 16px;
        height: auto;
        margin-left: 9px;
    }
`