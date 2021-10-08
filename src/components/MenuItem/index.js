import * as React from "react";
import { ComponentLi, Icon, Text, Link } from "./style";
import { MdHome, MdAccountBox } from "react-icons/md";
import "./style.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const icon = [<MdHome />, <MdAccountBox />];

export const MenuItem = ({ url, id, path }) => {
  return (
    <Link exact to={path} activeClassName="active-link">
      <ComponentLi
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon>{icon[id]}</Icon>
        <Text>
          <h1>{url}</h1>
        </Text>
      </ComponentLi>
    </Link>
  );
};
