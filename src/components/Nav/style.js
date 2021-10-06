import styled, { keyframes } from "styled-components";
import Logo from "../Logo/index";

const DisplayFrames = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }

`;

export const ContainerHero = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;

export const LogoImage = styled(Logo)`
  width: 250px;
  height: 40px;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const ImageUser = styled.img`
  border-radius: 50%;
  width: 50px;
  cursor: pointer;
`;

export const ContainerSesionOut = styled.div`
  margin: 10px;
  padding: 10px;
  display: ${(props) => (props.visible ? "block" : "none")};
  animation: ${DisplayFrames} 1s ease-out;
  position: absolute;
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 10px;
  z-index: 600;
  text-align: center;
  top: 55px;
`;

export const NameUser = styled.h1`
  font-size: 15px;
`;

export const TitlePages = styled.h3`
  margin-right: 10px;
`;
