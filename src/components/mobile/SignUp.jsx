import React from "react";
//rafc: a shortcut for creating react arrow function component

export const SignUp = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(1); // day of birth
  const [mob, setMob] = useState("January"); // month of birth
  const [yob, setYob] = useState(2000); // year of birth
  //const [birthday, setBirthday] = useState({ dob, mob, yob }); // example scenario
  const [birthday, setBirthday] = useState({});
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState(""); // password
  const [password2, setPassword2] = useState(""); // confirm password

  /**************************************************************************** */
  /********************************{SignUp Options}**************************** */
  /**************************************************************************** */
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isFacebookLogin, setIsFacebookLogin] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [isAppleLogin, setIsAppleLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return <div>SignUp</div>;
};
