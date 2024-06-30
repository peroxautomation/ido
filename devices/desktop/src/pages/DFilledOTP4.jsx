import Property1Desktop1 from "../components/Property1Desktop1";
import StateFilled1 from "../components/StateFilled1";
import OtpAgainCode from "../components/OtpAgainCode";

const DFilledOTP4 = () => {
  return (
    <div className="w-full relative bg-neutral-900 h-[1024px] overflow-hidden text-center text-xl text-neutral-100 font-overline-regular">
      <div className="absolute top-[calc(50%_-_170px)] left-[calc(50%_-_168px)] flex flex-col items-center justify-start gap-[24px]">
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
        <StateFilled1
          prop="5"
          prop1="5"
          prop2="5"
          text="Incorrect OTP"
          showIncorrectOTP
          stateFilledAlignSelf="unset"
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
          incorrectOTPAlignSelf="stretch"
          incorrectOTPWidth="unset"
        />
        <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
          <div className="w-[335px] flex flex-row items-center justify-center">
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
    </div>
  );
};

export default DFilledOTP4;
