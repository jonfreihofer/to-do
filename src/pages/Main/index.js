import React from "react";
import { StyledButton } from "../../components/Button/styles.js";
import { StyledInput } from "../../components/Input/styles.js";
import ToDo from "../../components/ToDo";
import "../../App.css";

export default function Main({ children }) {
  return (
    <>
      <div className="container-main todo">
        <header className="title__todo">To Do</header>
        <div className="searchBar">
          <StyledInput
            regular
            className="searchBar input"
            placeholder="search"
          />
          <StyledButton regular className="new">
            New
          </StyledButton>
        </div>
        <main className="container-todo-items">
          <ToDo />
        </main>
        <StyledButton login className="logout">
          Log Out
        </StyledButton>
      </div>
    </>
  );
}
