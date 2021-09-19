import React, { useState, useEffect } from "react";
// import { Context } from "../../context";
import "../../App.css";
import { StyledToDo } from "./styles";
import { StyledInput } from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

export default function ToDo({ children, id, setTodoList, deleteTodo, todo }) {
  const [editMode, setEditMode] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState({
    item: "my todo",
  });

  useEffect(() => {
    const storedValue = localStorage.setItem("editMode", editMode);
    console.log("STORED", storedValue);
  }, [editMode]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const handleTodoChange = (e) => {
    const { name, value } = e.target;
    setTodoInputValue((prevToDo) => ({
      [name]: value,
    }));
    if (todoInputValue.item.length > 25) {
      alert("Exceeded Maximum Characters");
    }
  };
  const saveTodo = (id) => {
    if (!todoInputValue.item) return alert("enter a todo!");
    setEditMode(!editMode);
    setTodoList((prevList) => {
      const item = prevList.find((listItem) => listItem.id === id);
      item.item = todoInputValue.item;
      const filteredList = prevList.filter((listItem) => listItem.id !== id);
      return [...filteredList, item];
    });
  };

  return (
    <StyledToDo>
      {editMode ? (
        <StyledInput
          regular
          className="todo-input"
          type="text"
          name="item"
          placeholder="enter todo here"
          value={todoInputValue.item}
          onChange={handleTodoChange}
        />
      ) : (
        <p
          className="todo-item-title"
          style={{ fontSize: "40px", textShadow: "none", margin: "10px" }}
        >
          {todo}
        </p>
      )}
      <div className="button-container">
        {editMode ? (
          <StyledButton
            save
            className="todo-save-btn"
            onClick={() => saveTodo(id)}
          >
            Save
          </StyledButton>
        ) : (
          <div className="saveAndDeleteIcons">
            <FaPencilAlt
              className="todo-icon pencil"
              onClick={toggleEditMode}
            />
            <br />
            <FaTrash
              className="todo-icon trash"
              onClick={() => deleteTodo(id)}
            />
          </div>
        )}
      </div>
    </StyledToDo>
  );
}
