import styled from "styled-components";
import { motion } from "framer-motion";

export const ComponentLi = styled(motion.li)`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border: 2px solid;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`;

export const Text = styled.div`
  border: 2px solid;
  border-radius: 5px;
  width: 200px;
  height: auto;
  flex: 1;
  padding: 5px;
`;
