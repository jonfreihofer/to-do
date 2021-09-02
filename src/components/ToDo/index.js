import React from "react";
// import { Context } from "../../context";
import "../../App.css";
import { StyledToDo } from "./styles";
import { StyledInput } from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function ToDo({
  children,
  todo,
  toggleEditMode,
  saveTodo,
  handleTodo,
  editMode,
}) {
  const renderButtonOrIcons = () => {
    if (editMode) {
      return (
        <StyledButton regular className="todo-save-btn" onClick={saveTodo}>
          Save
        </StyledButton>
      );
    } else {
      return (
        <>
          <FaPencilAlt className="todo-icon pencil" onClick={toggleEditMode} />
          <br />
          <FaTrash className="todo-icon trash" />
        </>
      );
    }
  };
  return (
    <StyledToDo>
      {editMode && (
        <StyledInput
          regular
          className="todo-input"
          type="text"
          name="item"
          value={todo.item}
          onChange={handleTodo}
        />
      )}
      <p
        className="todo-title"
        style={{ fontSize: "40px", textShadow: "none", margin: "10px" }}
      >
        {todo}
      </p>
      {renderButtonOrIcons()}
    </StyledToDo>
  );
}
