import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerHome, DivButton, Logo, TestandoHei } from './homeStyled'
import { navigate, useNavigate } from "react-router-dom";
import detalhes from '../../img/detalhes.png'
import adicionar from '../../img/adicionar.png'
import useRequestData from "../../customHook/useRequestData";
import useColorPoke from "../../customHook/useColorPoke";
import GlobalStyle from "../../GlobalStyled";
import PokedexPage from "../../pages/PokedexPage/PokedexPage";
import { GlobalStateDetails } from "../../global/GlobalStateDetails";


const HomePageComponent = (props) => {
    const { states,requests } = useContext(GlobalStateDetails);

    const {detailsPokemon} = requests
    const {photoHome , photoHomeBack } = states 

    // const [pokePhoto, photo1] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.pokemonsName}`)
    const [corPoke] = useColorPoke(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonsName}`)
    const navigate = useNavigate("")
    const [pokedex , setPokedex] = useState({})
    
    useEffect(()=>{
        detailsPokemon(`${props.pokemonsName}`)
    },[])
    console.log(props.pokemonsName)
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
   
    

    // const addPokedex = () =>{
    //     const addInPokedex = {
    //         pokeName :props.pokemonsName,
    //         photoPoke : photo1,
    //         pokeCor : corPoke,
    //     }
        
    //     setPokedex({...addInPokedex , quantity:1})
    //     console.log(pokedex)
      
    // }
  
   
//=========CORES DOS CARDS POKEMON==============
    const logos = 
        {
            photoP: photoHome,
            hoverUrl: photoHomeBack,
            color : corPoke
        }
       
    return (
        <TestandoHei > 
            <ContainerHome color={logos.color}     >
                    <Logo               
                    background={logos.photoP} 
                    hoverBackground={logos.hoverUrl}/>
                    <p>{props.pokemonsName.toUpperCase()}</p>
                    <DivButton>
                        <img onClick={() => navigate(`${props.pokemonsName}`)}  src={detalhes}/>
                        <img src={adicionar}/>
                        {/* <button onClick={() => addPokedex(props.pokeName)}> ver</button> */}
                    </DivButton>
            
            </ContainerHome>
        
           
        </TestandoHei>
     
    )
}
export default HomePageComponent