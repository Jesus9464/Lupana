import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
