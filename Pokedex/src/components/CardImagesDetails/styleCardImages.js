import styled from "styled-components";

export const ImageCardDetails = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;

img{
    background-color: #fafafa;
    margin: 26px 30px;
    padding: 2vw;
    background:linear-gradient(white, #8DC7CF ) ;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    border-radius: 5px;
    transition: all 0.3s ease-out;
    min-width: 10rem;
    max-width: 10rem;
    min-height: 18vh;
    border-left: 3px solid #b3404a;

}
@media(max-width: 1280px) {
    img{
        max-height: 10rem;
    }
} 
`