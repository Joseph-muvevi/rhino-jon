import AuthBanner from './authBanner/authBanner'
import React from "react";
import "./auth.css";
import AuthForm from "./authForm/authForm";

const Auth = () => {


  return (
    <div className="auth">
      <AuthBanner/>
      <AuthForm/>
    </div>
  );
};

export default Auth;
