import React from "react";

import "./login.scss";

const Login = () => {
  const onClick = () => {
    alert("The email address is badly formatted");
  };
  return (
    <div className="login-container">
      <a href="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </a>
      <div className="login">
        <h1>Sign-in</h1>
        <form onSubmit={onClick}>
          <h5>E-mail</h5>
          <input type="text" required="" value="" />
          <h5>Password</h5>
          <input type="password" required="" value="" />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
          &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={onClick}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
