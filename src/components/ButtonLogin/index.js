import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "./style";

export const ButtonLogin = () => {
  const { loginWithPopup } = useAuth0();
  return <Button onClick={() => loginWithPopup()}>Iniciar Sesion</Button>;
};
