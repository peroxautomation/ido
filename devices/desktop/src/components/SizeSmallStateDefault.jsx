import { useMemo } from "react";
import PropTypes from "prop-types";

const SizeSmallStateDefault = ({
  className = "",
  labelText = "Label",
  inputText = "Dropdown",
  helperText = "Helper text",
  label = true,
  rightIcon = true,
  sizeSmallStateDefaultFlex,
  labelAlignSelf,
  labelWidth,
}) => {
  const sizeSmallStateDefaultStyle = useMemo(() => {
    return {
      flex: sizeSmallStateDefaultFlex,
    };
  }, [sizeSmallStateDefaultFlex]);

  const labelStyle = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={sizeSmallStateDefaultStyle}
    >
      {label && (
        <div
          className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1"
          style={labelStyle}
        >
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
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
        <div className="w-40 flex flex-row items-center justify-start py-1 px-0 box-border text-sm">
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

SizeSmallStateDefault.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  inputText: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.bool,
  rightIcon: PropTypes.bool,

  /** Style props */
  sizeSmallStateDefaultFlex: PropTypes.any,
  labelAlignSelf: PropTypes.any,
  labelWidth: PropTypes.any,
};

export default SizeSmallStateDefault;
