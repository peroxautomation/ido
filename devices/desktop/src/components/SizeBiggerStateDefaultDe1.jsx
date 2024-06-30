import { useMemo } from "react";

const SizeBiggerStateDefaultDe1 = (props) => {
  const {
    className = "",
    labelText = "Label",
    hugeIconmultimediaAndAudi,
    inputText = "Dropdown",
    hugeIconarrowssoliddirect,
    helperText = "Helper text",
    label = true,
    leftIcon = true,
    rightIcon = true,
    showInput,
    sizeBiggerStateDefaultDeWidth,
    sizeBiggerStateDefaultDePosition,
    sizeBiggerStateDefaultDeTop,
    sizeBiggerStateDefaultDeLeft,
    sizeBiggerStateDefaultDeAlignSelf,
    sizeBiggerStateDefaultDeHeight,
    labelWidth,
    labelAlignSelf,
    inputAlignSelf,
    inputWidth,
    hugeIconmultimediaAndAudiOverflow,
    dropdownColor,
    helperTextWidth,
    helperTextAlignSelf,
    helperTextColor,
    onClick,
  } = props;
  const sizeBiggerStateDefaultDeStyle = useMemo(() => {
    return {
      width: sizeBiggerStateDefaultDeWidth,
      position: sizeBiggerStateDefaultDePosition,
      top: sizeBiggerStateDefaultDeTop,
      left: sizeBiggerStateDefaultDeLeft,
      alignSelf: sizeBiggerStateDefaultDeAlignSelf,
      height: sizeBiggerStateDefaultDeHeight,
    };
  }, [
    sizeBiggerStateDefaultDeWidth,
    sizeBiggerStateDefaultDePosition,
    sizeBiggerStateDefaultDeTop,
    sizeBiggerStateDefaultDeLeft,
    sizeBiggerStateDefaultDeAlignSelf,
    sizeBiggerStateDefaultDeHeight,
  ]);

  const label2Style = useMemo(() => {
    return {
      width: labelWidth,
      alignSelf: labelAlignSelf,
    };
  }, [labelWidth, labelAlignSelf]);

  const input2Style = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      width: inputWidth,
    };
  }, [inputAlignSelf, inputWidth]);

  const hugeIconmultimediaAndAudioStyle = useMemo(() => {
    return {
      overflow: hugeIconmultimediaAndAudiOverflow,
    };
  }, [hugeIconmultimediaAndAudiOverflow]);

  const dropdownStyle = useMemo(() => {
    return {
      color: dropdownColor,
    };
  }, [dropdownColor]);

  const helperText3Style = useMemo(() => {
    return {
      width: helperTextWidth,
      alignSelf: helperTextAlignSelf,
    };
  }, [helperTextWidth, helperTextAlignSelf]);

  const helperText4Style = useMemo(() => {
    return {
      color: helperTextColor,
    };
  }, [helperTextColor]);

  return (
    <div
      className={`cursor-pointer hover:opacity-80 flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={sizeBiggerStateDefaultDeStyle}
      onClick={onClick}
    >
      {label && (
        <div
          className="w-[340px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border"
          style={label2Style}
        >
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      {showInput && (
        <div
          className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]"
          style={input2Style}
        >
          {leftIcon && (
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src={hugeIconmultimediaAndAudi}
              style={hugeIconmultimediaAndAudioStyle}
            />
          )}
          <div className="flex-1 relative leading-[24px]" style={dropdownStyle}>
            {inputText}
          </div>
          {rightIcon && (
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src={hugeIconarrowssoliddirect}
            />
          )}
        </div>
      )}
      {helperText && (
        <div
          className="w-[340px] flex flex-row items-center justify-start py-1 px-0 box-border text-sm"
          style={helperText3Style}
        >
          <div
            className="flex-1 relative leading-[20px]"
            style={helperText4Style}
          >
            {helperText}
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeBiggerStateDefaultDe1;
