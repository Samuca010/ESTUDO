import styled from "styled-components";

export const ContainerBody = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
`;
