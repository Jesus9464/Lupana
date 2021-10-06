import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerHero = styled.div`
  height: 100vh;
  border: 1px solid;
  display: grid;
  grid-template-columns: auto 80%;
`;

export const AsideHero = styled.aside`
  border: 1px solid;
`;

export const MotionDivBackground = styled(motion.div)`
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 270px;
  background: ${(props) => props.theme.background};
`;

export const MotionNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 270px;
`;
