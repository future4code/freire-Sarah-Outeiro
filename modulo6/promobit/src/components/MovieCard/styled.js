import styled from "styled-components"

export const MovieContainer = styled.div`
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover{
        opacity: 70%;
    }
`
export const MoviePoster = styled.img`
    margin: 0;
    width: 100%;
    height: auto;
`
export const MovieName = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    padding-top: 8px;
`
export const MovieDate = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    padding-top: 8px;
    color: #646464;
`