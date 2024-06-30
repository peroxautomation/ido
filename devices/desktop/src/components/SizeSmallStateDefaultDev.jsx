import { useMemo } from "react";
import PropTypes from "prop-types";

const SizeSmallStateDefaultDev = ({
  className = "",
  labelText = "Label",
  inputText = "Dropdown",
  helperText = "Helper text",
  label = true,
  rightIcon = true,
  labelAlignSelf,
  labelWidth,
  helperTextAlignSelf,
  helperTextWidth,
}) => {
  const label1Style = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  const helperText2Style = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf,
      width: helperTextWidth,
    };
  }, [helperTextAlignSelf, helperTextWidth]);

  return (
    <div
      className={`w-40 flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      {label && (
        <div
          className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1"
          style={label1Style}
        >
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      <div className="w-40 rounded-xl bg-white-8 h-11 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[8px]">
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
        <div
          className="self-stretch flex flex-row items-center justify-start py-1 px-0 text-sm"
          style={helperText2Style}
        >
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

SizeSmallStateDefaultDev.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  inputText: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.bool,
  rightIcon: PropTypes.bool,

  /** Style props */
  labelAlignSelf: PropTypes.any,
  labelWidth: PropTypes.any,
  helperTextAlignSelf: PropTypes.any,
  helperTextWidth: PropTypes.any,
};

export default SizeSmallStateDefaultDev;
