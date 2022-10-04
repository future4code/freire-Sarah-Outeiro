import styled from "styled-components"

export const HomePageDiv = styled.div`
    margin-top: 50px;
    text-align: center; 
    img {
        height: 500px;
    }
    p {
        color: #231F20;
        margin-top: -100px;
        margin-bottom: 100px;
        font-size: 20px;
    }
`

export const BotaoStart = styled.button`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

&:after {
    content: "";
    background-color: #E54F24;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
    border-radius: 50px;
}

&:hover:after {
    top: 0px;
    left: 0px;
}
`