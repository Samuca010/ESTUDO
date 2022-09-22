import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import CardPokedex from "../../components/CardPokedex/CardPokedex";
import { Background } from "./style";
import Headers from "../../components/Headers/Headers"
import * as  MyRouters from "../../Rotas/Coodinator"

function Pokedex() {
  const title = "Pokedex";
  const navigate = useNavigate()

  const detailsPage = (id) => {
    navigate("/details/" + id);
  };
  const { pokemomPokedex, setPokemomPokedex } = useContext(GlobalStateContext);

  const removePokemon = (data) => {
    const newPokemonPokedex = [...pokemomPokedex];
    const pokemonIndex = pokemomPokedex.findIndex((item) => item.id === data.id);
    newPokemonPokedex.splice(pokemonIndex, 1);
    setPokemomPokedex(newPokemonPokedex);
  }

  const ListPkemon =
    pokemomPokedex.map((item) => {
      return (
        <CardPokedex key={item.id} namePokemom={item.nome} url={item.photo}
          buttonRemove={<button onClick={() => { removePokemon(item) }}>Remover</button>}
          buttonView={<button onClick={() => detailsPage(item.id)}>View Details</button>} />
      );

    });

  return (
    <>
      <Headers title={title}
        button={<button onClick={() => MyRouters.goToHome(navigate)}>Home</button>}
      />
      <Background>
        {ListPkemon}
      </Background>
    </>
  );
}

export default Pokedex;