import React from "react";
import { HeaderStyled } from "./headerStyled";


const Header = () =>{
    return(
        <HeaderStyled>
            <h1>Lista de Pokemon</h1>
            <div>
                <button>Pokedex</button>
            </div>
        </HeaderStyled>
    )
}

export default Header