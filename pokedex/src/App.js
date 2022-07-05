import React from "react";
import GlobalStyle from "./GlobalStyled";
import HomePage from "./pages/HomePage/HomePage";
import Routes from "./Router/Router";
import TestandoLogo from "./Teste/testehover";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <Routes/>
     
    </div>
  );
}

export default App;
