import React from "react";
// import { Context } from "../../context";
import { StyledButton } from "../../components/Button/styles.js";
import { StyledInput } from "../../components/Input/styles.js";
import useTodo from "../../hooks/useTodo";
import "../../App.css";

export default function Main({ children }) {
  const { newTodo, list, todoSearch, handleTodoSearch } = useTodo();

  return (
    <>
      <div className="container-main todo">
        <header className="title__todo">To Do</header>
        <div className="searchBar">
          <StyledInput
            regular
            className="searchBar input"
            placeholder="search"
            name="searchTodo"
            value={todoSearch.searchTodo}
            onChange={handleTodoSearch}
          />
          <StyledButton regular className="new" onClick={newTodo}>
            New
          </StyledButton>
        </div>
        <main className="container-todo-items">{list}</main>
        <StyledButton regular className="logout">
          Log Out
        </StyledButton>
      </div>
    </>
  );
}
