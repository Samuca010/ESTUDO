import React from "react";
import { FiltersContainer, Inputs, InputsContainer } from "./style";



export function Filters ({ filterByName, setFilterByName, minPrice, setMinPrice, maxPrice, setMaxPrice, sortinParameter, setSortingParameter }) {
    
    return(
        <FiltersContainer>
            <InputsContainer>
                <h2>Filtrar:</h2>
                
                <Inputs 
                    placeholder="Pesquisa por nome"
                    value={filterByName}
                    onChange={(event) => {setFilterByName(event.target.value)}}
                />
                <Inputs 
                    placeholder="Pesquisa por preço mínimo"
                    type="number"
                    value={minPrice}
                    onChange={(event) => {setMinPrice(event.target.value)}}
                />
                <Inputs 
                    placeholder="Pesquisa por preço máximo"
                    type="number"
                    value={maxPrice}
                    onChange={(event) => {setMaxPrice(event.target.value)}}
                />
            </InputsContainer>
                <label for="sortingParameter"><h2>Ordenar por:</h2></label>
            
                <select
                    value={sortinParameter}
                    onChange={(event) =>{setSortingParameter(event.target.value)}}
                >
                    <option value={"title"}>Ordem Alfabética</option>
                    <option value={"crescente"}>Menor Preço</option>
                    <option value={"decrescente"}>Maior Preço</option>
                </select>
        </FiltersContainer>
    )
}

