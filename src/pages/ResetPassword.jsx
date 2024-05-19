import { useState } from "react";
import OnboardingTitle from "../components/mobile/OnboardingTitle";
import ResetPasswordMain from "../components/mobile/ResetPasswordMain";

const ResetPassword = () => {

  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [password, setPassword] = useState('');   // password
  const [password2, setPassword2] = useState(''); // confirm password

  return (
    <div className="w-full relative bg-neutral-900 h-[667px] overflow-hidden">
      <OnboardingTitle
        text="Reset password"
        icon
        hugeIconarrowssoliddirectRight="20px"
        hugeIconarrowssoliddirectLeft="20px"
        hugeIconarrowssoliddirectWidth="calc(100% - 40px)"
      />
      <ResetPasswordMain />
    </div>
  );
};

export default ResetPassword;
