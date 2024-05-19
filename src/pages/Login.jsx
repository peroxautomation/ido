import { Link } from "react-router-dom";
import Return from "../components/mobile/Return";
import GoogleLoginIcon from "../components/mobile/GoogleLoginIcon";
import FacebookLoginIcon from "../components/mobile/FacebookLoginIcon";
import AppleLoginIcon from "../components/mobile/AppleLoginIcon";
import LoginMain from "../components/mobile/LoginMain";
import { useState } from "react";

const Login = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**************************************************************************** */
  /********************************{Login Options}**************************** */
  /**************************************************************************** */
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [isFacebookLogin, setIsFacebookLogin] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [isAppleLogin, setIsAppleLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="w-full relative bg-neutral-900 h-[667px] overflow-hidden">
      <header className="absolute w-[calc(100%_-_40px)] top-[40px] right-[20px] left-[20px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border text-center text-xl text-white font-button-2-semibold">
        <Return hugeIconarrowssolHref="/" />
        <div className="relative leading-[28px] font-semibold">Log in</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-3@2x.png"
        />
      </header>
      <section className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-center text-base text-white font-button-2-semibold">
       <LoginMain></LoginMain>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2">
            <div className="flex-1 relative leading-[24px] font-semibold">
              OR LOG IN BY
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[32px]">
            <GoogleLoginIcon />
            <FacebookLoginIcon />
            <AppleLoginIcon socialIconsHref="https://www.apple.com" />
          </div>
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-neutral-200">
            <div className="relative leading-[24px] font-semibold">{`Don’t have an account? `}</div>
            <a className="[text-decoration:none] relative leading-[24px] font-semibold text-primary-500">
              Sign up
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
