import React, { useState } from "react";
import ToDo from "../components/ToDo";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    id: 1,
    item: "",
  });

  const newTodo = () => {
    console.log("def works");
    setTodoList((prevTodos) => [...prevTodos, todo]);
    setTodo((prevTodos) => ({
      id: prevTodos.id + 1,
      item: "",
    }));
  };

  const list = todoList.map((todo) => {
    return <ToDo id={todo.id} todo={todo.item} />;
  });

  return (
    <Context.Provider value={(list, todo, setTodo, newTodo)}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
