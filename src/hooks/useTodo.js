import { useState, useCallback, useEffect } from "react";
import ToDo from "../components/ToDo";

export default function useTodo() {
  const [todoInputValue, setTodoInputValue] = useState({
    id: 1,
    item: "first todo",
  });
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const localInputData = localStorage.getItem("todoInputValue");
    return setTodoInputValue(localInputData);
  }, []);
  useEffect(() => {
    const localData = localStorage.getItem("todoList");
    const dataJSON = JSON.parse(localData);
    return setTodoList(localData ? dataJSON : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("todoInputValue", todoInputValue);
  }, [todoList, todoInputValue]);

  const [todoSearch, setTodoSearch] = useState({
    searchTodo: "",
  });
  const newTodo = useCallback(() => {
    setTodoList((prevTodos) => {
      localStorage.setItem("todoList", JSON.stringify(prevTodos));
      console.log(prevTodos);
      return [...prevTodos, todoInputValue];
    });
    setTodoInputValue((prevTodos) => ({
      id: prevTodos.id + 1,
      item: "",
    }));
  }, [todoInputValue]);

  const deleteTodo = (id) => {
    console.log(id);
    setTodoList((prevTodos) => {
      return prevTodos.filter((listItem) => listItem.id !== id);
    });
  };

  const handleTodoSearch = (e) => {
    const { name, value } = e.target;
    setTodoSearch((prevSearch) => ({ [name]: value }));
    setTodoList((prevTodo) =>
      prevTodo.filter((todo) => {
        if (!todo.value) return prevTodo;
        return todo.item.toLowerCase().includes(value);
      })
    );
    console.log(value);
  };

  const list = todoList.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        id={todo.id}
        todo={todo.item}
        deleteTodo={deleteTodo}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        setTodoList={setTodoList}
      />
    );
  });

  return {
    todoInputValue,
    setTodoInputValue,
    todoList,
    todoSearch,
    handleTodoSearch,
    setTodoList,
    newTodo,
    list,
    deleteTodo,
  };
}
