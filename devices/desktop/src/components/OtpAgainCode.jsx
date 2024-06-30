import { useMemo } from "react";
import PropTypes from "prop-types";

const OtpAgainCode = ({
  className = "",
  askAgain,
  otpAgainCodeAlignSelf,
  otpAgainCodeWidth,
  askAgainTextDecoration,
}) => {
  const otpAgainCodeStyle = useMemo(() => {
    return {
      alignSelf: otpAgainCodeAlignSelf,
      width: otpAgainCodeWidth,
    };
  }, [otpAgainCodeAlignSelf, otpAgainCodeWidth]);

  const askAgainStyle = useMemo(() => {
    return {
      textDecoration: askAgainTextDecoration,
    };
  }, [askAgainTextDecoration]);

  return (
    <div
      className={`flex flex-row items-center justify-start py-2 px-0 box-border gap-[8px] text-center text-base text-neutral-200 font-overline-regular self-stretch ${className}`}
      style={otpAgainCodeStyle}
    >
      <div className="relative leading-[24px] font-semibold">
        Didin’t get a code?
      </div>
      <div
        className="relative leading-[24px] font-semibold text-primary-500"
        style={askAgainStyle}
      >
        {askAgain}
      </div>
    </div>
  );
};

OtpAgainCode.propTypes = {
  className: PropTypes.string,
  askAgain: PropTypes.string,

  /** Style props */
  otpAgainCodeAlignSelf: PropTypes.any,
  otpAgainCodeWidth: PropTypes.any,
  askAgainTextDecoration: PropTypes.any,
};

export default OtpAgainCode;
