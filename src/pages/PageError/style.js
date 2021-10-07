import styled from "styled-components";
import { Link as LinkHome } from "react-router-dom";

export const ContainerPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const Link = styled(LinkHome)`
  width: 20%;
  background-color: ${(props) => props.theme.background};
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
