import React, { useContext } from "react";
import { Context } from "../../context";
import { StyledButton } from "../../components/Button/styles.js";
import { StyledInput } from "../../components/Input/styles.js";
import ToDo from "../../components/ToDo";
import "../../App.css";

export default function Main({ children }) {
  const {
    newTodo,
    list,
    todo,
    editMode,
    saveTodo,
    handleTodo,
    toggleEditMode,
  } = useContext(Context);
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
          <StyledButton regular className="new" onClick={newTodo}>
            New
          </StyledButton>
        </div>
        <main className="container-todo-items">
          <ToDo
            todo={todo}
            editMode={editMode}
            saveTodo={saveTodo}
            handleTodo={handleTodo}
            toggleEditMode={toggleEditMode}
          />
          {list}
        </main>
        <StyledButton login className="logout">
          Log Out
        </StyledButton>
      </div>
    </>
  );
}
