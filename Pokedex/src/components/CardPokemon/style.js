import styled from "styled-components"
export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2vh;
    margin-bottom: 5vh;

    button {
        background-color: #D30A40;
        border-radius: 10px;
        width: 8rem;
        height: 2rem;
        box-shadow: white 5px 5px 5px;
        color: whitesmoke;
        font-weight: bold;
        margin-top: 1vh;
    }
    button:hover{
        background-color: #3E5CA8;
            }
     
    img {
        padding: 1vh;
        background:linear-gradient(white, #8DC7CF ) ;
        box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
        border-radius: 5px;
        transition: all 0.3s ease-out;
        width: 10vw;
        height: 30vh;
        border-left: 3px solid #b3404a;
        object-fit: contain;
    }
                                                            
    p {
        background:linear-gradient(white, #FECA05 ) ;
        width: 10vw;
        margin: 0 0 2vh 0;
        font-style: italic;
        font-size: large;
    }

       @media(max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        position: relative;
        p{
            width: 12vh;
            font-size: smaller;
        }
    }
    `