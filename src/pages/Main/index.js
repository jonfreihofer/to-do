import React from "react";
import { StyledButton } from "../../components/Button/styles.js";
import "../../App.css";

export default function Main({ children }) {
  return (
    <>
      <div className="container-main">
        <header className="title">To Do</header>

        <StyledButton>Log Out</StyledButton>
      </div>
    </>
  );
}
