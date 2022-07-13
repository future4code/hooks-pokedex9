import React from "react";
import { HeaderStyled , PokedexImg } from "./headerStyled";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Router/Coordinator";
import Pokedex from '../../img/pokedex.png'



const Header = () =>{
const navigate=useNavigate()
    return(
        <HeaderStyled>
            <h1>Lista de Pokemon</h1>
            <div>
               <PokedexImg onClick={()=> goToPokedex(navigate)} src={Pokedex} alt="Pokedex"/>
            </div>
        </HeaderStyled>
    )
}

export default Header