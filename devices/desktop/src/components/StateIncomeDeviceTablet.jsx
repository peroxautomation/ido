import { useMemo } from "react";
import PropTypes from "prop-types";

const StateIncomeDeviceTablet = ({
  className = "",
  fromText = "Sofia Kuchenko",
  text = "Today",
  divColor,
}) => {
  const div7Style = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className={`max-w-full flex flex-col items-center justify-center gap-[4px] text-left text-base text-neutral-400 font-overline-regular self-stretch ${className}`}
    >
      <div className="self-stretch relative leading-[24px]">{text}</div>
      <div className="self-stretch flex flex-row items-center justify-between text-xl text-neutral-100">
        <div className="flex-1 relative leading-[28px]">{fromText}</div>
        <div
          className="relative leading-[28px] text-success-500"
          style={div7Style}
        >
          {text}
        </div>
      </div>
      <div className="self-stretch relative leading-[24px]">{text}</div>
    </div>
  );
};

StateIncomeDeviceTablet.propTypes = {
  className: PropTypes.string,
  fromText: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  divColor: PropTypes.any,
};

export default StateIncomeDeviceTablet;
