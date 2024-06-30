import Property1Desktop1 from "./Property1Desktop1";
import StateDefault5 from "./StateDefault5";
import OtpAgainCode from "./OtpAgainCode";
import PropTypes from "prop-types";

const AllInfo = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_154px)] left-[calc(50%_-_168px)] flex flex-col items-center justify-start gap-[24px] text-center text-xl text-neutral-100 font-overline-regular ${className}`}
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
      <StateDefault5
        stateDefaultWidth="335px"
        stateDefaultGap="unset"
        stateDefaultBorder="none"
        stateDefaultOutline="none"
        stateDefaultBackgroundColor="transparent"
      />
      <div className="flex flex-col items-start justify-start gap-[16px] text-left text-base">
        <div className="w-[123px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">Resend code 21s</div>
        </div>
        <OtpAgainCode
          askAgain=" Send again"
          otpAgainCodeAlignSelf="unset"
          otpAgainCodeWidth="335px"
          askAgainTextDecoration="unset"
        />
      </div>
    </div>
  );
};

AllInfo.propTypes = {
  className: PropTypes.string,
};

export default AllInfo;
