import React from "react";
import "../../App.css";
import Form from "../../components/Form";

export default function LogIn({ children }) {
  return (
    <div className="container-main">
      <header className="title">Rapptr Labs</header>
      <Form />
    </div>
  );
}
