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
  otpInputFlex1,
  otpInputWidth1,
  otpInputFlex2,
  otpInputWidth2,
  otpInputFlex3,
  otpInputWidth3,
  otpInputFlex4,
  otpInputWidth4,
  otpInputFlex5,
  otpInputWidth5,
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

  const otpInput1Style = useMemo(() => {
    return {
      flex: otpInputFlex1,
      width: otpInputWidth1,
    };
  }, [otpInputFlex1, otpInputWidth1]);

  const otpInput2Style = useMemo(() => {
    return {
      flex: otpInputFlex2,
      width: otpInputWidth2,
    };
  }, [otpInputFlex2, otpInputWidth2]);

  const otpInput3Style = useMemo(() => {
    return {
      flex: otpInputFlex3,
      width: otpInputWidth3,
    };
  }, [otpInputFlex3, otpInputWidth3]);

  const otpInput4Style = useMemo(() => {
    return {
      flex: otpInputFlex4,
      width: otpInputWidth4,
    };
  }, [otpInputFlex4, otpInputWidth4]);

  const otpInput5Style = useMemo(() => {
    return {
      flex: otpInputFlex5,
      width: otpInputWidth5,
    };
  }, [otpInputFlex5, otpInputWidth5]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-[13px] ${className}`}
      style={stateDefault1Style}
    >
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInputStyle}
      />
       <input
        className="font-overline-regular text-base leading-[24px] text-white-16 text-center flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        placeholder="1"
            type="text"
        style={otpInputStyle}
      />
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInput1Style}
      />
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInput2Style}
      />
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInput3Style}
      />
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInput4Style}
      />
      <div
        className="flex-1 relative rounded-lg bg-white-8 h-12 overflow-hidden"
        style={otpInput5Style}
      />
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
