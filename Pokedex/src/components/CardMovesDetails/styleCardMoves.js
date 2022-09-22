import styled from "styled-components";

export const ContainerMovesDetails = styled.section`
  margin: 0 3%;
`;

export const ContainerType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vw 0 1vw 0;
  min-width: 35vw;
  padding: 2% 0;
  font-size: 200%;
  text-align: center;
  background:linear-gradient(white 40%, #8DC7CF ) ;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  border-left: 3px solid #b3404a;
 
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 3vh 0;
    label {
      margin: 3% 0;
    }
  }
`;

export const ContainerMoves = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* min-height: 50vh;  */
  background:linear-gradient(white 30%, #8DC7CF ) ;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  border-left: 3px solid #b3404a;
  font-size: 160%;
  margin-top: 8vh;
  label {
    margin: 2%;
  }

  @media(max-width: 1280px) {
    height: 23rem;
    label {
    margin: 1%;
    font-size: 5vh;
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
