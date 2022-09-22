import React, { useState } from "react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import { StyleButtonHome, StyleHome } from "./style";
import icone2 from "../../img/icons_proximo.png"
import icone3 from "../../img/icons_anterior.png"
import * as MyRouters from "../../Rotas/Coodinator"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const title = "Lista de Pokemons";
  const [newPage, setNewPage] = useState(BASE_URL)
  const [data, isLoading, erro] = useRequestData(newPage);
  const ListPkemom =
    !isLoading &&
    data && data.results.map((item) => {
      return (
        <CardPokemon key={item.id} namePokemom={item.name} url={item.url} idPokemom={item.id} />
      );
    });
    
  const [quantifyList, setQuantifyList] = useState(20)

  function next() {
    setQuantifyList(quantifyList + 20)
    return (
      setNewPage(`${BASE_URL}?offset=${quantifyList}&limit=20`)
    )
  }
  function back() {
    setQuantifyList(quantifyList - 20)
    return (
      setNewPage(`${BASE_URL}?offset=${quantifyList}&limit=20`)
    )
  }
  
  function begin() {
    setQuantifyList(0)
    return (
      setNewPage(`${BASE_URL}?offset=${quantifyList}&limit=20`)
    )
  }

  return (
    <>
       <Headers title={title} button={<button onClick={()=>MyRouters.goToPokedex(navigate)}>Pokedex </button>} />
      <StyleHome>
        {isLoading && <h3>Carregando...</h3>}
        {!isLoading && data && ListPkemom}
        {!isLoading && !data && erro}
      </StyleHome>
      <StyleButtonHome>
        <button onClick={begin}><img src={icone3} alt="Botão início"></img> BEGIN</button>
        <button onClick={back}><img src={icone3} alt="Botão voltar"></img> BACK</button>
        <button onClick={next}>NEXT <img src={icone2} alt="Botão avançar"></img></button>
      </StyleButtonHome>
    </>
  );
}
export default Home;
