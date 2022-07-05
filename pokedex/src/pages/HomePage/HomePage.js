import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import HomePageComponent from '../../components/homePage/ComponentHome'
import { ContainerHome1 } from "./HomePageStyled";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyled";
import TestandoLogo from "../../Teste/testehover";


const HomePage = (props)=>{
   const [dataPokemon , setDataPokemon] = useState([])

   useEffect(()=>{
    const url =" https://pokeapi.co/api/v2/pokemon/"

    axios.get(url).then((res)=>{
        setDataPokemon(res.data.results)
        // console.log(res.data.results)
        
    }).catch((err)=>{
        console.log(err.response)
    })

   } ,[])
   

   const mapearPokemon = dataPokemon.map((pokemons,index)=>{
        return <div key={index}>
            <HomePageComponent
             pokemonsName={pokemons.name} pokemon={pokemons}/>
            
            </div>
        
   })

    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <ContainerHome1>
            {mapearPokemon}
            </ContainerHome1>
        </div>
    )
}
export default HomePage