import * as React from "react";
import { MenuItem } from "../MenuItem/index";
import { ListNavigation } from "./style";

const pages = [
  {
    id: 0,
    url: "Home",
    path: "/home",
  },
  {
    id: 1,
    url: "Perfil",
    path: "/profile",
  },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  return (
    <ListNavigation variants={variants}>
      {pages.map((route) => (
        <MenuItem {...route} key={route.id} />
      ))}
    </ListNavigation>
  );
};
