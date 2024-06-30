import { useMemo } from "react";
import PropTypes from "prop-types";

const StateOffDeviceMobile = ({
  className = "",
  text = "Toggle",
  toggle,
  stateOffDeviceMobileAlignSelf,
  stateOffDeviceMobileWidth,
}) => {
  const stateOffDeviceMobileStyle = useMemo(() => {
    return {
      alignSelf: stateOffDeviceMobileAlignSelf,
      width: stateOffDeviceMobileWidth,
    };
  }, [stateOffDeviceMobileAlignSelf, stateOffDeviceMobileWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateOffDeviceMobileStyle}
    >
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
        <div className="flex-1 relative leading-[24px]">{text}</div>
        <img
          className="w-12 relative rounded-smi h-6 overflow-hidden shrink-0"
          alt=""
          src={toggle}
        />
      </div>
    </div>
  );
};

StateOffDeviceMobile.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  toggle: PropTypes.string,

  /** Style props */
  stateOffDeviceMobileAlignSelf: PropTypes.any,
  stateOffDeviceMobileWidth: PropTypes.any,
};

export default StateOffDeviceMobile;
