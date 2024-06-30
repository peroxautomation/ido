import { useMemo } from "react";
import PropTypes from "prop-types";

const StateErrorSizeBigDevice = ({
  className = "",
  labelText = "Label",
  inputText = "Input",
  hugeIconinterfaceoutlinew,
  label = true,
  eye = true,
  helperText = "Helper text",
  helperTextAlignSelf,
  helperTextWidth,
}) => {
  const helperTextStyle = useMemo(() => {
    return {
      alignSelf: helperTextAlignSelf,
      width: helperTextWidth,
    };
  }, [helperTextAlignSelf, helperTextWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-danger-500 font-overline-regular self-stretch ${className}`}
    >
      {label && (
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 text-neutral-100">
          <div className="flex-1 relative leading-[24px]">{labelText}</div>
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-center border-[1px] border-solid border-danger-500">
        <div className="flex-1 flex flex-row items-center justify-start">
          <div className="relative leading-[24px]">{inputText}</div>
        </div>
        {eye && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolideye1.svg"
          />
        )}
      </div>
      {helperText && (
        <div
          className="self-stretch flex flex-row items-center justify-start py-1 px-0 gap-[8px] text-sm"
          style={helperTextStyle}
        >
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfaceoutlinew}
          />
          <div className="flex-1 relative leading-[20px]">{helperText}</div>
        </div>
      )}
    </div>
  );
};

StateErrorSizeBigDevice.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  inputText: PropTypes.string,
  hugeIconinterfaceoutlinew: PropTypes.string,
  label: PropTypes.bool,
  eye: PropTypes.bool,
  helperText: PropTypes.string,

  /** Style props */
  helperTextAlignSelf: PropTypes.any,
  helperTextWidth: PropTypes.any,
};

export default StateErrorSizeBigDevice;
