import styled from "styled-components";

export const ContainerHero = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridcolumn};
`;
