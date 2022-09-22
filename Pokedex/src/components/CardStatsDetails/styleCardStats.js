import styled from "styled-components";

export const ContainerStats = styled.section`
  margin: 2vw 0;
  min-width: 30vw;
  font-size: 200%;
  text-align: center;
  background:linear-gradient(white 20%, #8DC7CF ) ;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  border-left: 3px solid #b3404a;
  @media(max-width: 1280px) {
    label {
    margin: 1%;
    font-size: 6vh;
  }
  h2{ 
    font-size: 6vh;
  }
  
  @media (max-width: 800px) {
    height: 50vh;
  }
}
`;
export const InformationStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: left;
  label {
    margin: 2%;
  }

  @media(max-width: 1280px) {
    height: 20rem;
    label {
    margin: 1%;
    font-size: 6vh;
  }
  h2{ 
    font-size: 6vh;
  }
  }

   @media (max-width: 800px) {
    height: 23rem;
    label {
    margin: 1%;
    font-size: 2.5vh;
    width: 60vw;
    text-align: center;
  }
  h2{ 
    font-size: 5vh;
  }
}
`;
