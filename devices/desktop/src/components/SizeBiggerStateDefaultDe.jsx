import { useMemo } from "react";
import PropTypes from "prop-types";

const SizeBiggerStateDefaultDe = ({
  className = "",
  labelText = "Label",
  inputText = "Dropdown",
  helperText = "Helper text",
  label = true,
  leftIcon = true,
  rightIcon = true,
  inputAlignSelf,
  inputWidth,
}) => {
  const inputStyle = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      width: inputWidth,
    };
  }, [inputAlignSelf, inputWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      {label && (
        <div className="w-[340px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      <div
        className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]"
        style={inputStyle}
      >
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
          />
        )}
        <div className="flex-1 relative leading-[24px]">{inputText}</div>
        {rightIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconarrowssoliddirectiondown-01.svg"
          />
        )}
      </div>
      {helperText && (
        <div className="w-[340px] flex flex-row items-center justify-start py-1 px-0 box-border text-sm">
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

SizeBiggerStateDefaultDe.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  inputText: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.bool,
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,

  /** Style props */
  inputAlignSelf: PropTypes.any,
  inputWidth: PropTypes.any,
};

export default SizeBiggerStateDefaultDe;
