import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import TestandoLogo from "../Teste/testehover";

const usePokemonsDetails = (url) =>{
    const [name , setName] = useState(undefined)
    const [abilities, setAbilities] = useState(undefined)
    const [stats, setStats] = useState(undefined)
    const [type, setType] = useState(undefined)
    const [photoFront, setPhotoFront] = useState(undefined)
    const [photoBack, setPhotoBack] = useState(undefined)
 
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setName(res.data.name.toUpperCase())
            setAbilities(res.data.abilities)
            setStats(res.data.stats)
            setType(res.data.types)
            setPhotoFront(res.data.sprites.front_default)
            setPhotoBack(res.data.sprites.back_default)
           
        }).catch((err)=>{
            console.log(err.response)
        })
    },[url])
    
    return(
    
        [name , abilities , stats , type , photoFront , photoBack]
       
        )

}

export default usePokemonsDetails