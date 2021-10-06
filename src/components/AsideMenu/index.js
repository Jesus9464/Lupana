import React, { useRef } from "react";
import { MotionDivBackground, MotionNav, AsideHero } from "./style";
import { useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "../../components/MenuToggleAside/index";
import { Navigation } from "../../components/NavigationApp/index";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const AsideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const conatinerRef = useRef(null);
  const { heigth } = useDimensions(conatinerRef);
  return (
    <>
      <AsideHero>
        <MotionNav
          ref={conatinerRef}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={heigth}
        >
          <MotionDivBackground variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </MotionNav>
      </AsideHero>
    </>
  );
};
