import { useCallback } from "react";
import Title from "../components/mobile/Title";
import EmailInput from "../components/mobile/EmailInput";
import Button1 from "../components/mobile/Button1";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onCTAClick = useCallback(() => {
    console.log("Sending OTP...")
    navigate('/otp');
  }, []);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="29px"
        titleLeft="11px"
        hugeIconarrowssolHref="/login"
        pageName="Forgot password"
        titleWidth="calc(100% - 40px)"
        returnPage="/login"
      />
      <main className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
        <EmailInput label="Email" inputPlaceholder="Enter your email" />
        <Button1
          onCTAClick={onCTAClick}
          cTA="Send code"
        />
      </main>
    </div>
  );
};

export default ForgotPassword;
