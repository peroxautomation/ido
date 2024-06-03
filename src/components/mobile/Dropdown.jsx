import { useMemo } from "react";
import PropTypes from "prop-types";

const Dropdown = ({
  onCTAClick,
  className = "",
  showLabel,
  labelAlignSelf,
  labelWidth,
  label,
  dropdown,
  dropdownAlignSelf,
  inputAlignSelf,
  inputWidth,
  dropdownPosition,
  dropdownTop,
  dropdownLeft,
}) => {
  const label1Style = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  const dropdownStyle = useMemo(() => {
    return {
      alignSelf: dropdownAlignSelf,
      position: dropdownPosition,
      top: dropdownTop,
      left: dropdownLeft,
    };
  }, [dropdownAlignSelf, dropdownPosition, dropdownTop, dropdownLeft]);

  const input2Style = useMemo(() => {
    return {
      alignSelf: inputAlignSelf,
      width: inputWidth,
    };
  }, [inputAlignSelf, inputWidth]);

  return (
    <div
      onClick={onCTAClick}
      className={`self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
      style={dropdownStyle}
    >
      {showLabel && (
        <div
          className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem]"
          style={label1Style}
        >
          <div className="flex-1 relative leading-[1.5rem]">{label}</div>
        </div>
      )}
      <div
        className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem]"
        style={input2Style}
      >
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">{dropdown}</div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  dropdown: PropTypes.string,

  /** Style props */
  labelAlignSelf: PropTypes.any,
  labelWidth: PropTypes.any,
  dropdownAlignSelf: PropTypes.any,
  inputAlignSelf: PropTypes.any,
  inputWidth: PropTypes.any,
  dropdownPosition: PropTypes.any,
  dropdownTop: PropTypes.any,
  dropdownLeft: PropTypes.any,
};

export default Dropdown;
