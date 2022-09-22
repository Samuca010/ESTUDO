import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding-top:10px;
    margin-top:10px;
    margin-left:40px;
    width: 15vw;
    height: 46vh;
    box-shadow: 2px 2px 5px 2px Lightgray;
    text-align: center;
    align-items:center;
    will-change: transform;
    transition: transform 450ms;
    background-color: white;
    border-radius:10px;
    > img {
        width: 100%;
    }
    > button {
        &:hover {
            cursor: pointer;
        }
    }
    &:hover {
        transition: transform 125ms;
        transform: translateY(-10px);
    }

`

export const ProductImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 60%;
    margin-top: 1%;
`

export const NameAndPrice = styled.div`

`

export const AddToCartButton = styled.button` 
    width: fit-content;
    align-self: center;
    border-radius:10px;
`