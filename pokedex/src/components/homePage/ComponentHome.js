import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ContainerHome, DivButton, Logo, TestandoHei } from './homeStyled'
import { navigate, useNavigate, useParams } from "react-router-dom";
import detalhes from '../../img/detalhes.png'
import adicionar from '../../img/adicionar.png'
import useRequestData from "../../customHook/useRequestData";
import useColorPoke from "../../customHook/useColorPoke";
import GlobalStyle from "../../GlobalStyled";
import PokedexPage from "../../pages/PokedexPage/PokedexPage";
import { GlobalStateDetails } from "../../global/GlobalStateDetails";


const HomePageComponent = (props) => {
    const {states ,requests } = useContext(GlobalStateDetails); 
    
    const [pokePhoto, photo1 , pokeDados] = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.pokemonsName}`)
    

    const [corPoke] = useColorPoke(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonsName}`)
    const navigate = useNavigate("")
    const params = useParams()
    const {detailsPokemon , addInPokedex} = requests
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
            photoP: pokePhoto,
            hoverUrl: photo1,
            color : corPoke,
            color2 : "grey"
        }

        // console.log(pokeDados)
    return (
        <TestandoHei > 
          
            <ContainerHome color={logos.color}     >
                    <Logo               
                    background={logos.photoP} 
                    hoverBackground={logos.hoverUrl}/>
                    <p>{props.pokemonsName.toUpperCase()}</p>
                    {/* <p>{pokeDados.name}</p> */}
                    <DivButton>
                        <img onClick={()=> navigate(`${props.pokemonsName}`) } src={detalhes}/>
                        <img onClick={() =>addInPokedex(pokeDados) } src={adicionar} />
                        {/* <button onClick={() => addInPokedex(props.pokeName)}> ver</button> */}
                       
                    </DivButton>
            </ContainerHome>
       
           
        </TestandoHei>
     
    )
}
export default HomePageComponent