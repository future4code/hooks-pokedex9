import { useNavigate } from "react-router-dom"
import { goBack, goToDetail } from "../../Router/Coordinator"
import { ButtonBack, Footer, HeaderPokedex, Titulo } from "./PokedexPageStyled"

const PokedexPage = (props)=>{
  const navigate = useNavigate("")
<<<<<<< HEAD

=======
>>>>>>> 3f2d44f5ec62ad6d925d13602059305691e8b07d
  return(
    <div>

    <HeaderPokedex>
      <Titulo>POKEDEX</Titulo>
      <ButtonBack onClick={()=> goBack(navigate)}>Voltar</ButtonBack>
<<<<<<< HEAD
=======
      
>>>>>>> 3f2d44f5ec62ad6d925d13602059305691e8b07d
      <ButtonBack onClick={()=> goToDetail(navigate)}>Pagina Detalhes</ButtonBack>
      
      </HeaderPokedex>
      <Footer/>
    </div>
  )
}

export default PokedexPage