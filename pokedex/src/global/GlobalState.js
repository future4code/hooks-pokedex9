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
    const [photoHome, setPhotoHome] = useState("")
    const [photoHomeBack , setPhotoHomeBack] = useState("")

    const detailsPokemon = (id) =>{
        const url = (`https://pokeapi.co/api/v2/pokemon/${id}`)
        axios.get(url).then((res)=>{
            setName(res.data.name.toUpperCase())
            setAbilities(res.data.abilities)
            setStats(res.data.stats)
            setType(res.data.types)
            setPhotoFront(res.data.sprites.other.dream_world.front_default)
            setPhotoBack(res.data.sprites.other.dream_world.back_default)
            setPhotoHome( res.data.sprites.front_default)
            setPhotoHomeBack(res.data.sprites.back_default)
           
        }).catch((err)=>{
            console.log(err.response)
        })

    }
    
    const states= {name , abilities , stats , type , photoFront , photoBack , photoHome , photoHomeBack }
    const requests = {detailsPokemon}
    return(
    <GlobalStateDetails.Provider value={{states , requests , detailsPokemon}}>
      {props.children}
    </GlobalStateDetails.Provider>
    )

};

export default GlobalState