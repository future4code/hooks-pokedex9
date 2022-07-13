import styled from 'styled-components'
import background from '../../img/backgroundPokedex.png'

export const HeaderPokedex = styled.header`
  align-items: center;
  height: 6em;
  background-color: #38abed;
  max-width: 100vw;
  color: yellow;
  font-family: 'Bebas Neue', cursive;
  font-size: medium;
  margin: 0 auto;
  height: 105px;
  display: flex;
  justify-content: space-between;
  
`

export const ButtonBack = styled.button`
  display: flex;
  font-family: cursive;
  padding: 10px;
  background-color: #1273de;
  &:hover {
    background: white;
  }
  &:hover {
    color: #1273de;
  }
  color: white;
  border-radius: 15px;
  border: 1px solid black;
  cursor: pointer;
  margin: 5px;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3em;
  margin-top: 2em;
  width: 20em;
  height: 20em;
  padding: 5px;
  background-color: #38abed;
  border: 1px black solid;
  border-radius: 8px;

`

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
 width: 100%;
 height: 100%;
 
`
export const Background = styled.div`
  background-color: blue;
`
export const DivImage = styled.img`
  width: 10em;
  height: 10em;
  padding: 0.5em;
  background-color: white;
  border-radius: 8px;
`
export const ButtonsPokedex = styled.button`
  display: flex;
  padding: 5px;
  background-color: #1273de;
  &:hover {
    background: white;
  }
  &:hover {
    color: #1273de;
  }
  color: white;
  border-radius: 15px;
  border: 1px solid black;
  font-family: cursive;
  cursor: pointer;
  margin: 3px;
`
export const DivButtons = styled.div`
  display: flex;
  padding: 5px;
`
export const Name = styled.strong`
  color: white;
  font-family: cursive;
  font-size: 20px;
`
