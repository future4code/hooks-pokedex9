import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerHome, DivButton, Logo } from './homeStyled'
import { navigate, useNavigate } from "react-router-dom";
import useRequestData from "../../customHook/useRequestData";
import PokedexPage from "../../pages/PokedexPage/PokedexPage";
import usePokemonsDetails from "../../customHook/usePokemonsDetails";



const HomePageComponent = (props) => {
    const [pokePhoto, photo1] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.indexPoke}`)
    const navigate = useNavigate("")
    const color ={
        azul :  "#191970",
        bb : "#6495ED"
    }

    //    const addToPokedex = (name) =>{
    //     if(name === props.pokemonsName){
    //         console.log(name)
    //     }else{
    //         return false
    //     }

    //    }
    const logos = 
        {
            url: pokePhoto,
            hoverUrl: photo1,
            color : color.bb
        }
  
    return (
        <div >
            <ContainerHome color={logos.color}     >
                    <Logo               
                    background={logos.url} 
                    hoverBackground={logos.hoverUrl}/>
                    <p>{props.pokemonsName.toUpperCase()}</p>
                    <DivButton>
                        <button onClick={() => navigate(`${props.pokemonsName}`)}  >Ver Detalhes</button>
                        <button>adicionar</button>
                    </DivButton>
            </ContainerHome>
        </div>
      
    )
}
export default HomePageComponent