import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { TopBar , PageContainer , PokePowers , PokePhotoContainer , PhotoPoke , PokeMore,PokeType,PokeSkills } from "./DetailsStyled";
import usePokemonsDetails from '../../customHook/usePokemonsDetails'
import useColorPoke from "../../customHook/useColorPoke";


const CardPoke = styled.div`
border: 10px solid black;
height: 80vh;
width: 70vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.color};
`
const CardPokeContainer = styled.div`
border: 2px solid black;
height: 90%;
width: 90%;
background-color: white;

`
const CardTituloPokeContainer = styled.div`
border-bottom: 1px solid black;
height: 10%;
width: 100%;
position: relative;
text-align:center;
`
const CardImagePokeContainer = styled.div`
display: flex;
justify-items: center;
align-items: center;
flex-direction: column;
/* padding: 20px; */
height: 40%;
width: 100%;
background-color: white;
border-bottom: 1px solid black;

`
const CardImagePokeSrc = styled.img`
width: 250px;
height: 250px;
`

const CardHabilidade = styled.div`
display: flex;
justify-content: space-around;

`

const CardGridHab = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
height: 20%;
gap:20%;
`

const LI = styled.li`
list-style: none;
`


const DetailsPage = (props) => {
const navigate = useNavigate("")
const params = useParams("")
const [corPoke] = useColorPoke(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`)

const [name , abilities , stats , type , photoFront , photoBack ] = usePokemonsDetails(`https://pokeapi.co/api/v2/pokemon/${params.id}`)

const renderHabilidade = abilities && abilities.map((hab) => {
    return (<p>{hab.ability.name.toUpperCase()}</p>)
})
const renderStats = stats && stats.map((value,index) => {
    return (<LI>{value.stat.name.toUpperCase()}: {value.base_stat}</LI>)  
  
})

const renderType = type && type.map((typ) => {
    return (<LI>{typ.type.name.toUpperCase()}</LI>)
})
console.log(corPoke) /////////////////////////////////////////////////////////

    return (
        <>
        <TopBar>
                <button onClick={() => navigate("/")}>Voltar</button>
                <h3>{name}</h3>
                <button>Add/Remover da Poke</button>
        </TopBar>
        
        <PageContainer>
        
            {/* <PokePhotoContainer>
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
            </PokeMore> */}

            <CardPoke color={corPoke}   >
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
                    
                    <p><b>HABILIDADES</b></p>
                    {renderHabilidade} 
                    
                    </CardHabilidade>
                        <CardGridHab>
                        <div>
                        <p>Status</p>   
                        <div> {renderStats}</div>
                        </div>
                            <div>

                            <p>Tipo</p>
                            <div>{renderType}</div>
                            </div>
                        </CardGridHab>
                    </CardPokeContainer>

            </CardPoke>


            
        </PageContainer>
        </>
    )

}


export default DetailsPage


