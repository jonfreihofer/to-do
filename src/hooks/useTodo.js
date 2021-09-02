import { useState } from "react";
import ToDo from "../components/ToDo";

export default function useTodo() {
  const [todo, setTodo] = useState({
    id: 0,
    item: "first todo",
  });
  const [todoList, setTodoList] = useState([]);
  const newTodo = () => {
    setTodo((prevTodos) => ({
      id: prevTodos.id + 1,
      item: "",
    }));
    setTodoList((prevTodos) => [...prevTodos, todo]);
    console.log(todo.id);
  };

  const list = todoList.map((todo) => {
    return <ToDo id={todo.id} todo={todo.item} />;
  });
  return { todo, setTodo, todoList, setTodoList, newTodo, list };
}
