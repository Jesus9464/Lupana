import React from "react";
import Logo from "../../components/Logo/index";
import { ContainerPage, Link } from "./style";
import { useAuth0 } from "@auth0/auth0-react";

export const PageError = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <ContainerPage>
      <Logo />
      <h1>Pagina no encontrada</h1>
      {isAuthenticated && <Link to="/home">Home</Link>}
      {!isAuthenticated && <Link to="/">Iniciar Sesion</Link>}
    </ContainerPage>
  );
};
