import React from "react";
import { HeaderStyled } from "./headerStyled";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Router/Coordinator";



const Header = () =>{
const navigate=useNavigate()
    return(
        <HeaderStyled>
            <h1>Lista de Pokemon</h1>
            <div>
                <button onClick={()=> goToPokedex(navigate)}>Pokedex</button>
            </div>
        </HeaderStyled>
    )
}

export default Header