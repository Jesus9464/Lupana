import React from "react";
import { AsideMenu } from "../../components/AsideMenu/index";
import { Layaut } from "../../container/layaut";
import { ContainerHero } from "./style";

export const Home = () => {
  return (
    <>
      <Layaut title="Home">
        <ContainerHero>
          <AsideMenu />
          <section></section>
        </ContainerHero>
      </Layaut>
    </>
  );
};
