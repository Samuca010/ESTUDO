import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { Filters } from '../Filters/Filters';
import { ProductCard } from '../ProductCard/ProductCard';
import { Main, ProductsContainer } from './style';
import { Products } from "../../data";

function Home() {
  const [productsOnCart, setProductsOnCart] = useState([])
  const [filterByName, setFilterByName] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [totalValue, setTotalValue] = useState(0)


  function addToCart (name, price) {
    const checkForProductOnCart = productsOnCart.filter((product) =>{
      if (product.name === name){
        return product
      } else {
        return false
      }
    })

    let newCart = [...productsOnCart]
    

    if (checkForProductOnCart.length === 0){
      newCart = [...newCart, {name: name, price: price, quantity: 1}]
      localStorage.setItem("carrinho", JSON.stringify(newCart)) 
      setProductsOnCart(newCart) 

    } else {

      const newC = productsOnCart.map((product) =>{
        if(product.name === name){
          return {...product, quantity: product.quantity + 1}
        } else {
          return product
        }
      })

      setProductsOnCart(newC) 
      localStorage.setItem("carrinho", JSON.stringify(newC)) 
    }

    
    addTotalValue(price)


  }

  function addTotalValue (price) {
    setTotalValue(totalValue + price)
    localStorage.setItem("valorCompra", JSON.stringify(totalValue + price))
  }

  function removeTotalValue (price) {
    setTotalValue(totalValue - price)
    localStorage.setItem("valorCompra", JSON.stringify(totalValue - price))
  }

  const removeProductFromCart = (product) =>{
    if (product.quantity === 1){
      const newCart = productsOnCart.filter((item) =>{
        if (item.name !== product.name){
          return product
        } else {
          return false
        } 
      })
      setProductsOnCart(newCart)
      localStorage.setItem("carrinho", JSON.stringify(newCart)) 
      
    } else {
      const newCart = productsOnCart.map((item) => {
        if (product.name === item.name && item.quantity >=1){
          return {...item, quantity: item.quantity -1}
        } else {
          return item
        }
      })
      setProductsOnCart(newCart)
      localStorage.setItem("carrinho", JSON.stringify(newCart)) 
    }

    removeTotalValue(product.price)
  }


  return (
    <Main>
      <Filters 
        filterByName={filterByName}
        setFilterByName={setFilterByName}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}
      />
  
      <ProductsContainer>
        {Products
          .filter((product) => {
            return product.name.toLowerCase().includes(filterByName)
          })
          .filter((product) => {
            return product.price >= minPrice || minPrice === ""
          })
          .filter((product) => {
            return product.price <= maxPrice || maxPrice === ""
          })
          .sort((currentValue, nextValue) => {
            switch(sortingParameter){
              case "crescente":
                return currentValue.price - nextValue.price
              case "decrescente":
                return nextValue.price - currentValue.price
              case "title":
                return currentValue.name.localeCompare(nextValue.name)
              default:
                return currentValue.name.localeCompare(nextValue.name)
            }
          }) 
          .map((product) =>{
            return <ProductCard key={product.name}
                        addToCart={addToCart}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        
                    />
          })}
      </ProductsContainer>
      
      <Cart 
        productsOnCart={productsOnCart} 
        totalValue={totalValue} 
        removeProductFromCart={removeProductFromCart} 
      />
  
    </Main>
  );
}

export default Home;
