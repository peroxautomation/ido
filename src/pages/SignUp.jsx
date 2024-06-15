import { useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import Button1 from "../components/mobile/Button1";
import { useCallback, useState } from "react";
import GoogleLogin from "../components/mobile/GoogleLogin";
import FacebookLogin from "../components/mobile/FacebookLogin";
import AppleLogin from "../components/mobile/AppleLogin";

/**
 * Sign up Page
 * @returns JSX element
 * TODO: Change Button1 to its inactive component
 */
const SignUp = () => {
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
  const [termsAndCondition, setTermsAndCondition] = useState(false);

  /**************************************************************************** */
  /********************************{SignUp Options}**************************** */
  /**************************************************************************** */
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isFacebookLogin, setIsFacebookLogin] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [isAppleLogin, setIsAppleLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  /**************************************************************************** */
  /********************************{Global Variables}**************************** */
  /**************************************************************************** */
  const id = "userEmail";

  /**
   * On click Sign in
   */
  const onSignInClick = useCallback(() => {
    const userEmail = document.getElementById(id).value;

    //TODO: Add Formik validation here
    setEmail(userEmail);
    setIsEmailLogin(!isEmailLogin);
    
    if (userEmail !== "") navigate("/sign-up/birthday");
  }, [navigate]);

  /**
   * On login click
   */
  const onLoginClick = useCallback(() => {
    setIsLogin(!setIsLogin);
  }, [isLogin]);

  /**
   * On facebook click
   */
  const onFacebookClick = useCallback(() => {
    console.log("Clicked facebook");
    setIsFacebookLogin(!isFacebookLogin);
  }, [isFacebookLogin]);

  /**
   * On google click
   */
  const onGoogleClick = useCallback(() => {
    console.log("Clicked google");
    setIsGoogleLogin(!isGoogleLogin);
  }, [isGoogleLogin]);

  /**
   * On apple click
   */
  const onAppleClick = useCallback(() => {
    console.log("Clicked apple");
    setIsAppleLogin(!isAppleLogin);
  }, [isAppleLogin]);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="20px"
        titleLeft="20px"
        hugeIconarrowssolHref="/"
        pageName="Sign up"
        titleWidth="calc(100% - 40px)"
        direactionLeft="/direaction-left.svg"
        returnPage="/login"
      />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-center text-base text-neutral-100 font-button-1-regular">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <EmailInput
            label="Email"
            inputPlaceholder="Enter your email"
            id={id}
          />
          <Button1 cTA={"Continue"} onCTAClick={onSignInClick} />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2">
            <div className="flex-1 relative leading-[24px] font-semibold">
              Or Sign up by
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
            <div className="relative leading-[24px] font-semibold">
              Already have an account
            </div>
            <a
              onClick={onLoginClick}
              className="cursor-pointer [text-decoration:none] relative leading-[24px] font-semibold text-primary-500"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
