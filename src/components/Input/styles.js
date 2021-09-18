import styled, { css } from "styled-components";

export const StyledInputEmail = styled.input`
  border: ${({ emailIsValid }) => (emailIsValid ? "none" : "solid 3px red")};
  height: 60px;
  width: 400px;
  border-radius: 15px;
  box-shadow: 5px 10px #888888;
  margin-bottom: 15px;
  margin-top: 2px;
  padding-left: 40px;
  ::placeholder {
    text-align: center;
    text-transform: uppercase;
    font-weight: bolder;
    padding-right: 40px;
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const StyledInput = styled.input`
  border: ${({ passwordIsValid }) =>
    passwordIsValid ? "none" : "solid 3px red"};
  height: 60px;
  width: 400px;
  border-radius: 15px;
  box-shadow: 5px 10px #888888;
  margin-top: 2px;
  margin-bottom: 15px;
  padding-left: 40px;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.regular &&
    css`
      border: none;
      height: 60px;
      width: 400px;
      max-height: 35px;
      max-width: 25%;
      ::placeholder {
        padding: none;
      }
    `}

  ::placeholder {
    text-align: center;
    text-transform: uppercase;
    font-weight: bolder;
    padding-right: 40px;
    opacity: 0.4;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;
