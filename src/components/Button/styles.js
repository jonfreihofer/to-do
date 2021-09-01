import styled, { css } from "styled-components";
import globalStyles from "../../design/globalStyles";
export const StyledButton = styled.button`
  background: ${globalStyles.mainColor};
  color: white;
  border: none;
  height: 20%;
  width: 25%;
  padding: 10px 18px;
  margin-top: 20px;
  border-radius: 15px;
  font-family: ${globalStyles.font};
  font-size: 0.35em;
  text-transform: uppercase;
  box-shadow: 5px 10px #888888;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    opacity: 1;
    background: ${globalStyles.selectedColor};
  }
  ${(props) =>
    props.login &&
    css`
      width: 25%;
    `}
  @media (max-width: 600px) {
    margin-bottom: 200px;
    width: 55%;
    height: 10%;
  }
`;
