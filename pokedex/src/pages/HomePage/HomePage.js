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
    const [newOffSet , setNewOffSet] = useState("")
    const [ offset, setOffset] = useState(0)
   
    

   useEffect(()=>{
    const url =`https://pokeapi.co/api/v2/pokemon/?limit=28&offset=${offset}`
    axios.get(url).then((res)=>{
        setDataPokemon(res.data.results)
        
        // console.log(res.data.results)
        
    }).catch((err)=>{
        console.log(err.response)
    })

   } ,[offset])

   const addPoke = (id)=>{
    const addPoke20 = offset + id;
    setOffset(addPoke20)
    setNewOffSet(String(offset))
    console.log(offset)
   }
 
   const mapearPokemon = dataPokemon.map((pokemons)=>{
        return <div key={pokemons.name}>
            <HomePageComponent
             pokemonsName={pokemons.name}/>
            
            </div>
        
   })

    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <ContainerHome1>
            {mapearPokemon}
            <button onClick={()=>addPoke(30)}>Proximo</button>
            <button onClick={()=>addPoke(-30)}>Anterior</button>
           
            </ContainerHome1>
        </div>
    )
}
export default HomePage