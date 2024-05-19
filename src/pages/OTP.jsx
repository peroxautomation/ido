import { useState } from "react";
import OnboardingTitle from "../components/mobile/OnboardingTitle";
import OTPMain from "../components/mobile/OTPMain";

const OTP = () => {

  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [otp, setOtp] = useState('');

  /*************************************************************************************** */
  /********************************{One Time Password Options}**************************** */
  /*************************************************************************************** */
  const [otpNotReceived, setOtpNotReceived] = useState(false);  //User did not receive the code

  return (
    <div className="w-full relative bg-neutral-900 h-[667px] overflow-hidden">
      <OnboardingTitle
        text="OTP verification"
        icon
        hugeIconarrowssoliddirectRight="unset"
        hugeIconarrowssoliddirectLeft="calc(50% - 167.5px)"
        hugeIconarrowssoliddirectWidth="335px"
      />
      <OTPMain />
    </div>
  );
};

export default OTP;
