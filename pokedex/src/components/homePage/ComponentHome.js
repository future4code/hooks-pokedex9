import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {ContainerHome , DivButton} from './homeStyled'

const HomePageComponent = ()=>{
  

    return(
        <div>
           <ContainerHome>
            <p>POKEMON</p>
            <DivButton>
            <button>Ver Detalhes</button>
            <button>adicionar</button>
            </DivButton>
            
           </ContainerHome>
        </div>
    )
}
export default HomePageComponent