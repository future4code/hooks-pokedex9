import styled from "styled-components"
export const ContainerHome = styled.div`
   display: inline-block;
   border: 1px solid black;
   padding: 30px;
   width: 20vw;
   text-align: center;
   background-color: ${(props) => props.color};
`
export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`