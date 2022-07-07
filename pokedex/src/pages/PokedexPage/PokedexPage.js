import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateDetails } from "../../global/GlobalStateDetails"
import { goBack, goToDetail } from "../../Router/Coordinator"
import { ButtonBack, Footer, HeaderPokedex, Titulo } from "./PokedexPageStyled"

const PokedexPage = (props)=>{
  const navigate = useNavigate("")
  const {states} = useContext(GlobalStateDetails)
  const { pokedex} = states


 
  const mapPokedex = pokedex && pokedex.map((poke, index)=>{
    return(
      <div key={index}>
        {poke.name}
        <img src={poke.sprites.other.dream_world.front_default}/>

      </div>
    )
  })

  return(
    <div>
     <div>
     <HeaderPokedex>
      <Titulo>POKEDEX</Titulo>
      <ButtonBack onClick={()=> goBack(navigate)}>Voltar</ButtonBack>
     
      <ButtonBack onClick={()=> goToDetail(navigate)}>Pagina Detalhes</ButtonBack>
     
      </HeaderPokedex>
     </div>
    {mapPokedex}
    
      
      
    </div>
  )
}

export default PokedexPage