import { Link, useNavigate } from "react-router-dom";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import SocialMediaLogins from "../components/mobile/SocialMediaLogins";
import Button1 from "../components/mobile/Button1";
import { useCallback } from "react";

/**
 * Sign up Page
 * @returns JSX element
 */
const SignUp = () => {

  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/sign-up-birthday");
  }, [navigate]);

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
          <EmailInput label="Email" inputPlaceholder="Enter your email" />
          <Button1 cTA={"Continue"} onCTAClick={onCTAClick}/>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2">
            <div className="flex-1 relative leading-[24px] font-semibold">
              Or Sign up by
            </div>
          </div>
          <SocialMediaLogins
            socialMediaIconHref="https://www.google.com/"
            socialIcons="/social-icons3@2x.png"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-[8px] text-neutral-200">
            <div className="relative leading-[24px] font-semibold">
              Already have an account
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] relative leading-[24px] font-semibold text-primary-500"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
