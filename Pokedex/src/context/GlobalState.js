import React, { useState } from "react";
import  GlobalStateContext  from "./GlobalStateContext";

function GlobalState(props) {
  
    const [pokemomPokedex, setPokemomPokedex] = useState([]);

    return(
        <GlobalStateContext.Provider value={{pokemomPokedex, setPokemomPokedex}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
  
}
export default GlobalState;