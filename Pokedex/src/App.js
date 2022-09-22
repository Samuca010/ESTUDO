import React, { useState } from "react";
import Routers from "./Rotas/Routers";
import { StyleContainer } from "./style";
import GlobalState from "./context/GlobalState";

function App() {

const [pokemon, setPokemon] = useState([])

  return (
    <StyleContainer>
     <GlobalState>
       <Routers/>
     </GlobalState>
    </StyleContainer>
  );
}

export default App;
