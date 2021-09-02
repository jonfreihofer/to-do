import React, { useState } from "react";
import ToDo from "../components/ToDo";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [editMode, setEditMode] = useState(true);
  const [todo, setTodo] = useState({
    id: 1,
    item: "",
  });
  const [todoList, setTodoList] = useState([]);

  const saveTodo = () => {
    setEditMode(!editMode);
  };
  const newTodo = () => {
    setTodoList((prevTodos) => [...prevTodos, todo]);
    setTodo((prevTodos) => ({
      id: prevTodos.id + 1,
      item: "",
    }));
  };

  const list = todoList.map((todo) => {
    return (
      <ToDo
        id={todo.id}
        todo={todo}
        editMode={editMode}
        saveTodo={saveTodo}
        handleTodo={handleTodo}
        toggleEditMode={toggleEditMode}
      />
    );
  });

  const handleTodo = (e) => {
    const { name, value } = e.target;
    setTodo((prevToDo) => ({ ...prevToDo, [name]: value }));
    console.log(todo.item);
  };
  const toggleEditMode = () => {
    console.log("works");
    setEditMode(!editMode);
  };

  return (
    <Context.Provider
      value={
        (handleTodo,
        editMode,
        setEditMode,
        saveTodo,
        todoList,
        setTodoList,
        list,
        newTodo,
        todo,
        toggleEditMode)
      }
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
