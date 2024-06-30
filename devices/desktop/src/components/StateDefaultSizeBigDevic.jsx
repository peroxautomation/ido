import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefaultSizeBigDevic = ({
  className = "",
  labelText = "Label",
  hugeIconinterfacesolidinf,
  inputText = "Input",
  hugeIconinterfacesolideye,
  label = true,
  eye = true,
  infoIcon = true,
  helperText = "Helper text",
  showInputAndWord,
  showInput,
  stateDefaultSizeBigDevicAlignSelf,
  stateDefaultSizeBigDevicWidth,
  stateDefaultSizeBigDevicPosition,
  stateDefaultSizeBigDevicTop,
  stateDefaultSizeBigDevicRight,
  stateDefaultSizeBigDevicLeft,
  inputGap,
  inputBorder,
  inputOutline,
  inputFontFamily,
  inputFontSize,
  inputColor,
  inputAndWordFlex,
  inputAndWordWidth,
  inputAndWordPadding,
  inputAndWordBorder,
  inputAndWordOutline,
  inputAndWordFontFamily,
  inputAndWordFontSize,
  inputAndWordBackgroundColor,
  inputAndWordColor,
  inputColor1,
  inputLineHeight,
  inputTextAlign,
  inputFlex,
  inputFontSize1,
  inputFontFamily1,
  inputWidth,
  inputHeight,
  inputOverflow,
  hugeIconinterfacesolideyeWidth,
  hugeIconinterfacesolideyePosition,
  hugeIconinterfacesolideyeHeight,
  hugeIconinterfacesolideyeOverflow,
  hugeIconinterfacesolideyeFlexDirection,
  hugeIconinterfacesolideyePadding,
  helperTextAlignSelf,
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
  helperTextColor1,
}) => {
  const stateDefaultSizeBigDevicStyle = useMemo(() => {
    return {
      alignSelf: stateDefaultSizeBigDevicAlignSelf,
      width: stateDefaultSizeBigDevicWidth,
      position: stateDefaultSizeBigDevicPosition,
      top: stateDefaultSizeBigDevicTop,
      right: stateDefaultSizeBigDevicRight,
      left: stateDefaultSizeBigDevicLeft,
    };
  }, [
    stateDefaultSizeBigDevicAlignSelf,
    stateDefaultSizeBigDevicWidth,
    stateDefaultSizeBigDevicPosition,
    stateDefaultSizeBigDevicTop,
    stateDefaultSizeBigDevicRight,
    stateDefaultSizeBigDevicLeft,
  ]);

  const input3Style = useMemo(() => {
    return {
      gap: inputGap,
      border: inputBorder,
      outline: inputOutline,
      fontFamily: inputFontFamily,
      fontSize: inputFontSize,
      color: inputColor,
    };
  }, [
    inputGap,
    inputBorder,
    inputOutline,
    inputFontFamily,
    inputFontSize,
    inputColor,
  ]);

  const inputAndWord1Style = useMemo(() => {
    return {
      flex: inputAndWordFlex,
      width: inputAndWordWidth,
      padding: inputAndWordPadding,
      border: inputAndWordBorder,
      outline: inputAndWordOutline,
      fontFamily: inputAndWordFontFamily,
      fontSize: inputAndWordFontSize,
      backgroundColor: inputAndWordBackgroundColor,
      color: inputAndWordColor,
    };
  }, [
    inputAndWordFlex,
    inputAndWordWidth,
    inputAndWordPadding,
    inputAndWordBorder,
    inputAndWordOutline,
    inputAndWordFontFamily,
    inputAndWordFontSize,
    inputAndWordBackgroundColor,
    inputAndWordColor,
  ]);

  const input4Style = useMemo(() => {
    return {
      color: inputColor1,
      lineHeight: inputLineHeight,
      textAlign: inputTextAlign,
      flex: inputFlex,
      fontSize: inputFontSize1,
      fontFamily: inputFontFamily1,
      width: inputWidth,
      height: inputHeight,
      overflow: inputOverflow,
    };
  }, [
    inputColor1,
    inputLineHeight,
    inputTextAlign,
    inputFlex,
    inputFontSize1,
    inputFontFamily1,
    inputWidth,
    inputHeight,
    inputOverflow,
  ]);

  const hugeIconinterfacesolideyeStyle = useMemo(() => {
    return {
      width: hugeIconinterfacesolideyeWidth,
      position: hugeIconinterfacesolideyePosition,
      height: hugeIconinterfacesolideyeHeight,
      overflow: hugeIconinterfacesolideyeOverflow,
      flexDirection: hugeIconinterfacesolideyeFlexDirection,
      padding: hugeIconinterfacesolideyePadding,
    };
  }, [
    hugeIconinterfacesolideyeWidth,
    hugeIconinterfacesolideyePosition,
    hugeIconinterfacesolideyeHeight,
    hugeIconinterfacesolideyeOverflow,
    hugeIconinterfacesolideyeFlexDirection,
    hugeIconinterfacesolideyePadding,
  ]);

  const helperText5Style = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf,
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
    helperTextAlignSelf,
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

  const helperText6Style = useMemo(() => {
    return {
      color: helperTextColor1,
    };
  }, [helperTextColor1]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateDefaultSizeBigDevicStyle}
    >
      {label && (
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
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
      <div
        className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-center"
        style={input3Style}
      >
        {showInputAndWord && (
          <div
            className="flex-1 flex flex-row items-center justify-start"
            style={inputAndWord1Style}
          >
            {showInput && (
              <div className="relative leading-[24px]" style={input4Style}>
                {inputText}
              </div>
            )}
          </div>
        )}
        {eye && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfacesolideye}
            style={hugeIconinterfacesolideyeStyle}
          />
        )}
      </div>
      {helperText && (
        <div
          className="self-stretch flex flex-row items-center justify-center py-1 px-0 text-sm"
          style={helperText5Style}
        >
          <div
            className="flex-1 relative leading-[20px]"
            style={helperText6Style}
          >
            {helperText}
          </div>
        </div>
      )}
    </div>
  );
};

