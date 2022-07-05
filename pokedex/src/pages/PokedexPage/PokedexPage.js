import { useNavigate } from "react-router-dom"
import { goBack, goToDetail } from "../../Router/Coordinator"
import { ButtonBack, Footer, HeaderPokedex, Titulo } from "./PokedexPageStyled"

const PokedexPage = (props)=>{
  const navigate = useNavigate("")
  const name = props
  return(
    <div>

    <HeaderPokedex>
      <Titulo>POKEDEX</Titulo>
      <ButtonBack onClick={()=> goBack(navigate)}>Voltar</ButtonBack>
      {name}
      <ButtonBack onClick={()=> goToDetail(navigate)}>Pagina Detalhes</ButtonBack>
      
      </HeaderPokedex>
      <Footer/>
    </div>
  )
}

export default PokedexPage