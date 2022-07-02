import axios from "axios";
import { useEffect, useState } from "react";


const useColorPoke = (url) =>{
    const [data , setData] = useState("")

    useEffect(()=>{
        //  url = ` https://pokeapi.co/api/v2/pokemon-species/${props.indexPoke}`

        axios.get(url).then((res)=>{
            setData(res.data.color.name)
            
        }).catch((err)=>{
            console.log(err.response)
        })
    },[data])
    return([data])
}

export default useColorPoke