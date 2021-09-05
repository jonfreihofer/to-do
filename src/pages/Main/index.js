import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { Context } from "../../context";
import { StyledButton } from "../../components/Button/styles.js";
import { StyledInput } from "../../components/Input/styles.js";
import ToDo from "../../components/ToDo";
import useTodo from "../../hooks/useTodo";
import "../../App.css";

export default function Main({ children }) {
  const {
    newTodo,
    todoList,
    todoInputValue,
    setTodoInputValue,
    setTodoList,
    deleteTodo,
  } = useTodo();
  const [editMode, setEditMode] = useState(false);
  const [todoSearchValue, setTodoSearchValue] = useState("");
  let filteredTodos = todoList.filter((todo) => {
    if (todoSearchValue !== "") {
      return (
        todo.item.toLowerCase().indexOf(todoSearchValue.toLowerCase()) !== -1
      );
    } else {
      return todoList;
    }
  });
  const history = useHistory();

  const handleTodoSearch = (event) => {
    setTodoSearchValue((prevValue) => event.target.value);
  };

  const list = filteredTodos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        id={todo.id}
        todo={todo.item}
        editMode={editMode}
        setEditMode={setEditMode}
        deleteTodo={deleteTodo}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        setTodoList={setTodoList}
      />
    );
  });

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
            value={todoSearchValue}
            onChange={handleTodoSearch}
          />
          <StyledButton regular className="new" onClick={newTodo}>
            New
          </StyledButton>
        </div>
        <main className="container-todo-items">{list}</main>
        <StyledButton
          regular
          className="logout"
          onClick={() => history.push("/")}
        >
          Log Out
        </StyledButton>
      </div>
    </>
  );
}
