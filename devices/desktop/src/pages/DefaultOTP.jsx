import StateDefault5 from "../components/StateDefault5";
import OtpAgainCode from "../components/OtpAgainCode";
import VariantDefault1 from "../components/VariantDefault1";

const DefaultOTP = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1133px] overflow-hidden text-center text-21xl text-neutral-100 font-overline-regular">
      <div className="absolute w-[calc(100%_-_409px)] top-[411px] right-[205px] left-[204px] flex flex-col items-center justify-start gap-[24px]">
        <div className="w-[541px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[48px]">
            Enter 6-digit code
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-5xl">
          <div className="w-[335px] relative leading-[32px] inline-block shrink-0">
            Your code was sended to somemail@gmail.com
          </div>
        </div>
        <StateDefault5
          stateDefaultWidth="unset"
          stateDefaultGap="13px"
          stateDefaultBorder="unset"
          stateDefaultOutline="unset"
          stateDefaultBackgroundColor="unset"
          otpInputFlex="unset"
          otpInputWidth="45px"
          otpInputFlex1="unset"
          otpInputWidth1="45px"
          otpInputFlex2="unset"
          otpInputWidth2="45px"
          otpInputFlex3="unset"
          otpInputWidth3="45px"
          otpInputFlex4="unset"
          otpInputWidth4="45px"
          otpInputFlex5="unset"
          otpInputWidth5="45px"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[24px]">
              Resend code 21s
            </div>
          </div>
          <OtpAgainCode
            askAgain=" Ask again"
            otpAgainCodeAlignSelf="stretch"
            otpAgainCodeWidth="unset"
            askAgainTextDecoration="unset"
          />
        </div>
      </div>
      <VariantDefault1
        text="OTP verification"
        showLayers
        variantDefaultPosition="absolute"
        variantDefaultTop="40px"
        variantDefaultLeft="calc(50% - 348px)"
      />
    </div>
  );
};

export default DefaultOTP;
