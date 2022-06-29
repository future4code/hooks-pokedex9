import React from "react";
import styled from "styled-components";

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
    justify-content: space-around;
`
const PokeSkills = styled.div`
    background: rgb(241, 241, 241);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`
const DetailsPage = () => {
    

    return (
        <>
        <TopBar>
                <button>Voltar</button>
                <h3>Pikachu</h3>
                <button>Add/Remover da Poke</button>
        </TopBar>
        
        <PageContainer>
            <PokePhotoContainer>
                <PhotoPoke src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                <PhotoPoke src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"/>
            </PokePhotoContainer>
            <PokePowers>
                <h2>Poderes</h2>
                <p>HP: 35</p>
                <p>ATTACK: 55</p>
                <p>DEFENSE: 40</p>
                <p>SPECIAL-ATTACK: 50</p>
                <p>SPECIAL-DEFENSE: 50</p>
                <p>SPEED: 90</p>
            </PokePowers>
            <PokeMore>
                <PokeType>
                    <p>type: eletric</p>    
                    <p>weight: 60</p>    
                </PokeType>
                <PokeSkills>
                    <h2>Principais Ataques</h2>
                    <p>mega-punch</p>
                    <p>pay-day</p>
                    <p>thunder-punch</p>
                    <p>tail-whip</p>
                    <p>growl</p>
                </PokeSkills>
            </PokeMore>
        </PageContainer>
        </>
    )

}


export default DetailsPage
