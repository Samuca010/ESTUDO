import React, {useContext} from "react";
import { StyleCard } from "../CardPokemon/style"
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
// import GlobalStateContext from "../../context/Context"
import  GlobalStateContext  from "../../context/GlobalStateContext";

function CardPokemon(props) {
    const navigate = useNavigate();
    const detailsPage = (id) => {
        navigate("/details/" + id);
    };

    const [data, isLoading] =
        useRequestData(`${props.url}`);
   
    const { pokemomPokedex, setPokemomPokedex } = useContext(GlobalStateContext);

    function addPokedex(id, data) {
        const newPokemonPokedex = [...pokemomPokedex];
       
        const existePokemon =
          pokemomPokedex &&
          pokemomPokedex.some((item) => {
            return id === item.id;
          });
       
        if (existePokemon) {
          alert(`O pokemon ${data.name} já esta na Pokedex`);
        } else {
          newPokemonPokedex.push({
            id,
            nome: data.name,
            photo: data.sprites.other.dream_world.front_default,
            stats: data.stats,
          });
        }
        setPokemomPokedex(newPokemonPokedex);
        localStorage.setItem("pokedex", JSON.stringify(pokemomPokedex));
        console.log(localStorage.getItem("pokedex"));
         }

    return (
        <StyleCard>
            <img src={!isLoading && data && data.sprites.other.home.front_default} alt="Imagem do Pokemon"></img>
            <p>{props.namePokemom}</p>
            <button onClick={() => addPokedex(data.id, data)}>Add to Pokedex</button>
            <button onClick={() => detailsPage(data.id)}>View Details</button>
        </StyleCard>
    )
}

export default CardPokemon;