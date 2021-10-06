import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

export const Enlace = styled.a`
  color: black;
  font-weight: 600;
  text-decoration: none;
  font-size: 20px;
`;
