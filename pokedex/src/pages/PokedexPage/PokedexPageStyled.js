import styled from "styled-components";


export const HeaderPokedex = styled.header`
    
    align-items: center;
    height: 6em;
    background-color: #38abed ;
    max-width: 100vw;
    color: yellow;
    font-family: 'Bebas Neue', cursive;
    font-size: medium;
    margin: 0 auto;
    height: 105px;
    display: flex;
    justify-content: space-between;
    

`
export const Titulo = styled.h2`
    color: white;
    font-family: cursive;
    font-size: 24px;
    margin: 65px;
`    
export const ButtonBack = styled.button`
    display: flex;
    font-family: cursive;
    padding: 10px;
    background-color: #1273DE;  
    &:hover{ background: white}
    &:hover{color: #1273DE};
    color  : white ;
    border-radius: 15px;
    border: 1px solid black;
    cursor: pointer;
    margin:5px;
    :hover{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
    }
`

export const Footer = styled.footer`
    min-height: 100vh;
    min-width: 100vw;
    background-color: #fff;
`