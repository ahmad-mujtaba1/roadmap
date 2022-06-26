import React, { useState } from "react";

import ReactDOM from "react-dom";
import { database } from './database';
import DATA from "./data";
import "./login.css";
import { reactLocalStorage } from 'reactjs-localstorage';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = () => { database.find((user) => (user.username === uname.value)) && localStorage.setItem('user', uname.value) };

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password

                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                localStorage.setItem('pass', pass.value)
                setIsSubmitted(true);
                localStorage.getItem('user');
                localStorage.getItem('pass');


            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="display">
                    {isSubmitted ? <DATA /> : renderForm}
                </div>
            </div>
        </div>
    );
}

export default Login;
