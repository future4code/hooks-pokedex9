
import styled from "styled-components";
import BackgroundPoke from '../../img/backgroundpoke.png'



export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background-image: url(${BackgroundPoke});


  
`
export const CardPoke = styled.div`
/* background-color: ${props => props.color}; */

/* background-color: green; */
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
border: 10px solid black;
border-radius:20px ;
height: 80vh;
width: 25em;

 
`
export const CardPokeContainer = styled.div`
border: 2px solid black;
border-radius: 40px;
height: 90%;
width: 90%;
background-color:  #e5e5e5;

`
export const CardTituloPokeContainer = styled.div`
border-bottom: 1px solid black;
height: 10%;
width: 100%;
position: relative;
text-align:center;

`
export const CardImagePokeContainer = styled.div`
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
/* padding: 20px; */
height: 40%;
width: 100%;
background-color:   #e5e5e5;
border-bottom: 1px solid black;

`
export const CardImagePokeSrc = styled.img`
width: 12em;
height: 12em;
  @media (max-width: 480px){
         height: 10em;
         width: 10em
      }
`

export const CardHabilidade = styled.div`
display: flex;
justify-content: space-around;

`

export const CardGridHab = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
height: 20%;
gap: 30%;
`

export const LI = styled.li`
font-size: 0.8em;
list-style: none;

`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    background-color: ${props => props.color};
    position: relative;
    width: 100%;
`