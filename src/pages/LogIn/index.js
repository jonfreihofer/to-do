import React from "react";
import "../../App.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FaLock } from "react-icons/fa";

export default function LogIn({ children }) {
  return (
    <div className="container-main">
      <header className="title">Rapptr Labs</header>
      <Input />
      <Input />
      <FaLock className="form-icon lock" />
      <Button>Log In</Button>
    </div>
  );
}
