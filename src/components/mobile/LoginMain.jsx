import IncorrectPasswordText from "./IncorrectPasswordText";
import ForogorPassword from "./ForgotPasswordLogin";
import OnboardingInput from "./OnboardingInput";
import LoginButton from "./LoginButton";

const LoginMain = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <OnboardingInput
          label="Email"
          inputPlaceholder="Enter your email"
          type="text"
        />
        <OnboardingInput
          label="Password"
          inputPlaceholder="Enter your password"
          type="password"
        />
      </div>
      <ForogorPassword forgotPasswordText="none" />
    </div>
    <a className="[text-decoration:none] self-stretch flex flex-col items-center justify-center">
      <LoginButton
        text="Log in"
        hugeIconeducationsolidpen="/hugeiconeducationsolidpencil@2x.png"
        icon={false}
        statePrimarySizeDefaultVBorder="unset"
        statePrimarySizeDefaultVTextDecoration="unset"
        statePrimarySizeDefaultVAlignSelf="stretch"
        statePrimarySizeDefaultVPosition="unset"
        statePrimarySizeDefaultVTop="unset"
        statePrimarySizeDefaultVLeft="unset"
        statePrimarySizeDefaultVWidth="unset"
      />
    </a>
  </div>
  );
};

export default LoginMain;
