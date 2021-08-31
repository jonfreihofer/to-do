import React from "react";
import "../../App.css";
import { StyledInput } from "../../components/Input/styles.js";
import Button from "../../components/Button";
import { FaLock, FaAddressBook } from "react-icons/fa";

export default function LogIn({ children }) {
  return (
    <div className="container-main">
      <header className="title">Rapptr Labs</header>
      <div className="input-container">
        <FaAddressBook className="form-icon book" />
        <StyledInput type="email" placeholder="input email" />
        <FaLock className="form-icon" />
        <StyledInput type="password" placeholder={`input password`} />
      </div>
      <Button>Log In</Button>
    </div>
  );
}
