import { useState } from "react";
import ToDo from "../components/ToDo";

export default function useTodo() {
  const [todo, setTodo] = useState({
    id: 1,
    item: "first todo",
  });
  const [todoList, setTodoList] = useState([]);
  const newTodo = () => {
    setTodoList((prevTodos) => [...prevTodos, todo]);
    setTodo((prevTodos) => ({
      id: prevTodos.id + 1,
      item: "",
    }));
    console.log(todo.id);
  };
  const deleteTodo = (id) => {
    console.log(id);
    setTodoList((prevTodo) =>
      prevTodo.filter((listItem) => listItem.id !== id)
    );
  };

  const list = todoList.map((todo) => {
    return <ToDo key={todo.id} id={todo.id} todo={todo.item} />;
  });
  return { todo, setTodo, todoList, setTodoList, newTodo, list, deleteTodo };
}
