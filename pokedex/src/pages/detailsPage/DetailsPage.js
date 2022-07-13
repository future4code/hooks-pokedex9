import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TopBar , PageContainer, CardPoke, CardPokeContainer, CardTituloPokeContainer, CardImagePokeContainer, CardHabilidade, CardGridHab, LI, CardImagePokeSrc } from "./DetailsStyled";
import usePokemonsDetails from '../../customHook/usePokemonsDetails'
import useColorPoke from "../../customHook/useColorPoke";
import setaEsquerda from '../../img/seta-esquerda.png'
import adicionar from '../../img/adicionar.png'



const DetailsPage = (props) => {


const navigate = useNavigate("")
const params = useParams("")


const [name , abilities , stats , type , photoFront  ] = usePokemonsDetails(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

const renderHabilidade = abilities && abilities.map((hab) => {
    return (<p>{hab.ability.name.toUpperCase()}</p>)
})
const renderStats = stats && stats.map((value) => {
    return (<LI>{value.stat.name.toUpperCase()}: {value.base_stat}</LI>
    )  
})
//t
const renderType = type && type.map((typ) => {
    return (<LI>{typ.type.name.toUpperCase()}</LI>)
})


    return (
        <>        
        <PageContainer>
            <CardPoke>
                {/* testePOKE */}
                <CardPokeContainer>
                    {/* detalhes */}
                    <CardTituloPokeContainer>
                        <h1>{name}</h1>
                    </CardTituloPokeContainer>

                    <CardImagePokeContainer>
                        <CardImagePokeSrc src={photoFront}/>
                    </CardImagePokeContainer>
                    <CardHabilidade>
                    
                        <p><b>HABILIDADES:</b></p>
                        {renderHabilidade} 
                    
                    </CardHabilidade>
                        <CardGridHab>
                            <div>
                            <p><b>Status</b></p>   
                            <div> {renderStats}</div>
                        </div>
                        
                            <div>
                                <p><b>Tipo</b></p>
                                <div>
                                    {renderType}
                                </div>
                            </div>
                        </CardGridHab>

                    </CardPokeContainer>
                    <TopBar>
                        <img onClick={() => navigate("/")} src={setaEsquerda} alt="Voltar"/>

                        <img src={adicionar} alt="Adicionar"/>
                    </TopBar>
            </CardPoke>
            

          
        </PageContainer>
        </>
    )

}


export default DetailsPage


