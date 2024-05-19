import { Link, useNavigate } from "react-router-dom";
import OnboardingInput from "./OnboardingInput";
import LoginButton from "./LoginButton";

const ResetPasswordMain = () => {

  return (
    <section className="absolute w-[calc(100%_-_40px)] top-[108px] right-[20px] left-[20px] flex flex-col items-start justify-start gap-[16px]">
      <OnboardingInput label="New password" inputPlaceholder="Enter password" type="password"/>
      <LoginButton
        text="Reset password"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        statePrimarySizeDefaultVBorder="unset"
        statePrimarySizeDefaultVTextDecoration="none"
        statePrimarySizeDefaultVAlignSelf="stretch"
        statePrimarySizeDefaultVPosition="unset"
        statePrimarySizeDefaultVTop="unset"
        statePrimarySizeDefaultVLeft="unset"
        statePrimarySizeDefaultVWidth="unset"
      />
    </section>
  );
};

export default ResetPasswordMain;
