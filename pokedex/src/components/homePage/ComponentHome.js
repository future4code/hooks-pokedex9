import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {ContainerHome , DivButton } from './homeStyled'
import { navigate, useNavigate } from "react-router-dom";
import useRequestData from "../../customHook/useRequestData";
import PokedexPage from "../../pages/PokedexPage/PokedexPage";


const HomePageComponent = (props)=>{
    const [pokePhoto ] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.indexPoke}`)
    const navigate = useNavigate("")
   

   const addToPokedex = (name) =>{
    if(name === props.pokemonsName){
        <PokedexPage photoPoke = {pokePhoto}/>
    }else{
        return false
    }

   }
   
  

    // const getColor = (id)=>{
    //     const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`
    //     axios.get(url).then((res)=>{
    //         setColor(res.data.color.name)
    //     }).catch((err)=>{
    //         console.log(err.response)
    //     })
    // }
    return(
        <div>
           <ContainerHome value={"color"}>
            <img src={pokePhoto}/>
            <p>{props.pokemonsName.toUpperCase()}</p>
            <DivButton>
            <button onClick={()=> navigate (`${props.pokemonsName}`)}  >Ver Detalhes</button>
            <button onClick={() =>addToPokedex(props.pokemonsName)}>adicionar</button>
            </DivButton>
            
           </ContainerHome>
           
        </div>
    )
}
export default HomePageComponent