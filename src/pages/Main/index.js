import React from "react";
import { StyledButton } from "../../components/Button/styles.js";
import "../../App.css";

export default function Main({ children }) {
  return (
    <>
      <div className="container-main todo">
        <header className="title__todo">To Do</header>
        <StyledButton login className="logout">
          Log Out
        </StyledButton>
      </div>
    </>
  );
}
