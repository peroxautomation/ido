import { useMemo } from "react";
import PropTypes from "prop-types";

const StateInactiveSizeSmallDe = ({
  className = "",
  labelText = "Label",
  hugeIconinterfacesolidinf,
  inputText = "Input",
  label = true,
  infoIcon = true,
  helperText = "Helper text",
  showInput,
  stateInactiveSizeSmallDeFlex,
  inputAndWordBorder,
  inputAndWordOutline,
  inputAndWordFontFamily,
  inputAndWordFontSize,
  inputAndWordBackgroundColor,
  inputAndWordColor,
  inputFlex,
  inputPosition,
  inputFontSize,
  inputLineHeight,
  inputFontFamily,
  inputColor,
  inputTextAlign,
  inputWidth,
  inputFlexDirection,
  inputPadding,
  helperTextWidth,
  helperTextFlexDirection,
  helperTextPadding,
  helperTextFlex,
  helperTextPosition,
  helperTextFontSize,
  helperTextLineHeight,
  helperTextFontFamily,
  helperTextColor,
  helperTextTextAlign,
}) => {
  const stateInactiveSizeSmallDeStyle = useMemo(() => {
    return {
      flex: stateInactiveSizeSmallDeFlex,
    };
  }, [stateInactiveSizeSmallDeFlex]);

  const inputAndWordStyle = useMemo(() => {
    return {
      border: inputAndWordBorder,
      outline: inputAndWordOutline,
      fontFamily: inputAndWordFontFamily,
      fontSize: inputAndWordFontSize,
      backgroundColor: inputAndWordBackgroundColor,
      color: inputAndWordColor,
    };
  }, [
    inputAndWordBorder,
    inputAndWordOutline,
    inputAndWordFontFamily,
    inputAndWordFontSize,
    inputAndWordBackgroundColor,
    inputAndWordColor,
  ]);

  const input1Style = useMemo(() => {
    return {
      flex: inputFlex,
      position: inputPosition,
      fontSize: inputFontSize,
      lineHeight: inputLineHeight,
      fontFamily: inputFontFamily,
      color: inputColor,
      textAlign: inputTextAlign,
      width: inputWidth,
      flexDirection: inputFlexDirection,
      padding: inputPadding,
    };
  }, [
    inputFlex,
    inputPosition,
    inputFontSize,
    inputLineHeight,
    inputFontFamily,
    inputColor,
    inputTextAlign,
    inputWidth,
    inputFlexDirection,
    inputPadding,
  ]);

  const helperText1Style = useMemo(() => {
    return {
      width: helperTextWidth,
      flexDirection: helperTextFlexDirection,
      padding: helperTextPadding,
      flex: helperTextFlex,
      position: helperTextPosition,
      fontSize: helperTextFontSize,
      lineHeight: helperTextLineHeight,
      fontFamily: helperTextFontFamily,
      color: helperTextColor,
      textAlign: helperTextTextAlign,
    };
  }, [
    helperTextWidth,
    helperTextFlexDirection,
    helperTextPadding,
    helperTextFlex,
    helperTextPosition,
    helperTextFontSize,
    helperTextLineHeight,
    helperTextFontFamily,
    helperTextColor,
    helperTextTextAlign,
  ]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-neutral-600 font-overline-regular ${className}`}
      style={stateInactiveSizeSmallDeStyle}
    >
      {label && (
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1 text-neutral-100">
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
          {infoIcon && (
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src={hugeIconinterfacesolidinf}
            />
          )}
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4">
        <div
          className="flex-1 flex flex-row items-center justify-start"
          style={inputAndWordStyle}
        >
          {showInput && (
            <div className="flex-1 relative leading-[24px]" style={input1Style}>
              {inputText}
            </div>
          )}
        </div>
      </div>
      {helperText && (
        <div
          className="w-40 flex flex-row items-center justify-start py-1 px-0 box-border text-sm"
          style={helperText1Style}
        >
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

StateInactiveSizeSmallDe.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  hugeIconinterfacesolidinf: PropTypes.string,
  inputText: PropTypes.string,
  label: PropTypes.bool,
  infoIcon: PropTypes.bool,
  helperText: PropTypes.string,
  showInput: PropTypes.bool,

  /** Style props */
  stateInactiveSizeSmallDeFlex: PropTypes.any,
  inputAndWordBorder: PropTypes.any,
  inputAndWordOutline: PropTypes.any,
  inputAndWordFontFamily: PropTypes.any,
  inputAndWordFontSize: PropTypes.any,
  inputAndWordBackgroundColor: PropTypes.any,
  inputAndWordColor: PropTypes.any,
  inputFlex: PropTypes.any,
  inputPosition: PropTypes.any,
  inputFontSize: PropTypes.any,
  inputLineHeight: PropTypes.any,
  inputFontFamily: PropTypes.any,
  inputColor: PropTypes.any,
  inputTextAlign: PropTypes.any,
  inputWidth: PropTypes.any,
  inputFlexDirection: PropTypes.any,
  inputPadding: PropTypes.any,
  helperTextWidth: PropTypes.any,
  helperTextFlexDirection: PropTypes.any,
  helperTextPadding: PropTypes.any,
  helperTextFlex: PropTypes.any,
  helperTextPosition: PropTypes.any,
  helperTextFontSize: PropTypes.any,
  helperTextLineHeight: PropTypes.any,
  helperTextFontFamily: PropTypes.any,
  helperTextColor: PropTypes.any,
  helperTextTextAlign: PropTypes.any,
};

export default StateInactiveSizeSmallDe;
