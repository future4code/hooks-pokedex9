import axios from "axios";
import React from "react";
import { useState , useEffect } from "react";

const useRequestData = (url) =>{
    const [data , setData] = useState(undefined)
    const [photo , setPhoto] = useState("")
    const [photo1 , setPhoto1] = useState("")
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
            setPhoto( res.data.sprites.front_default)
            setPhoto1(res.data.sprites.back_default)
        }).catch((err)=>{
            console.log(err.response)
        })
    },[url])
    return([photo, photo1 , data])
}

export default useRequestData