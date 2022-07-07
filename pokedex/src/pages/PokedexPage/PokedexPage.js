import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalStateDetails } from '../../global/GlobalStateDetails'
import { goBack } from '../../Router/Coordinator'
import {
  ButtonBack,
  ButtonsPokedex,
  CardContainer,
  DivButtons,
  DivImage,
  Name
} from './PokedexPageStyled'
import { HeaderStyled } from '../../components/header/headerStyled'
import { ContainerHome1 } from '../HomePage/HomePageStyled'

const PokedexPage = props => {
  const navigate = useNavigate('')
  const { states } = useContext(GlobalStateDetails)
  const { pokedex } = states

  const mapPokedex =
    pokedex &&
    pokedex.map((poke, index) => {
      return (
        <CardContainer key={index}>
          <DivImage src={poke.sprites.other.dream_world.front_default} />
          <Name>{poke.name}</Name>
          <DivButtons>
            <ButtonsPokedex>Deletar</ButtonsPokedex>
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
      <HeaderStyled>
        <h1>POKEDEX</h1>

        <ButtonBack onClick={() => goBack(navigate)}>Voltar</ButtonBack>
      </HeaderStyled>
      <ContainerHome1>{mapPokedex}</ContainerHome1>
    </>
  )
}

export default PokedexPage
