import React, { useState, useContext } from "react";
import { Context } from "../../context";
import "../../App.css";
import { StyledToDo } from "./styles";
import { StyledInput } from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function ToDo({ children }) {
  const [editMode, setEditMode] = useState(true);
  const [todo, setTodo] = useState({
    id: 1,
    item: "",
  });
  const handleToDo = (e) => {
    const { name, value } = e.target;
    setTodo((prevToDo) => ({ ...prevToDo, [name]: value }));
    console.log(todo.item);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveToDo = () => {
    setEditMode(!editMode);
  };
  const renderButtonOrIcons = () => {
    if (editMode) {
      return (
        <StyledButton regular className="todo-save-btn" onClick={saveToDo}>
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
      <p
        className="todo-title"
        style={{ fontSize: "30px", textShadow: "none" }}
      >
        {todo.item}
      </p>
      {editMode && (
        <StyledInput
          regular
          className="todo-input"
          type="text"
          name="item"
          value={todo.item}
          onChange={handleToDo}
        />
      )}
      {renderButtonOrIcons()}
    </StyledToDo>
  );
}
