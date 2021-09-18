import React from "react";
import "../../App.css";
import Form from "../../components/Form";

export default function LogIn({ children }) {
  return (
    <div className="container-main">
      <header className="title">Hyper To-Do</header>
      <Form />
    </div>
  );
}
