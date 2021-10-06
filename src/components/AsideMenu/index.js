import React, { useRef, useContext } from "react";
import { MotionDivBackground, MotionNav, AsideHero } from "./style";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "../../components/MenuToggleAside/index";
import { Navigation } from "../../components/NavigationApp/index";
import { ToggleCurrent } from "../../ContextToggle";

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
  const { isOpen, OpenNav } = useContext(ToggleCurrent);
  const containerRef = useRef(null);
  const { heigth } = useDimensions(containerRef);

  console.log(isOpen);
  return (
    <>
      <AsideHero>
        <MotionNav
          ref={containerRef}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={heigth}
        >
          <MotionDivBackground variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => OpenNav()} />
        </MotionNav>
      </AsideHero>
    </>
  );
};
