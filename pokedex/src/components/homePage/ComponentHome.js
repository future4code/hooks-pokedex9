import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {ContainerHome , DivButton} from './homeStyled'

const HomePageComponent = (props)=>{
    const [pngPoke , setPngPoke] = useState("")


    useEffect((id)=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${props.indexPoke}`
 
         axios.get(url).then((res)=>{
            setPngPoke(res.data.sprites.front_default)
           
         }).catch((err)=>{
             console.log(err.response)
         })
    }, [pngPoke])
    
   
    return(
        <div>
           <ContainerHome>
            <img src={pngPoke}/>
            <p>{props.pokemonsName}</p>
            <DivButton>
            <button >Ver Detalhes</button>
            <button>adicionar</button>
            </DivButton>
            
           </ContainerHome>
           
        </div>
    )
}
export default HomePageComponent