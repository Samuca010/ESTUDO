import React from "react";
import { AddToCartButton, Card, NameAndPrice, ProductImage } from "./style";


export function ProductCard ({ addToCart, name, price, image }){
    
    return(
        <>
            <Card>
                <ProductImage src={image}/>
                    <NameAndPrice>
                        <p>{name}</p>
                        <p>R${price}</p>
                    </NameAndPrice>
                    <AddToCartButton onClick={() => addToCart(name, price)}>Adicionar ao Carrinho</AddToCartButton>
            </Card>
        </>
    )
}