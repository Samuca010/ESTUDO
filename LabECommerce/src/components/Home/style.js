import styled from "styled-components";

export const Main = styled.div` 
    display: flex;
    flex-direction: row;
`

export const ProductsContainer = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  background-color: whitesmoke;
` 