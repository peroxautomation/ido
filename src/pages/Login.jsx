import { Link, useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import PasswordInput from "../components/mobile/PasswordInput";
import Button1 from "../components/mobile/Button1";
import SocialMediaLogins from "../components/mobile/SocialMediaLogins";
import IncorrectPasswordMsg from "../components/mobile/IncorrectPasswordMsg";
import { useCallback } from "react";

//TODO: Insert <IncorrectPasswordMsg />

/**
 * Login Page
 * @returns JSX element
 */
const Login = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    console.log("loggin in...")
    navigate('/home')
  }, []);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title hugeIconarrowssolHref="/" pageName="Log in" returnPage="/" />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-left text-base text-white font-button-1-semibold">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <EmailInput label="Email" inputPlaceholder="Enter your email" />
              <PasswordInput label="Password" inputAndWordPlaceholder="Enter your password"/>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-2 px-0 gap-[145px]">
              <div className="w-[266px] relative leading-[24px] font-semibold hidden">
                Trending now
              </div>
              <Link
                className="cursor-pointer [text-decoration:none] relative leading-[24px] font-semibold text-[inherit] text-right"
                to="/forgot-password"
              >
                Forgot password
              </Link>
            </div>
          </div>
          <Button1
            onCTAClick={onCTAClick}
            cTA="Login"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-center">
          <div className="self-stretch flex flex-row items-center justify-center p-2">
            <div className="flex-1 relative leading-[24px] font-semibold">
              Or Log in by
            </div>
          </div>
          <SocialMediaLogins />
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-neutral-200">
            <div className="relative leading-[24px] font-semibold">{`Don’t have an account? `}</div>
            <a className="[text-decoration:none] relative leading-[24px] font-semibold text-primary-500" href="/sign-up">
              Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
