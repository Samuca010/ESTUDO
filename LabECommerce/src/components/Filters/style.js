import styled from "styled-components";

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 70vh;
    margin-left: 10px;
    padding: 5px;
    align-items: center;
    margin-top: 10px;
    box-shadow: 2px 2px 5px 2px Lightgray;
    border-radius: 5px;
    font-size: 0.8rem;
    
    > div > input {
        border-radius: 5px;
        height: 25px;
        box-shadow: 2px 2px 5px 2px Lightgray;
        border-width: 1px;
    }

    > select > option{
        border-radius: 2px;
        height: 25px;
        box-shadow: 2px 2px 5px 2px Lightgray;
        border-width: 1px;
        background-color:white;

    }

 
`

export const InputsContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 80%;

    h2{
        text-align:center;
    }
    
`

export const Inputs = styled.input` 
    margin: 2%;
`

