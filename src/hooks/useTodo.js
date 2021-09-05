import { useState, useEffect } from "react";

export default function useTodo() {
  const [todoInputValue, setTodoInputValue] = useState({
    id: 1,
  });

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("todoList");
    const dataJSON = JSON.parse(localData);
    return setTodoList(localData ? dataJSON : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("todoInputValue", todoInputValue);
  }, [todoList, todoInputValue]);

  const newTodo = () => {
    setTodoList((prevTodos) => {
      localStorage.setItem("todoList", JSON.stringify(prevTodos));
      console.log(prevTodos);
      return [...prevTodos, todoInputValue];
    });
    setTodoInputValue((prevTodos) => ({
      id: prevTodos.id + 1,
    }));
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodoList((prevTodos) => {
      return prevTodos.filter((listItem) => listItem.id !== id);
    });
  };

  return {
    todoInputValue,
    setTodoInputValue,
    todoList,
    setTodoList,
    newTodo,
    deleteTodo,
  };
}
