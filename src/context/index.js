import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [inputToDo, setInputToDo] = useState({});

  const handleToDo = (e) => {
    const { name, value } = e.target;
    setInputToDo((prevInputToDo) => ({ ...prevInputToDo, [name]: value }));
    console.log(inputToDo.todoInput);
  };
  return (
    <Context.Provider value={(handleToDo, inputToDo, setInputToDo)}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
