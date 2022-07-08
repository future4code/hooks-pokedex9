import  styled from "styled-components"


export const ContainerHome = styled.div`
   border: 1px solid black;
   padding: 10px;
   width: 20vw;
   text-align: center;
   background-color: ${props => props.color};
   margin: 15px;
   
   @media (max-width: 480px){
  
   width: 40vw;
   gap: 20px;
   height: auto;
}

`
export const DivButton = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
   

`


   export  const Logo = styled.img`

      background: ${props => `url(${props.background})`} no-repeat;
      height: 6em;
      width: 6em;
      &:hover {
        background: ${props =>
          `url(${props.hoverBackground}) `}; 
       
      }
    `;

export const TestandoHei = styled.div`
   height: 100%;
   max-height: auto;
   
  


`
