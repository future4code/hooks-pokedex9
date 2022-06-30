
import styled from "styled-components";

export const TopBar = styled.div`
    height: 8vh;
    background: rgb(48, 167, 215);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    position: relative;
`

export const PageContainer = styled.div`
    background: rgb(241, 241, 241);
    padding: 15px;
    display: flex;
    justify-content: center;
    
`

export const PokePhotoContainer = styled.div`
align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
export const PhotoPoke = styled.img`
    height: 25vh;
    width: 25vh;
    background: rgb(241, 241, 241);

`
export const PokePowers = styled.div`
    background: rgb(241, 241, 241);
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;

`
export const PokeMore = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`
export const PokeType = styled.div`
    background: rgb(241, 241, 241);
    height: 10%;
    display: flex;
    justify-content: space-around;
`
export const PokeSkills = styled.div`
    background: rgb(241, 241, 241);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
`
