import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalStateDetails } from '../../global/GlobalStateDetails'
import { goBack } from '../../Router/Coordinator'
import {
  ButtonBack,
  ButtonsPokedex,
  CardContainer,
  ContainerHome,
  Background,
  DivButtons,
  DivImage,
  Name
} from './PokedexPageStyled'
import { HeaderStyled } from '../../components/header/headerStyled'


const PokedexPage = props => {
  const navigate = useNavigate('')
  const { states, requests } = useContext(GlobalStateDetails)
  const { pokedex } = states
  const { removePokemon } = requests
 
  const mapPokedex =
    pokedex &&
    pokedex.map((poke, index) => {
      return (
        <CardContainer key={index}>
          <DivImage src={poke.sprites.other.dream_world.front_default} />
          <Name>{poke.name}</Name>
          <DivButtons>
            <ButtonsPokedex onClick={()=>removePokemon(poke)}>Deletar</ButtonsPokedex>
            <ButtonsPokedex
              onClick={() => {
                navigate(`/${poke.name}`)
              }}
            >
              Detalhes
            </ButtonsPokedex>
          </DivButtons>
        </CardContainer>
    
      )
    })

  return (
    <>
      <Background>
      <HeaderStyled>
        <h1>POKEDEX</h1>

        <ButtonBack onClick={() => goBack(navigate)}>Voltar</ButtonBack>
      </HeaderStyled>

      <ContainerHome>
        <div>

        {mapPokedex}
        </div>
        </ContainerHome>
        
      </Background>
    </>
  )
}

export default PokedexPage
