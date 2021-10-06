import React, { useContext } from "react";
import { AsideMenu } from "../../components/AsideMenu/index";
import { ToggleCurrent } from "../../ContextToggle";
import { ContainerHero } from "./style";

const variants = {
  hidden: {
    marginLeft: 0,
    transition: {
      delay: 1,
    },
  },

  visible: {
    marginLeft: "20%",
  },
};

export const BodyMenu = ({ children }) => {
  const { isOpen } = useContext(ToggleCurrent);
  return (
    <>
      <ContainerHero
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
      >
        <AsideMenu />
        {children}
      </ContainerHero>
    </>
  );
};
