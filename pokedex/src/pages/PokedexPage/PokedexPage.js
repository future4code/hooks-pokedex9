import { useNavigate } from "react-router-dom"
import { goBack, goToDetail } from "../../Router/Coordinator"
import { ButtonBack, Footer, HeaderPokedex, Titulo } from "./PokedexPageStyled"

const PokedexPage = ()=>{
  const navigate = useNavigate()
  return(
    <div>

    <HeaderPokedex>
      <Titulo>POKEDEX</Titulo>
      <ButtonBack onClick={()=> goBack(navigate)}>Voltar</ButtonBack>

      <ButtonBack onClick={()=> goToDetail(navigate)}>Pagina Detalhes</ButtonBack>
      
      </HeaderPokedex>
      <Footer/>
    </div>
  )
}

export default PokedexPage