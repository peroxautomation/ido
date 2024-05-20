import IncorrectPassword from "./PasswordErrorMessage";
import ForogorPassword from "./ForgotPasswordLogin";
import OnboardingInput from "./OnboardingInput";
import LoginButton from "./LoginButton";

/**
 * Login page main component
 * @returns A JSX element
 */
const LoginMain = () => {

  /********************************{event listeners}********************************* */
  const onClick = (event) => {
    //TODO: Add password validation here
    const password = document.getElementById("loginPass").value;
    const errMsg = document.getElementById("loginPasswordError");
    if (!password)
    {
      if(errMsg.classList.contains('hidden'))
        errMsg.classList.remove('hidden');
    }
    else {
      if(!errMsg.classList.contains('hidden'))
        errMsg.classList.add('hidden');
    }
  }

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
    <div className="self-stretch flex flex-col items-start justify-start">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <OnboardingInput
          label="Email"
          inputplaceholder="Enter your email"
          type="email"
          name="email"
        />
        <OnboardingInput
          label="Password"
          inputplaceholder="Enter your password"
          type="password"
          name="password"
          id="loginPass"
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
        onCTAClick = {onClick}
      />
    </a>
  </div>
  );
};

export default LoginMain;
