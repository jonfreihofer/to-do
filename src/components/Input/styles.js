import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  height: 25%;
  width: 25%;
  border-radius: 15px;
  box-shadow: 5px 10px #888888;
  margin-bottom: 6px;
  padding-left: 40px;
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
