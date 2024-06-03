import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({ cta, className = "", cTABottom, onCTAClick}) => {

  const cTA1Style = useMemo(() => {
    return {
      bottom: cTABottom,
    };
  }, [cTABottom]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-500 absolute rounded-lg w-[20.938rem] flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
      onClick={onCTAClick}
      style={cTA1Style}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-overline-semibold text-neutral-100 text-center">
        {cta}
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="/hugeiconeducationsolidpencil1@2x.png"
      />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
