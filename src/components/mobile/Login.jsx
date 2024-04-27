import React, { useState } from "react";
//rafc: a shortcut for creating react arrow function component

export const Login = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**************************************************************************** */
  /********************************{Login Options}***************************** */
  /**************************************************************************** */
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isFacebookLogin, setIsFacebookLogin] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [isAppleLogin, setIsAppleLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return <div>Login</div>;
};
