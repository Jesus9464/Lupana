import React from "react";
import { BodyMenu } from "../../components/BodyApp";
import { Layaut } from "../../container/layaut";

export const Home = () => {
  return (
    <>
      <Layaut title="Home">
        <BodyMenu></BodyMenu>
      </Layaut>
    </>
  );
};
