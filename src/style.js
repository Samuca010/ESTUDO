import styled from "styled-components";
import background from "../src/img/fundo.jpg"

export const Container = styled.body`  ///////////BACKGROUND "FLUTUANTE"
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-image:url(${background}) ;
    background-repeat: no-repeat;              
    background-size: 100% auto;
    background-position: center ;
    background-size: cover;
    background-attachment: fixed;
    color: whitesmoke;
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 15vw;
        padding: 0.5vw;
        margin: 2vw;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }     
`
//////////////////////////////////////////////////////////////////////////////////// HOME - ok
export const StyleHomeExt = styled.div`  
margin-top: 50px;
text-align:center ;
height: 100vh;
button{
        background-color: #7c1c17;
        font-size: medium;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }           
    :nth-child(1)img{
        height: 50%;
    }
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
        box-shadow: 0px 5px 0px 5px;
        border-radius: 5px;
        padding: 2vh;
    }
`
///////////////////////////////////////////////////////////////////////////////// PAINEL ADMIN - ok

export const StyleAdmin = styled.div`     
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2vh;
    text-align: center;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 20px;
    gap: 2vh;
    padding: 2vh;
    button:nth-child(2){                    //Detalhes
        color: whitesmoke;
        border-radius: 20px;
        width: 100px;
        
    }
    button:nth-child(3){                    //Delete
        color: whitesmoke;
        border-radius: 20px;
        width: 100px;       
    } 
 `
export const StyleListAdmin = styled.ul`  
    text-align: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;

`
export const StyleAdminExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-top: 20px;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    } 
`
/////////////////////////////////////////////////////////////////////////////// DETALHES

export const StyleTrip = styled.div`    
    display: grid;
    justify-content: space-around;
    gap: 2vh;
    padding: 2vh;
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 2px;
        margin: 5px;
        font-size: large;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }
`
export const StyleTripCand = styled.div`    
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 2px;
    width: 80%;
    button{
        background-color: #7c1c17;
        color: whitesmoke;
        border-radius: 20px;
        width: 80px;
        padding: 2px;
        margin: 5px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }
`
export const StyleTripExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
    justify-content: space-around;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }    
`
 ///////////////////////////////////////////////////////////////CRIAR VIAGEM & INSCREVA-SE -ok
export const StyleForm = styled.form`  
   margin: auto;
   height: 600px;
`
export const StyleFormExt = styled.form`   
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 880px;
    input{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
    select{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 20px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
`

///////////////////////////////////////////////////////////////////////////////////LOGIN - ok

export const StyleLoginExt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 900px;
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
    input{
        width: 500px;
        height: 30px;
        border-radius: 20px;
        text-align: center;
        margin: 20px;
    }      
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
`
///////////////////////////////////////////////////////////////////////////////////TRIPLIST - ok
export const StyleList = styled.div`    
   display: grid;
    justify-content: space-around;
    gap: 2vh;
    padding: 2vh;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 20px;
    text-align: center;
`
export const StyleListExt = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    margin-top: 20px;
    h1{
        font-style: italic;
        font-size: xxx-large;
        font-family: monospace;
    }
`
//////////////////////////////////////////////////////////////BOTOES
export const StyleButton = styled.div`
    button{
        background-color: #7c1c17;
        font-size: large;
        color: whitesmoke;
        border-radius: 20px;
        width: 200px;
        padding: 3px;
        margin: 10px;
        margin: 20px 50px 20px 50px;
        
    }
    button:hover {
       box-shadow:  0 0 2px 2px;
    }      
`
////////////////////////////////////////////////////////////// RESPONSIVIDADE

