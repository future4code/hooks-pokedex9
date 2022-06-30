import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LogoPoke from "./LogoPoke"
import { TopBar , PageContainer , PokePowers , PokePhotoContainer , PhotoPoke , PokeMore,PokeType,PokeSkills } from "./DetailsStyled";
import usePokemonsDetails from '../../customHook/usePokemonsDetails'

const DetailsPage = () => {
    
const navigate = useNavigate("")
const params = useParams("")

    const [name , abilities , stats , type , photoFront , photoBack ] = usePokemonsDetails(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

const renderHabilidade = abilities && abilities.map((hab) => {
    return (<li>{hab.ability.name.toUpperCase()}</li>)
})

const renderStats = stats && stats.map((sta) => {
    return (<li>{sta.stat.name.toUpperCase()}: {sta.base_stat}</li>  
    )
})

const renderType = type && type.map((typ) => {
    return (<li>{typ.type.name.toUpperCase()}</li>)
})


    return (
        <>
        <TopBar>
                <button onClick={() => navigate("/")}>Voltar</button>
                <h3>{name}</h3>
                <button>Add/Remover da Poke</button>
        </TopBar>
        
        <PageContainer>
            <PokePhotoContainer>


                
                <PhotoPoke src={photoFront}/>
                <PhotoPoke src={photoBack}/>
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
