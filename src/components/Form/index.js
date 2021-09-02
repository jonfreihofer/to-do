import React, { useState } from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";

import {
  StyledInputEmail,
  StyledInput,
} from "../../components/Input/styles.js";
import { StyledButton } from "../../components/Button/styles.js";
import { FaLock, FaAddressBook } from "react-icons/fa";
import useValidate from "../../hooks/useValidate";

export default function Form({ children }) {
  const [inputData, setInputData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const { validateEmail, emailIsValid, validatePassword, passwordIsValid } =
    useValidate();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
    validateEmail(inputData.userEmail);
    validatePassword(inputData.userPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyParams = {
      email: inputData.userEmail,
      password: inputData.userPassword,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(bodyParams),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch("https://dev.rapptrlabs.com/Tests/scripts/user-login.php", options)
      .then((response) =>
        response.json().then((post) => {
          console.log(post);
        })
      )
      .catch((err) => console.error(err));
    history.push("/main");
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <label htmlFor="userEmail">Email:</label>
      <FaAddressBook className="form-icon book" />
      <StyledInputEmail
        type="email"
        placeholder="user@rapptrlabs.com"
        name="userEmail"
        value={inputData.userEmail}
        onChange={handleChange}
        emailIsValid={emailIsValid}
        required
      />
      {!emailIsValid && (
        <p className="email" style={{ color: "red", fontSize: "12px" }}>
          Invalid Email
        </p>
      )}
      <label htmlFor="userPassword">Password:</label>
      <FaLock className="form-icon lock" />
      <StyledInput
        type="password"
        placeholder={"must be at least 4 characters"}
        name="userPassword"
        value={inputData.userPassword}
        onChange={handleChange}
        passwordIsValid={passwordIsValid}
      />
      {!passwordIsValid && (
        <p className="password" style={{ color: "red", fontSize: "12px" }}>
          Invalid Password
        </p>
      )}

      <StyledButton
        style={{ opacity: emailIsValid && passwordIsValid ? 1 : 0.5 }}
        disabled={emailIsValid && passwordIsValid ? false : true}
      >
        Log In
      </StyledButton>
    </form>
  );
}
