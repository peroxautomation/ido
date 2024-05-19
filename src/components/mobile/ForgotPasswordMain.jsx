import { useCallback } from "react";
import OnboardingInput from "./OnboardingInput";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";

const ForgotPasswordMain = () => {

  const navigate = useNavigate();
  const onClick = () => {
    //TODO: Add API Call
    navigate('/otp')
  }

  return (
    <section className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
      <OnboardingInput label="Email" inputPlaceholder="Enter your email" />
      <LoginButton
        text="Send code"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        statePrimarySizeDefaultVBorder="none"
        statePrimarySizeDefaultVTextDecoration="unset"
        statePrimarySizeDefaultVAlignSelf="stretch"
        statePrimarySizeDefaultVPosition="unset"
        statePrimarySizeDefaultVTop="unset"
        statePrimarySizeDefaultVLeft="unset"
        statePrimarySizeDefaultVWidth="unset"
        onCTAClick={onClick}
      />
    </section>
  );
};

export default ForgotPasswordMain;
