import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import HomePageComponent from '../../components/homePage/ComponentHome'
import { ContainerHome1 } from "./HomePageStyled";

import styled from "styled-components";
import GlobalStyle from "../../GlobalStyled";

const HomePage = ()=>{
    return(
        <div>
            <GlobalStyle/>
            <Header/>
            <ContainerHome1>
            <HomePageComponent/>
            <HomePageComponent/>
            <HomePageComponent/>
            <HomePageComponent/>
            <HomePageComponent/>
            <HomePageComponent/>

            </ContainerHome1>
           

           

        </div>
    )
}
export default HomePage