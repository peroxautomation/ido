import OnboardingTitle from "../components/mobile/OnboardingTitle";
import ForgotPasswordMain from "../components/mobile/ForgotPasswordMain";
import { useState } from "react";

const ForgotPassword = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [email, setEmail] = useState("");

  return (
    <div className="w-full relative bg-neutral-900 h-[667px] overflow-hidden">
      <OnboardingTitle text="Forgot password" icon />
      <ForgotPasswordMain />
    </div>
  );
};

export default ForgotPassword;
