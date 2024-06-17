import { useMemo } from "react";
import PropTypes from "prop-types";

/**
 * Button 1 inactive component
 * @param {*} param0
 * @returns
 */
const Button1Inactive = ({ className = "", cTA, onCTAClick }) => {
  return (
    <button
      name="create-button-1"
      onClick={onCTAClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-100 absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};


export default Button1Inactive;
