import { useState } from "react";
import ToDo from "../components/ToDo";

export default function useTodo() {
  const [todo, setTodo] = useState({
    id: 1,
    item: "",
  });
  const [todoList, setTodoList] = useState([]);
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
  return { todo, setTodo, todoList, setTodoList, newTodo, list };
}
