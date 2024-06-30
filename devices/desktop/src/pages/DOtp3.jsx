import Property1Desktop1 from "../components/Property1Desktop1";
import StateDefault5 from "../components/StateDefault5";
import OtpAgainCode from "../components/OtpAgainCode";

const DOtp3 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-xl text-neutral-100 font-overline-regular">
      <div className="absolute top-[calc(50%_-_154px)] left-[calc(50%_-_168px)] flex flex-col items-center justify-start gap-[24px]">
        <Property1Desktop1
          text="OTP verification"
          property1DesktopAlignSelf="unset"
          property1DesktopPosition="unset"
          property1DesktopTop="unset"
          property1DesktopLeft="unset"
          property1DesktopWidth="320px"
          property1DesktopBottom="unset"
          property1DesktopHeight="unset"
        />
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="w-[335px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[28px] font-semibold">
              Enter 6-digit code
            </div>
          </div>
          <div className="w-[335px] flex flex-row items-center justify-center text-base">
            <div className="flex-1 relative leading-[24px]">
              Your code was sent to somemail@gmail.com
            </div>
          </div>
        </div>
        <StateDefault5
          stateDefaultWidth="335px"
          stateDefaultGap="13px"
          stateDefaultBorder="unset"
          stateDefaultOutline="unset"
          stateDefaultBackgroundColor="unset"
          otpInputFlex="1"
          otpInputWidth="unset"
          otpInputFlex1="1"
          otpInputWidth1="unset"
          otpInputFlex2="1"
          otpInputWidth2="unset"
          otpInputFlex3="1"
          otpInputWidth3="unset"
          otpInputFlex4="1"
          otpInputWidth4="unset"
          otpInputFlex5="1"
          otpInputWidth5="unset"
        />
        <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="w-[123px] flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[24px]">
              Resend code 21s
            </div>
          </div>
          <OtpAgainCode
            askAgain=" Send again"
            otpAgainCodeAlignSelf="unset"
            otpAgainCodeWidth="335px"
            askAgainTextDecoration="unset"
          />
        </div>
      </div>
      <img
        className="cursor-pointer hover:opacity-80 absolute top-[56px] left-[48px] w-[9.2px] h-[19.2px]"
        alt=""
        src="/direction-left1.svg"
      />
    </div>
  );
};

export default DOtp3;
