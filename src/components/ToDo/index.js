import React, { useState } from "react";
// import { Context } from "../../context";
import "../../App.css";
import { StyledToDo } from "./styles";
import { StyledInput } from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import useTodo from "../../hooks/useTodo";

export default function ToDo({ children }) {
  const [editMode, setEditMode] = useState(true);
  const { todo, setTodo } = useTodo();
  const toggleEditMode = () => {
    console.log("works");
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
        {todo.item}
      </p>
      {renderButtonOrIcons()}
    </StyledToDo>
  );
}
