import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import TestandoLogo from "../Teste/testehover";
import { GlobalStateDetails } from "./GlobalStateDetails";

const GlobalState = (props) =>{
    const [name , setName] = useState(undefined)
    const [abilities, setAbilities] = useState(undefined)
    const [stats, setStats] = useState(undefined)
    const [type, setType] = useState(undefined)
    const [photoFront, setPhotoFront] = useState(undefined)
    const [photoBack, setPhotoBack] = useState(undefined)
    const [pokedex,setPokedex ]= useState([])

    const detailsPokemon = (id) =>{
        const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)

        axios.get(url).then((res)=>{
            setName(res.data.name.toUpperCase())
            setAbilities(res.data.abilities)
            setStats(res.data.stats)
            setType(res.data.types)
            setPhotoFront(res.data.sprites.other.dream_world.front_default)
            setPhotoBack(res.data.sprites.other.dream_world.back_default)
           
           
        }).catch((err)=>{
            console.log(err.response)
        })

    }
    
    const color2 = "grey"
    const addInPokedex = (product)=>{
       const index = pokedex.findIndex((pokemonsInPokedex)=>{
        if(pokemonsInPokedex.name === product.name){
            return true
        }else{
            return false
        }
       })
       if(index === -1){
        const newPokedex = [...pokedex , product]
        setPokedex(newPokedex)
       }else{
        alert("Pokemon ja foi adicionado")
       }
      console.log(pokedex)
    }
    

    const removePokemon = (pokemon)=>{
        const newPokedex = [...pokedex]
        const index = newPokedex.findIndex ((url, index)=>{
            if(url.url === pokemon){
                return index
            }
        })

        newPokedex.splice (index, 1)
        setPokedex(newPokedex)
    }

 

    const states= {name , abilities , stats , type , photoFront , photoBack , pokedex}
    const requests = {detailsPokemon , addInPokedex, removePokemon}
    return(
    <GlobalStateDetails.Provider value={{states , requests}}>
      {props.children}
    </GlobalStateDetails.Provider>
    )

};

export default GlobalState