import React from "react";
import GlobalState from "./global/GlobalState";

import GlobalStyle from "./GlobalStyled";
import HomePage from "./pages/HomePage/HomePage";
import Routes from "./Router/Router";
import TestandoLogo from "./Teste/testehover";


function App() {
  return (
    <GlobalState>
      <GlobalStyle/>
     <Routes/>
     
    </GlobalState>
  );
}

export default App;
