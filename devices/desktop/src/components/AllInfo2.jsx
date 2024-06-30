import Property1Desktop1 from "./Property1Desktop1";
import StateFilled1 from "./StateFilled1";
import OtpAgainCode from "./OtpAgainCode";
import PropTypes from "prop-types";

const AllInfo2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_170px)] left-[calc(50%_-_168px)] flex flex-col items-center justify-start gap-[24px] text-center text-xl text-neutral-100 font-overline-regular ${className}`}
    >
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
        stateFilledAlignSelf="unset"
        oTPInputsGap="13px"
        oTPInputsBorder="1px solid #000"
        oTPInputsOutline="unset"
        oTPInputsFontFamily="unset"
        oTPInputsFontSize="unset"
        oTPInputsBackgroundColor="unset"
        oTPInputsPadding="unset"
        oTPInputsColor="unset"
        otpInputBorder="unset"
        otpInputOutline="unset"
        otpInputFontFamily="Nunito"
        otpInputFontSize="16px"
        otpInputPadding="unset"
        otpInputColor="#cc240e"
        otpInputWidth="unset"
        otpInputBorderRadius="unset"
        otpInputBackgroundColor="unset"
        otpInputHeight="unset"
        otpInputOverflow="unset"
        otpInputAlignSelf="stretch"
        otpInputLineHeight="24px"
        otpInputTextAlign="left"
      />
      <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
        <div className="w-[335px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">Resend code 21s</div>
        </div>
        <OtpAgainCode
          askAgain=" Send again"
          otpAgainCodeAlignSelf="unset"
          otpAgainCodeWidth="335px"
          askAgainTextDecoration="none"
        />
      </div>
    </div>
  );
};

AllInfo2.propTypes = {
  className: PropTypes.string,
};

export default AllInfo2;
