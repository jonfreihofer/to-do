import React, { useState } from "react";
// import { Context } from "../../context";
import "../../App.css";
import { StyledToDo } from "./styles";
import { StyledInput } from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import useTodo from "../../hooks/useTodo";

export default function ToDo({ children, id }) {
  const [editMode, setEditMode] = useState(true);
  const { todo, setTodo, deleteTodo } = useTodo();
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleTodo = (e) => {
    const { name, value } = e.target;
    setTodo((prevToDo) => ({ ...prevToDo, [name]: value }));
  };
  const saveTodo = () => {
    setEditMode(!editMode);
  };
  const renderButtonOrIcons = () => {
    if (editMode) {
      return (
        <StyledButton save className="todo-save-btn" onClick={saveTodo}>
          S
        </StyledButton>
      );
    } else {
      return (
        <>
          <FaPencilAlt className="todo-icon pencil" onClick={toggleEditMode} />
          <br />
          <FaTrash className="todo-icon trash" onClick={() => deleteTodo(id)} />
        </>
      );
    }
  };
  return (
    <StyledToDo>
      {editMode ? (
        <StyledInput
          regular
          className="todo-input"
          type="text"
          name="item"
          value={todo.item}
          onChange={handleTodo}
        />
      ) : (
        <p
          className="todo-item-title"
          style={{ fontSize: "40px", textShadow: "none", margin: "10px" }}
        >
          {todo.item}
        </p>
      )}
      <div className="button-container">{renderButtonOrIcons()}</div>
    </StyledToDo>
  );
}
