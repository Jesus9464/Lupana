import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BeatLoader from "react-loader-spinner";
import { Layaut } from "../../container/layaut";
import { BodyMenu } from "../../components/BodyApp/index";
import { ButtonOut } from "../../components/ButtonOut";
import { ContainerHero, ImgUser, ContainerUser, ContainerOut } from "./style";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Layaut title="Perfil">
      <BodyMenu>
        <ContainerHero>
          <ContainerUser>
            <div>
              <ImgUser src={picture} alt="Profile" />
            </div>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </ContainerUser>
          <ContainerOut>
            <ButtonOut />
          </ContainerOut>
        </ContainerHero>
      </BodyMenu>
    </Layaut>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <BeatLoader />,
});
