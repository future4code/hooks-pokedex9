import  styled from "styled-components"
export const ContainerHome = styled.div`
   display: inline-block;
   border: 1px solid black;
   padding: px;
   width: 20vw;
   text-align: center;
   background-color: ${props => props.color};
    
`
export const DivButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`


   export  const Logo = styled.img`
      background: ${props => `url(${props.background})`};
      
      height: 6em;
      width: 6em;
      &:hover {
        background: ${props =>
          `url(${props.hoverBackground}) `};
      
        
       
      }
    `;
