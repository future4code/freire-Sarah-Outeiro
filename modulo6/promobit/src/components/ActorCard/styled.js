import styled from "styled-components"

export const Card = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 191px;
    height: 330px;
    -webkit-box-shadow: 3px 3px 4px 0px rgba(50, 50, 50, 0.25);
    -moz-box-shadow:    3px 3px 4px 0px rgba(50, 50, 50, 0.25);
    box-shadow:         3px 3px 4px 0px rgba(50, 50, 50, 0.25);
`

export const Photo = styled.img`
    width: 175px;
    height: 222px;
    border-radius: 4px;
    padding: 8px 8px 16px 8px;
`

export const Name = styled.p`
    margin: 0 0 0 8px;
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 8px;
`

export const Character = styled.p`
    margin: 0 0 0 8px;
    padding-bottom: 16px;
    max-width: 174px;
`