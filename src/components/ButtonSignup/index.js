import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./style";

export const ButtonSignup = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <Button
      onClick={() =>
        loginWithPopup({
          screen_hint: "signup",
        })
      }
    >
      Registrarse
    </Button>
  );
};
