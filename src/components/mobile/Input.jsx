import { useMemo } from "react";
import PropTypes from "prop-types";

const Input = ({
  className = "",
  inputAlignSelf,
  inputPosition,
  inputTop,
  inputLeft,
  inputWidth,
  label,
  hugeIconinterfacesolidinf,
  inputPlaceholder,
  labelAlignSelf,
  labelWidth,
  hugeIconinterfacesolidinf1,
  inputAlignSelf1,
  inputWidth1,
  helperTextWidth,
  hugeIconinterfacesolidinf2,
  hugeIconinterfacesolidinf3,
  hugeIconinterfacesolidinf4,
}) => {
  const inputStyle = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      position: inputPosition,
      top: inputTop,
      left: inputLeft,
      width: inputWidth,
    };
  }, [inputAlignSelf, inputPosition, inputTop, inputLeft, inputWidth]);

  const labelStyle = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  const input1Style = useMemo(() => {
    return {
      alignSelf: inputAlignSelf1,
      width: inputWidth1,
    };
  }, [inputAlignSelf1, inputWidth1]);

  const helperTextStyle = useMemo(() => {
    return {
      width: helperTextWidth,
    };
  }, [helperTextWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
      style={inputStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem]"
        style={labelStyle}
      >
        <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        {!hugeIconinterfacesolidinf && (
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
          />
        )}
      </div>
      <input
        className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-[0.625rem] px-[1rem] text-neutral-600"
        placeholder={inputPlaceholder}
        type="text"
        style={input1Style}
      />
      <div
        className="w-[20.938rem] hidden flex-row items-center justify-center py-[0.25rem] px-[0rem] box-border text-[0.875rem] text-neutral-600"
        style={helperTextStyle}
      >
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  hugeIconinterfacesolidinf: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  hugeIconinterfacesolidinf1: PropTypes.string,
  hugeIconinterfacesolidinf2: PropTypes.string,
  hugeIconinterfacesolidinf3: PropTypes.string,
  hugeIconinterfacesolidinf4: PropTypes.string,

  /** Style props */
  inputAlignSelf: PropTypes.any,
  inputPosition: PropTypes.any,
  inputTop: PropTypes.any,
  inputLeft: PropTypes.any,
  inputWidth: PropTypes.any,
  labelAlignSelf: PropTypes.any,
  labelWidth: PropTypes.any,
  inputAlignSelf1: PropTypes.any,
  inputWidth1: PropTypes.any,
  helperTextWidth: PropTypes.any,
};

export default Input;
