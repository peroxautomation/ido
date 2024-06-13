import { useCallback, useEffect, useState } from "react";
import Title from "../components/mobile/Title";
import OTPInputs from "../components/mobile/OTPInputs";

/**
 * OTP Page
 * @returns JSX element
 */
const OTP = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [otp, setOtp] = useState("");

  /*************************************************************************************** */
  /********************************{One Time Password Options}**************************** */
  /*************************************************************************************** */
  const [otpNotReceived, setOtpNotReceived] = useState(false);
  const [countDown, setCountDown] = useState(30);

  /**
   * Send OTP passowrd again
   */
  const onAskAgainClick = useCallback(() => {
    sendOTP();
    setOtpNotReceived(true);
  }, [otpNotReceived]);

  /**
   * Send the OTP password
   * TODO: Fix timmer bug. The state does not update on time so countdown is inconsistent
   */
  const sendOTP = () => {
    console.log(countDown);
    if (countDown <= 0) {
      //TODO: Call API & Send code again
      console.log("Sending otp...");
      setCountDown(30);
    }
  };

  /**
   * Send OTP again countdown timer
   * @returns A JSX element
   */
  const Timmer = () => {
    useEffect(() => {
      if (!countDown) return;
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [countDown]);
    return <div>{countDown}</div>;
  };

  /**
   * Update OTP state
   * @param {*} value
   */
  const onOTPEnter = (value) => {
    let otpValue = "";
    if (value != "" && value !== undefined) {
      otpValue.concat(value.toString());
    }
    console.log(otpValue);
  };

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title pageName="OTP verification" returnPage="/forgot-password" />
      <main className="absolute top-[108px] left-[calc(50%_-_167.5px)] flex flex-col items-center justify-start gap-[24px] text-center text-xl text-white font-button-1-semibold">
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[28px] font-semibold">
              Enter 6-digit code
            </div>
          </div>
          <div className="w-[297px] flex flex-row items-center justify-end text-base">
            <div className="flex-1 relative leading-[24px]">
              Your code was sent to somemail@gmail.com
            </div>
          </div>
        </div>
        <OTPInputs onInput={onOTPEnter} />
        <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[24px] flex gap-2">
              Resend code <Timmer></Timmer>
            </div>
          </div>
          <div className="w-[335px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px] text-center text-neutral-200">
            <div className="relative leading-[24px] font-semibold">
              Didin&apos;t get a code?
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-semibold font-button-1-semibold text-primary-500 text-center inline-block"
              onClick={onAskAgainClick}
            >
              Send again
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OTP;
