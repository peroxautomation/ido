import { useCallback } from "react";
import Title from "../components/mobile/Title";
import OTPInputs from "../components/mobile/OTPInputs";

const OTP = () => {
  const onAskAgainClick = useCallback(() => {
    //TODO: Call API & Send code again
    console.log("Sending OTP again...")
  }, []);

  return (
    <div className="w-full relative bg-neutral-900 h-[100vh] overflow-hidden">
      <Title
        titleRight="unset"
        pageName="OTP verification"
        returnPage="/forgot-password"
      />
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
        <OTPInputs />
        <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[24px]">
              Resend code 21s
            </div>
          </div>
          <div className="w-[335px] flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px] text-center text-neutral-200">
            <div className="relative leading-[24px] font-semibold">
              Didin’t get a code?
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
