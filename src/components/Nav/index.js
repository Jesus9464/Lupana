import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonOut } from "../ButtonOut/index";
import {
  ContainerHero,
  LogoImage,
  ContainerUser,
  ImageUser,
  ContainerSesionOut,
  NameUser,
  TitlePages,
} from "./style";

export const Nav = ({ page }) => {
  const { user } = useAuth0();
  const [visible, setVisible] = useState(false);
  return (
    <ContainerHero>
      <LogoImage />
      <ContainerUser>
        <TitlePages>{page}</TitlePages>
        <ImageUser
          onClick={() => setVisible(!visible)}
          src={user.picture}
          alt={user.name}
        />
        <ContainerSesionOut visible={visible}>
          <NameUser>{user.name}</NameUser>
          <ButtonOut />
        </ContainerSesionOut>
      </ContainerUser>
    </ContainerHero>
  );
};
