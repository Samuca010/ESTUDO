import styled from "styled-components"
import background from "../src/img/background.jpg";

export const StyleContainer = styled.body`  
    margin: 0;
    justify-content: center;
    background-image:url(${background}) ;
    background-repeat: no-repeat;              
    background-size: 100% auto;
    background-position: center ;
    background-size: cover;
    background-attachment: fixed;
`