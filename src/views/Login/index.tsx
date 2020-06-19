import React from "react";

import LoginForm from "../../components/Form/Login";
import Logo from "../../assets/logo.svg";

import "./styles.scss";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <img className="logo" src={Logo} alt="logo" />
        <h1>Gooso</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
