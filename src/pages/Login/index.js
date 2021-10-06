import React from "react";
import { WrapperLogin, Containerlogin } from "./style";
import Logo from "../../components/Logo/index";
import { AuthenticationButton } from "../../container/authentication-button";
import { ButtonSignup } from "../../components/ButtonSignup/index";

export const Login = () => {
  return (
    <>
      <WrapperLogin>
        <Containerlogin>
          <Logo />
          <AuthenticationButton />
          <ButtonSignup />
        </Containerlogin>
      </WrapperLogin>
    </>
  );
};
