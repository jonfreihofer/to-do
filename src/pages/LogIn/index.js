import React from "react";
import "../../App.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LogIn({ children }) {
  return (
    <div className="container-main">
      <header className="title">Rapptr Labs</header>
      <Input />
      <br />
      <Input />
      <Button>Log In</Button>
    </div>
  );
}
