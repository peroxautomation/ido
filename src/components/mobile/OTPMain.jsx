import { useCallback } from "react";
import OTPInputs from "./OTPInputs";
import OtpCodeAgain from "./OtpCodeAgain";

const OTPMain = () => {
  const onAskAgainTextClick = useCallback(() => {
    //TODO: Call send validation code API
  }, []);

  return (
    <section className="absolute top-[108px] left-[calc(50%_-_167.5px)] flex flex-col items-center justify-start gap-[24px] text-center text-xl text-white font-button-2-semibold">
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="w-[335px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[28px] font-semibold">
            Enter 6-digit code
          </div>
        </div>
        <div className="w-[335px] flex flex-row items-center justify-center text-base">
          <div className="flex-1 relative leading-[24px]">
            Your code was sended to somemail@gmail.com
          </div>
        </div>
      </div>
      <OTPInputs />
      <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
        <div className="w-[335px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">Resend code 21s</div>
        </div>
        <OtpCodeAgain onAskAgainTextClick={onAskAgainTextClick} />
      </div>
    </section>
  );
};

export default OTPMain;
