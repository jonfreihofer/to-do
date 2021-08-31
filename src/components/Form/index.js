import React, { useState } from "react";
import "../../App.css";
import { StyledInput } from "../../components/Input/styles.js";
import Button from "../../components/Button";
import { FaLock, FaAddressBook } from "react-icons/fa";
import useValidate from "../../hooks/useValidate";

export default function Form({ children }) {
  const [inputData, setInputData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
    console.log(inputData.userEmail);
    validateEmail(inputData.userEmail);
  };
  const { validateEmail } = useValidate();
  return (
    <form className="input-container">
      <label htmlFor="userEmail">Email:</label>
      <FaAddressBook className="form-icon book" />
      <StyledInput
        type="email"
        placeholder="user@rapptrlabs.com"
        name="userEmail"
        value={inputData.userEmail}
        onChange={handleChange}
        required
      />
      <label htmlFor="userPassword">Password:</label>
      <FaLock className="form-icon" />
      <StyledInput
        type="password"
        placeholder={`input password`}
        name="userPassword"
      />

      <Button>Log In</Button>
    </form>
  );
}
