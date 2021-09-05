import styled from "styled-components";
import "../../index.css";

export const StyledToDo = styled.div`
  border: solid 1px var(--main-bg-color);
  height: 20vh;
  width: 100%;
  display: flex;

  flex-direction: row;
  margin-bottom: 5px;
  flex-wrap: wrap;
  i {
    font-size: 20px;
  }
`;
