import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BeatLoader from "react-loader-spinner";
import { Layaut } from "../../container/layaut";
import { BodyMenu } from "../../components/BodyApp/index";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Layaut title="Perfil">
      <BodyMenu>
        <div>
          <div>
            <div>
              <img src={picture} alt="Profile" />
            </div>
            <div>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          </div>
          <div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </BodyMenu>
    </Layaut>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <BeatLoader />,
});
