import React from "react";

import { ButtonLogin } from "../components/ButtonLogin/index";
import { ButtonOut } from "../components/ButtonOut/index";

import { useAuth0 } from "@auth0/auth0-react";

export const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <ButtonOut /> : <ButtonLogin />;
};
