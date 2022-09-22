import React from "react";
import { ImageCardDetails } from "./styleCardImages";

function CarImages(props) {
  return (
    <div>
      <ImageCardDetails>
        <img src={props.dataPokemom.sprites.other.dream_world.front_default} alt="pokemom" />
        <img src={props.dataPokemom.sprites.back_shiny} alt="pokemom" />
      </ImageCardDetails>
    </div>
  );
}
export default CarImages;
