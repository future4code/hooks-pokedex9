import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {ContainerHome , DivButton } from './homeStyled'
import { navigate, useNavigate } from "react-router-dom";

const HomePageComponent = (props)=>{
    const [pngPoke , setPngPoke] = useState([])
    
    const navigate = useNavigate("")

    useEffect((id)=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${props.indexPoke}`
 
         axios.get(url).then((res)=>{
            setPngPoke(res.data.sprites.front_default)
           console.log(res.data)
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
            <button onClick={()=> navigate (`${props.pokemonsName}`)}  >Ver Detalhes</button>
            <button>adicionar</button>
            </DivButton>
            
           </ContainerHome>
           
        </div>
    )
}
export default HomePageComponent