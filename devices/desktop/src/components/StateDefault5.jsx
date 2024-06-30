import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefault5 = ({
  className = "",
  stateDefaultWidth,
  stateDefaultGap,
  stateDefaultBorder,
  stateDefaultOutline,
  stateDefaultBackgroundColor,
  otpInputFlex,
  otpInputWidth,
  isError,
}) => {
  const stateDefault1Style = useMemo(() => {
    return {
      width: stateDefaultWidth,
      gap: stateDefaultGap,
      border: stateDefaultBorder,
      outline: stateDefaultOutline,
      backgroundColor: stateDefaultBackgroundColor,
    };
  }, [
    stateDefaultWidth,
    stateDefaultGap,
    stateDefaultBorder,
    stateDefaultOutline,
    stateDefaultBackgroundColor,
  ]);

  const otpInputStyle = useMemo(() => {
    return {
      flex: otpInputFlex,
      width: otpInputWidth,
    };
  }, [otpInputFlex, otpInputWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-base text-danger-500 font-overline-regular ${className}`}
    >
      <div
        className={`flex flex-row items-start justify-start gap-[13px] ${className}`}
        style={stateDefault1Style}
      >
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="1"
          type="text"
          style={otpInputStyle}
        />
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="2"
          type="text"
          style={otpInputStyle}
        />
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="3"
          type="text"
          style={otpInputStyle}
        />
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="4"
          type="text"
          style={otpInputStyle}
        />
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="5"
          type="text"
          style={otpInputStyle}
        />
        <input
          className={`font-overline-regular text-base leading-[24px] placeholder:text-white-16 text-neutral-100 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden`}
          placeholder="6"
          type="text"
          style={otpInputStyle}
        />
      </div>
      {isError && (
        <div className="self-stretch relative leading-[24px]">
          {"Incorrect OTP"}
        </div>
      )}
    </div>
  );
};

StateDefault5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  stateDefaultWidth: PropTypes.any,
  stateDefaultGap: PropTypes.any,
  stateDefaultBorder: PropTypes.any,
  stateDefaultOutline: PropTypes.any,
  stateDefaultBackgroundColor: PropTypes.any,
  otpInputFlex: PropTypes.any,
  otpInputWidth: PropTypes.any,
  otpInputFlex1: PropTypes.any,
  otpInputWidth1: PropTypes.any,
  otpInputFlex2: PropTypes.any,
  otpInputWidth2: PropTypes.any,
  otpInputFlex3: PropTypes.any,
  otpInputWidth3: PropTypes.any,
  otpInputFlex4: PropTypes.any,
  otpInputWidth4: PropTypes.any,
  otpInputFlex5: PropTypes.any,
  otpInputWidth5: PropTypes.any,
};

export default StateDefault5;
