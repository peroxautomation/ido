import StateFilled1 from "../components/StateFilled1";
import OtpAgainCode from "../components/OtpAgainCode";
import VariantDefault1 from "../components/VariantDefault1";

const FilledOTP3 = () => {
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
        <StateFilled1
          prop="5"
          prop1="5"
          prop2="5"
          text="Incorrect OTP"
          showIncorrectOTP={false}
          stateFilledAlignSelf="stretch"
          oTPInputsGap="13px"
          oTPInputsBorder="unset"
          oTPInputsOutline="unset"
          oTPInputsFontFamily="unset"
          oTPInputsFontSize="unset"
          oTPInputsBackgroundColor="unset"
          oTPInputsPadding="unset"
          oTPInputsColor="unset"
          otpInputBorder="unset"
          otpInputOutline="unset"
          otpInputFontFamily="unset"
          otpInputFontSize="unset"
          otpInputPadding="unset"
          otpInputColor="unset"
          otpInputWidth="45px"
          otpInputBorderRadius="8px"
          otpInputBackgroundColor="rgba(255, 255, 255, 0.16)"
          otpInputHeight="48px"
          otpInputOverflow="hidden"
          otpInputAlignSelf="unset"
          otpInputLineHeight="unset"
          otpInputTextAlign="unset"
          divPosition="absolute"
          divTop="10px"
          divLeft="17px"
          divLineHeight="28px"
          divTextAlign="left"
          divBorder="unset"
          divOutline="unset"
          divBackgroundColor="unset"
          divWidth="unset"
          divBorderRadius="unset"
          divHeight="unset"
          divOverflow="unset"
          divPadding="unset"
          otpInputBorder1="unset"
          otpInputOutline1="unset"
          otpInputFontFamily1="unset"
          otpInputFontSize1="unset"
          otpInputPadding1="unset"
          otpInputColor1="unset"
          divPosition1="absolute"
          divTop1="10px"
          divLeft1="17px"
          divLineHeight1="28px"
          divTextAlign1="left"
          divBorder1="unset"
          divOutline1="unset"
          divBackgroundColor1="unset"
          divWidth1="unset"
          divBorderRadius1="unset"
          divHeight1="unset"
          divOverflow1="unset"
          divPadding1="unset"
          otpInputBorder2="unset"
          otpInputOutline2="unset"
          otpInputFontFamily2="unset"
          otpInputFontSize2="unset"
          otpInputPadding2="unset"
          otpInputColor2="unset"
          divPosition2="absolute"
          divTop2="10px"
          divLeft2="17px"
          divLineHeight2="28px"
          divTextAlign2="left"
          divBorder2="unset"
          divOutline2="unset"
          divBackgroundColor2="unset"
          divWidth2="unset"
          divBorderRadius2="unset"
          divHeight2="unset"
          divOverflow2="unset"
          divPadding2="unset"
          otpInputWidth1="45px"
          otpInputBorderRadius1="8px"
          otpInputBackgroundColor1="rgba(255, 255, 255, 0.16)"
          otpInputHeight1="48px"
          otpInputOverflow1="hidden"
          otpInputAlignSelf1="unset"
          otpInputFontSize3="unset"
          otpInputLineHeight1="unset"
          otpInputFontFamily3="unset"
          otpInputColor3="unset"
          otpInputTextAlign1="unset"
          incorrectOTPAlignSelf="unset"
          incorrectOTPWidth="335px"
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

export default FilledOTP3;
