import React from "react";
import { StyleCard } from "../CardPokemon/style";

function CardPokedex(props) {
    
  return (
    <StyleCard>
      <img src={props.url} alt="Imagem do Pokemon"></img>
      <p>{props.nomePokemon}</p>
      {props.buttonRemove}
      {props.buttonView}
      
    </StyleCard>
  );
}

export default CardPokedex;