StateDefaultSizeBigDevic.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  hugeIconinterfacesolidinf: PropTypes.string,
  inputText: PropTypes.string,
  hugeIconinterfacesolideye: PropTypes.string,
  label: PropTypes.bool,
  eye: PropTypes.bool,
  infoIcon: PropTypes.bool,
  helperText: PropTypes.string,
  showInputAndWord: PropTypes.bool,
  showInput: PropTypes.bool,

  /** Style props */
  stateDefaultSizeBigDevicAlignSelf: PropTypes.any,
  stateDefaultSizeBigDevicWidth: PropTypes.any,
  stateDefaultSizeBigDevicPosition: PropTypes.any,
  stateDefaultSizeBigDevicTop: PropTypes.any,
  stateDefaultSizeBigDevicRight: PropTypes.any,
  stateDefaultSizeBigDevicLeft: PropTypes.any,
  inputGap: PropTypes.any,
  inputBorder: PropTypes.any,
  inputOutline: PropTypes.any,
  inputFontFamily: PropTypes.any,
  inputFontSize: PropTypes.any,
  inputColor: PropTypes.any,
  inputAndWordFlex: PropTypes.any,
  inputAndWordWidth: PropTypes.any,
  inputAndWordPadding: PropTypes.any,
  inputAndWordBorder: PropTypes.any,
  inputAndWordOutline: PropTypes.any,
  inputAndWordFontFamily: PropTypes.any,
  inputAndWordFontSize: PropTypes.any,
  inputAndWordBackgroundColor: PropTypes.any,
  inputAndWordColor: PropTypes.any,
  inputColor1: PropTypes.any,
  inputLineHeight: PropTypes.any,
  inputTextAlign: PropTypes.any,
  inputFlex: PropTypes.any,
  inputFontSize1: PropTypes.any,
  inputFontFamily1: PropTypes.any,
  inputWidth: PropTypes.any,
  inputHeight: PropTypes.any,
  inputOverflow: PropTypes.any,
  hugeIconinterfacesolideyeWidth: PropTypes.any,
  hugeIconinterfacesolideyePosition: PropTypes.any,
  hugeIconinterfacesolideyeHeight: PropTypes.any,
  hugeIconinterfacesolideyeOverflow: PropTypes.any,
  hugeIconinterfacesolideyeFlexDirection: PropTypes.any,
  hugeIconinterfacesolideyePadding: PropTypes.any,
  helperTextAlignSelf: PropTypes.any,
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
  helperTextColor1: PropTypes.any,
};

export default StateDefaultSizeBigDevic;
