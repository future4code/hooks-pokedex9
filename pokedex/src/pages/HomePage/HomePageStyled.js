import styled from "styled-components";


export const ContainerHome1 = styled.div`
    display: grid;
    grid-template-columns: repeat(4,25vw);
    width: 100vw;
    height: auto;
    /* background-color: ${props => props.color || " 	#778899" }; */

    @media (max-width: 480px){
        display: grid;
        grid-template-columns: repeat(2,50vw);
        width: 100vw;
        height: auto;
    }
`