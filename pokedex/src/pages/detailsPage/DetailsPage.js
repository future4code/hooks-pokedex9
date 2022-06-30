import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LogoPoke from "./LogoPoke"

const TopBar = styled.div`
    height: 8vh;
    background: rgb(48, 167, 215);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    position: relative;
`

const PageContainer = styled.div`
    background: rgb(241, 241, 241);
    padding: 15px;
    display: flex;
    justify-content: center;
    
`

const PokePhotoContainer = styled.div`
align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
const PhotoPoke = styled.img`
    height: 25vh;
    width: 25vh;
    background: rgb(241, 241, 241);
`
const PokePowers = styled.div`
    background: rgb(241, 241, 241);
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;

`
const PokeMore = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
const PokeType = styled.div`
    background: rgb(241, 241, 241);
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`
const PokeSkills = styled.div`
    background: rgb(241, 241, 241);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`

//////////////////////////////////////////////////////////////////


const DetailsPage = () => {
    
const navigate = useNavigate("")
const params = useParams("")

const [nome , setNome] = useState([])
const [habilidade, setHabilidade] = useState([])
const [stats, setStats] = useState([])
const [tipo, setTipo] = useState([])
const [fotoFrente, setFotoFrente] = useState([])
const [fotoCosta, setFotoCosta] = useState([])
const [shinyFrente, setShinyFrente] = useState([])

useEffect((id)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    
    axios.get(url).then((res)=>{
        setNome(res.data.name.toUpperCase())
        setHabilidade(res.data.abilities)
        setStats(res.data.stats)
        setTipo(res.data.types)
        setFotoFrente(res.data.sprites.front_default)
        setFotoCosta(res.data.sprites.back_default)
        setShinyFrente(res.data.sprites.front_shiny)
    }).catch((err)=>{
        console.log(err.response)
    })
}, [nome])

const renderHabilidade = habilidade && habilidade.map((hab) => {
    return (<li>{hab.ability.name.toUpperCase()}</li>)
})

const renderStats = stats && stats.map((sta) => {
    return (<li>{sta.stat.name.toUpperCase()}: {sta.base_stat}</li>  
    )
})

const renderType = tipo && tipo.map((typ) => {
    return (<li>{typ.type.name.toUpperCase()}</li>)
})


    return (
        <>
        <TopBar>
                <button onClick={() => navigate("/")}>Voltar</button>
                <h3>{nome}</h3>
                <button>Add/Remover da Poke</button>
        </TopBar>
        
        <PageContainer>
            <PokePhotoContainer>


                
                <PhotoPoke src={fotoFrente}/>
                <PhotoPoke src={fotoCosta}/>
            </PokePhotoContainer>
            <PokePowers>
                <h2>Estatísticas</h2>
                {renderStats}

            </PokePowers>
            <PokeMore>
                <PokeType>
                    <h2>Tipo</h2>
                    {renderType}
                        
                </PokeType>
                <PokeSkills>
                    <h2>Habilidades Principais</h2>
                    {renderHabilidade}
                
                </PokeSkills>
            </PokeMore>
        </PageContainer>
        </>
    )

}


export default DetailsPage
