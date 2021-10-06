import React from "react";
import { Footer } from "../components/Footer/index";
import { Nav } from "../components/Nav";

export const Layaut = ({ children, title }) => {
  return (
    <>
      <Nav page={title} />
      {children}
      <Footer />
    </>
  );
};
