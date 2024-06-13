import { Link, useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import PasswordInput from "../components/mobile/PasswordInput";
import Button1 from "../components/mobile/Button1";
import IncorrectPasswordMsg from "../components/mobile/IncorrectPasswordMsg";
import { useCallback, useState } from "react";
import GoogleLogin from "../components/mobile/GoogleLogin";
import FacebookLogin from "../components/mobile/FacebookLogin";
import AppleLogin from "../components/mobile/AppleLogin";

//TODO: Ask peter whether the states should be stored in users cookies

/**
 * Login Page
 * @returns JSX element
 */
const Login = () => {
  const navigate = useNavigate();

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
  const [showPasswordMsg, setShowPasswordMsg] = useState("hidden");

  /**************************************************************************************** */
  /********************************{Component Variables}********************************** */
  /*************************************************************************************** */
  const emailId = "loginEmail"; // Email input ID
  const userPass = "loginPass"; // Password input ID

  /**************************************************************************************** */
  /********************************{Component Functions}********************************** */
  /*************************************************************************************** */

  /**
   * Input validator using formik
   */
  const validateInput = () => {
    // TODO: Add formik validation here
    // TODO: Set showPasswordMsg to "" here if password is inccorect
    if (email !== "" && password !== "") navigate("/home");
  };

  /**
   * On Login click
   */
  const onLoginClick = useCallback(() => {
    setEmail(document.getElementById(emailId).value);
    setPassword(document.getElementById(userPass).value);
    setIsEmailLogin(!isEmailLogin);
  }, [email, password]);

  /**
   * On sign up click
   */
  const onSignupClick = useCallback(() => {
    setIsSignUp(!isSignUp);
  }, [isSignUp]);

  /**
   * On facebook click
   */
  const onFacebookClick = useCallback(() => {
    console.log("Clicked facebook");
    setIsFacebookLogin(!isFacebookLogin);
  }, [isSignUp]);

  /**
   * On google click
   */
  const onGoogleClick = useCallback(() => {
    console.log("Clicked google");
    setIsGoogleLogin(!isGoogleLogin);
  }, [isSignUp]);

  /**
   * On apple click
   */
  const onAppleClick = useCallback(() => {
    console.log("Clicked apple");
    setIsAppleLogin(!isAppleLogin);
  }, [isSignUp]);

  validateInput();

  return (
    <div className="w-full fixed bg-neutral-900 h-[100vh] overflow-hidden">
      <Title hugeIconarrowssolHref="/" pageName="Log in" returnPage="/" />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-left text-base text-white font-button-1-semibold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <EmailInput
                label="Email"
                inputPlaceholder="Enter your email"
                id={emailId}
              />
              <PasswordInput
                id={userPass}
                label="Password"
                inputAndWordPlaceholder="Enter your password"
              />
              <IncorrectPasswordMsg show={showPasswordMsg} />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-2 px-0 gap-[145px]">
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] font-semibold text-[inherit] text-right"
                to="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </div>
          <Button1 onCTAClick={onLoginClick} cTA="Login" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center">
          <div className="self-stretch flex flex-row items-center justify-center p-2">
            <div className="flex-1 relative leading-[24px] font-semibold">
              Or Log in by
            </div>
          </div>
          <div
            className={`self-stretch flex flex-row items-start justify-center gap-[32px]`}
          >
            <GoogleLogin onClick={onGoogleClick} />
            <FacebookLogin onClick={onFacebookClick} />
            <AppleLogin onClick={onAppleClick} />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-neutral-200">
            <div className="relative leading-[24px] font-semibold">{`Don&apos;t have an account? `}</div>
            <a
              onClick={onSignupClick}
              className="[text-decoration:none] relative leading-[24px] font-semibold text-primary-500"
              href="/sign-up"
            >
              Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
