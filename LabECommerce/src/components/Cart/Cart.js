import React, { useEffect } from "react";
import { CartContainer, ProductOnCart } from "./style";



export function Cart ({ removeProductFromCart}) {
    
    useEffect(() =>{
        renderProductsOnCart()
        getTotalValue()
    }, )
    
    function getTotalValue(){
        const totalValueOnLocalStorage = Number(localStorage.getItem("valorCompra"))
        return totalValueOnLocalStorage
    }

    function renderProductsOnCart () {
        const productOnLocalStorage = JSON.parse(localStorage.getItem("carrinho"))
        
        
        const productsOnCartList = productOnLocalStorage && productOnLocalStorage.map((product) =>{

            return (
                <ProductOnCart key={product.name}>
                    <p>{product.quantity} - </p>
                    <p> {product.name}</p>
                    <p> R$ {product.price}</p>
                    <button onClick={() => removeProductFromCart(product)}>Retirar do carrinho</button>
                </ProductOnCart>
            )
        })

        return productsOnCartList
    }

    return(
        <CartContainer>
            <h2>Carrinho:</h2>
            {renderProductsOnCart()}
            <p><b>Valor total:{getTotalValue()}</b></p>
        </CartContainer>
    )
}