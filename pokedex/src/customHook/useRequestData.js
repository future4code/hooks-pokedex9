import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";

const useRequestData = (url) =>{
    const [pokeDados , setPokeDados] = useState([])
    const [photo , setPhoto] = useState("")
    const [photo1 , setPhoto1] = useState("")
    // const [pokemonShini ,  setPokemonShini] = useState("")
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setPokeDados(res.data)
            setPhoto( res.data.sprites.front_default)
            setPhoto1(res.data.sprites.back_default)
            // setPokemonShini(res.data.sprites.front_shiny)
        }).catch((err)=>{
            console.log(err.response)
        })
    },[url])
    return([photo, photo1 ,pokeDados])
}

export default useRequestData