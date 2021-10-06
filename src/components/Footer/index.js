import React from "react";
import { ContainerFooter, Enlace } from "./style";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <ContainerFooter>
      <motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
        <Enlace href="https://twitter.com/JESUSALFONSOG19" target="_blank">
          Hecho por Jesus Galvis
        </Enlace>
      </motion.div>
    </ContainerFooter>
  );
};
