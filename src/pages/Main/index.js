import React, { useState } from "react";
// import { Context } from "../../context";
import { StyledButton } from "../../components/Button/styles.js";
import { StyledInput } from "../../components/Input/styles.js";
import ToDo from "../../components/ToDo";
import useTodo from "../../hooks/useTodo";
import "../../App.css";

export default function Main({ children }) {
  const [todoSearchValue, setTodoSearchValue] = useState({
    todoSearch: "",
  });
  const handleTodoSearch = (e) => {
    const { name, value } = e.target;
    setTodoSearchValue((prevTodo) => ({ [name]: value }));
    setTodoList((prevTodos) =>
      prevTodos.filter((todo) =>
        todo.item.toLowerCase().includes(todoSearchValue.searchTodo)
      )
    );
    console.log("todo search", todoList);
  };

  const {
    newTodo,
    todoList,
    editMode,
    setEditMode,
    todoInputValue,
    setTodoInputValue,
    setTodoList,
    deleteTodo,
  } = useTodo();
  const list = todoList.map((todo) => {
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
            value={todoSearchValue.todoSearch}
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
