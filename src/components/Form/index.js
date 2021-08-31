import React from "react";
import "../../App.css";
import { StyledInput } from "../../components/Input/styles.js";
import Button from "../../components/Button";
import { FaLock, FaAddressBook } from "react-icons/fa";

export default function Form({ children }) {
  return (
    <form className="input-container">
      <FaAddressBook className="form-icon book" />
      <StyledInput type="email" placeholder="input email" />
      <FaLock className="form-icon" />
      <StyledInput type="password" placeholder={`input password`} />
      <Button>Log In</Button>
    </form>
  );
}
