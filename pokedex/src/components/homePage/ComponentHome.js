import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerHome, DivButton, Logo } from './homeStyled'
import { navigate, useNavigate } from "react-router-dom";
import useRequestData from "../../customHook/useRequestData";
import PokedexPage from "../../pages/PokedexPage/PokedexPage";
import usePokemonsDetails from "../../customHook/usePokemonsDetails";
import useColorPoke from "../../customHook/useColorPoke";


const HomePageComponent = (props) => {
    const [pokePhoto, photo1] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.indexPoke}`)
    
    const [corPoke] = useColorPoke(`https://pokeapi.co/api/v2/pokemon-species/${props.indexPoke}`)
    const navigate = useNavigate("")
    
//=========CORES DOS CARDS POKEMON==============
    // useEffect(()=>{
    //     const url = ` https://pokeapi.co/api/v2/pokemon-species/${props.indexPoke}`

    //     axios.get(url).then((res)=>{
    //         setCorPoke(res.data.color.name)
    //         console.log(res.data.color.name)
    //     }).catch((err)=>{
    //         console.log(err.response)
    //     })
    // },[])
//=========CORES DOS CARDS POKEMON==============
    const logos = 
        {
            url: pokePhoto,
            hoverUrl: photo1,
            color : corPoke
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