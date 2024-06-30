import { useMemo } from "react";
import StateFilled2 from "./StateFilled2";
import PropTypes from "prop-types";

const StateFilled1 = ({
  className = "",
  prop,
  prop1,
  prop2,
  text = "Incorrect OTP",
  showIncorrectOTP = true,
  stateFilledAlignSelf,
  oTPInputsGap,
  oTPInputsBorder,
  oTPInputsOutline,
  oTPInputsFontFamily,
  oTPInputsFontSize,
  oTPInputsBackgroundColor,
  oTPInputsPadding,
  oTPInputsColor,
  otpInputBorder,
  otpInputOutline,
  otpInputFontFamily,
  otpInputFontSize,
  otpInputPadding,
  otpInputColor,
  otpInputWidth,
  otpInputBorderRadius,
  otpInputBackgroundColor,
  otpInputHeight,
  otpInputOverflow,
  otpInputAlignSelf,
  otpInputLineHeight,
  otpInputTextAlign,
  divPosition,
  divTop,
  divLeft,
  divLineHeight,
  divTextAlign,
  divBorder,
  divOutline,
  divBackgroundColor,
  divWidth,
  divBorderRadius,
  divHeight,
  divOverflow,
  divPadding,
  otpInputBorder1,
  otpInputOutline1,
  otpInputFontFamily1,
  otpInputFontSize1,
  otpInputPadding1,
  otpInputColor1,
  divPosition1,
  divTop1,
  divLeft1,
  divLineHeight1,
  divTextAlign1,
  divBorder1,
  divOutline1,
  divBackgroundColor1,
  divWidth1,
  divBorderRadius1,
  divHeight1,
  divOverflow1,
  divPadding1,
  otpInputBorder2,
  otpInputOutline2,
  otpInputFontFamily2,
  otpInputFontSize2,
  otpInputPadding2,
  otpInputColor2,
  divPosition2,
  divTop2,
  divLeft2,
  divLineHeight2,
  divTextAlign2,
  divBorder2,
  divOutline2,
  divBackgroundColor2,
  divWidth2,
  divBorderRadius2,
  divHeight2,
  divOverflow2,
  divPadding2,
  otpInputWidth1,
  otpInputBorderRadius1,
  otpInputBackgroundColor1,
  otpInputHeight1,
  otpInputOverflow1,
  otpInputAlignSelf1,
  otpInputFontSize3,
  otpInputLineHeight1,
  otpInputFontFamily3,
  otpInputColor3,
  otpInputTextAlign1,
  incorrectOTPAlignSelf,
  incorrectOTPWidth,
}) => {
  const stateFilledStyle = useMemo(() => {
    return {
      alignSelf: stateFilledAlignSelf,
    };
  }, [stateFilledAlignSelf]);

  const oTPInputsStyle = useMemo(() => {
    return {
      gap: oTPInputsGap,
      border: oTPInputsBorder,
      outline: oTPInputsOutline,
      fontFamily: oTPInputsFontFamily,
      fontSize: oTPInputsFontSize,
      backgroundColor: oTPInputsBackgroundColor,
      padding: oTPInputsPadding,
      color: oTPInputsColor,
    };
  }, [
    oTPInputsGap,
    oTPInputsBorder,
    oTPInputsOutline,
    oTPInputsFontFamily,
    oTPInputsFontSize,
    oTPInputsBackgroundColor,
    oTPInputsPadding,
    oTPInputsColor,
  ]);

  const stateFilled1Style = useMemo(() => {
    return {
      border: otpInputBorder,
      outline: otpInputOutline,
      fontFamily: otpInputFontFamily,
      fontSize: otpInputFontSize,
      padding: otpInputPadding,
      color: otpInputColor,
      width: otpInputWidth,
      borderRadius: otpInputBorderRadius,
      backgroundColor: otpInputBackgroundColor,
      height: otpInputHeight,
      overflow: otpInputOverflow,
      alignSelf: otpInputAlignSelf,
      lineHeight: otpInputLineHeight,
      textAlign: otpInputTextAlign,
    };
  }, [
    otpInputBorder,
    otpInputOutline,
    otpInputFontFamily,
    otpInputFontSize,
    otpInputPadding,
    otpInputColor,
    otpInputWidth,
    otpInputBorderRadius,
    otpInputBackgroundColor,
    otpInputHeight,
    otpInputOverflow,
    otpInputAlignSelf,
    otpInputLineHeight,
    otpInputTextAlign,
  ]);

  const div8Style = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
      lineHeight: divLineHeight,
      textAlign: divTextAlign,
      border: divBorder,
      outline: divOutline,
      backgroundColor: divBackgroundColor,
      width: divWidth,
      borderRadius: divBorderRadius,
      height: divHeight,
      overflow: divOverflow,
      padding: divPadding,
    };
  }, [
    divPosition,
    divTop,
    divLeft,
    divLineHeight,
    divTextAlign,
    divBorder,
    divOutline,
    divBackgroundColor,
    divWidth,
    divBorderRadius,
    divHeight,
    divOverflow,
    divPadding,
  ]);

  const stateFilled1Style1 = useMemo(() => {
    return {
      border: otpInputBorder1,
      outline: otpInputOutline1,
      fontFamily: otpInputFontFamily1,
      fontSize: otpInputFontSize1,
      padding: otpInputPadding1,
      color: otpInputColor1,
    };
  }, [
    otpInputBorder1,
    otpInputOutline1,
    otpInputFontFamily1,
    otpInputFontSize1,
    otpInputPadding1,
    otpInputColor1,
  ]);

  const div8Style1 = useMemo(() => {
    return {
      position: divPosition1,
      top: divTop1,
      left: divLeft1,
      lineHeight: divLineHeight1,
      textAlign: divTextAlign1,
      border: divBorder1,
      outline: divOutline1,
      backgroundColor: divBackgroundColor1,
      width: divWidth1,
      borderRadius: divBorderRadius1,
      height: divHeight1,
      overflow: divOverflow1,
      padding: divPadding1,
    };
  }, [
    divPosition1,
    divTop1,
    divLeft1,
    divLineHeight1,
    divTextAlign1,
    divBorder1,
    divOutline1,
    divBackgroundColor1,
    divWidth1,
    divBorderRadius1,
    divHeight1,
    divOverflow1,
    divPadding1,
  ]);

  const stateFilled1Style2 = useMemo(() => {
    return {
      border: otpInputBorder2,
      outline: otpInputOutline2,
      fontFamily: otpInputFontFamily2,
      fontSize: otpInputFontSize2,
      padding: otpInputPadding2,
      color: otpInputColor2,
    };
  }, [
    otpInputBorder2,
    otpInputOutline2,
    otpInputFontFamily2,
    otpInputFontSize2,
    otpInputPadding2,
    otpInputColor2,
  ]);

  const div8Style2 = useMemo(() => {
    return {
      position: divPosition2,
      top: divTop2,
      left: divLeft2,
      lineHeight: divLineHeight2,
      textAlign: divTextAlign2,
      border: divBorder2,
      outline: divOutline2,
      backgroundColor: divBackgroundColor2,
      width: divWidth2,
      borderRadius: divBorderRadius2,
      height: divHeight2,
      overflow: divOverflow2,
      padding: divPadding2,
    };
  }, [
    divPosition2,
    divTop2,
    divLeft2,
    divLineHeight2,
    divTextAlign2,
    divBorder2,
    divOutline2,
    divBackgroundColor2,
    divWidth2,
    divBorderRadius2,
    divHeight2,
    divOverflow2,
    divPadding2,
  ]);

  const stateFilled1Style3 = useMemo(() => {
    return {
      width: otpInputWidth1,
      borderRadius: otpInputBorderRadius1,
      backgroundColor: otpInputBackgroundColor1,
      height: otpInputHeight1,
      overflow: otpInputOverflow1,
      alignSelf: otpInputAlignSelf1,
      fontSize: otpInputFontSize3,
      lineHeight: otpInputLineHeight1,
      fontFamily: otpInputFontFamily3,
      color: otpInputColor3,
      textAlign: otpInputTextAlign1,
    };
  }, [
    otpInputWidth1,
    otpInputBorderRadius1,
    otpInputBackgroundColor1,
    otpInputHeight1,
    otpInputOverflow1,
    otpInputAlignSelf1,
    otpInputFontSize3,
    otpInputLineHeight1,
    otpInputFontFamily3,
    otpInputColor3,
    otpInputTextAlign1,
  ]);

  const incorrectOTPStyle = useMemo(() => {
    return {
      alignSelf: incorrectOTPAlignSelf,
      width: incorrectOTPWidth,
    };
  }, [incorrectOTPAlignSelf, incorrectOTPWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-[8px] text-left text-base text-danger-500 font-overline-regular ${className}`}
      style={stateFilledStyle}
    >
      <div
        className="flex flex-row items-start justify-start gap-[13px]"
        style={oTPInputsStyle}
      >
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
        <StateFilled2
          stateFilledPosition="relative"
          stateFilledBorder="unset"
          stateFilledOutline="unset"
          stateFilledFontFamily="unset"
          stateFilledFontSize="unset"
          stateFilledPadding="unset"
          stateFilledColor="unset"
        />
      </div>
      {showIncorrectOTP && (
        <div
          className="self-stretch relative leading-[24px]"
          style={incorrectOTPStyle}
        >
          {text}
        </div>
      )}
    </div>
  );
};

StateFilled1.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  text: PropTypes.string,
  showIncorrectOTP: PropTypes.bool,

  /** Style props */
  stateFilledAlignSelf: PropTypes.any,
  oTPInputsGap: PropTypes.any,
  oTPInputsBorder: PropTypes.any,
  oTPInputsOutline: PropTypes.any,
  oTPInputsFontFamily: PropTypes.any,
  oTPInputsFontSize: PropTypes.any,
  oTPInputsBackgroundColor: PropTypes.any,
  oTPInputsPadding: PropTypes.any,
  oTPInputsColor: PropTypes.any,
  otpInputBorder: PropTypes.any,
  otpInputOutline: PropTypes.any,
  otpInputFontFamily: PropTypes.any,
  otpInputFontSize: PropTypes.any,
  otpInputPadding: PropTypes.any,
  otpInputColor: PropTypes.any,
  otpInputWidth: PropTypes.any,
  otpInputBorderRadius: PropTypes.any,
  otpInputBackgroundColor: PropTypes.any,
  otpInputHeight: PropTypes.any,
  otpInputOverflow: PropTypes.any,
  otpInputAlignSelf: PropTypes.any,
  otpInputLineHeight: PropTypes.any,
  otpInputTextAlign: PropTypes.any,
  divPosition: PropTypes.any,
  divTop: PropTypes.any,
  divLeft: PropTypes.any,
  divLineHeight: PropTypes.any,
  divTextAlign: PropTypes.any,
  divBorder: PropTypes.any,
  divOutline: PropTypes.any,
  divBackgroundColor: PropTypes.any,
  divWidth: PropTypes.any,
  divBorderRadius: PropTypes.any,
  divHeight: PropTypes.any,
  divOverflow: PropTypes.any,
  divPadding: PropTypes.any,
  otpInputBorder1: PropTypes.any,
  otpInputOutline1: PropTypes.any,
  otpInputFontFamily1: PropTypes.any,
  otpInputFontSize1: PropTypes.any,
  otpInputPadding1: PropTypes.any,
  otpInputColor1: PropTypes.any,
  divPosition1: PropTypes.any,
  divTop1: PropTypes.any,
  divLeft1: PropTypes.any,
  divLineHeight1: PropTypes.any,
  divTextAlign1: PropTypes.any,
  divBorder1: PropTypes.any,
  divOutline1: PropTypes.any,
  divBackgroundColor1: PropTypes.any,
  divWidth1: PropTypes.any,
  divBorderRadius1: PropTypes.any,
  divHeight1: PropTypes.any,
  divOverflow1: PropTypes.any,
  divPadding1: PropTypes.any,
  otpInputBorder2: PropTypes.any,
  otpInputOutline2: PropTypes.any,
  otpInputFontFamily2: PropTypes.any,
  otpInputFontSize2: PropTypes.any,
  otpInputPadding2: PropTypes.any,
  otpInputColor2: PropTypes.any,
  divPosition2: PropTypes.any,
  divTop2: PropTypes.any,
  divLeft2: PropTypes.any,
  divLineHeight2: PropTypes.any,
  divTextAlign2: PropTypes.any,
  divBorder2: PropTypes.any,
  divOutline2: PropTypes.any,
  divBackgroundColor2: PropTypes.any,
  divWidth2: PropTypes.any,
  divBorderRadius2: PropTypes.any,
  divHeight2: PropTypes.any,
  divOverflow2: PropTypes.any,
  divPadding2: PropTypes.any,
  otpInputWidth1: PropTypes.any,
  otpInputBorderRadius1: PropTypes.any,
  otpInputBackgroundColor1: PropTypes.any,
  otpInputHeight1: PropTypes.any,
  otpInputOverflow1: PropTypes.any,
  otpInputAlignSelf1: PropTypes.any,
  otpInputFontSize3: PropTypes.any,
  otpInputLineHeight1: PropTypes.any,
  otpInputFontFamily3: PropTypes.any,
  otpInputColor3: PropTypes.any,
  otpInputTextAlign1: PropTypes.any,
  incorrectOTPAlignSelf: PropTypes.any,
  incorrectOTPWidth: PropTypes.any,
};

export default StateFilled1;
