import styled from "styled-components";
import fondo from "../../images/fondo.jpg";

export const WrapperLogin = styled.div`
  background-image: url(${fondo});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Containerlogin = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 100px;
  padding: 30px;
  border-radius: 7px;
  width: 30%;
  height: 40%;
`;
