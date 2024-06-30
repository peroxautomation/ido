import { useMemo } from "react";
import Pro from "./Pro";
import PropTypes from "prop-types";

const StateDefault1 = ({
  className = "",
  hugeIconinterfaceoutlineh,
  text = "Home",
  rightIcon = true,
  leftIcon = true,
  stateDefaultBorderRadius,
  stateDefaultBackgroundColor,
  homeColor,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      borderRadius: stateDefaultBorderRadius,
      backgroundColor: stateDefaultBackgroundColor,
    };
  }, [stateDefaultBorderRadius, stateDefaultBackgroundColor]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  return (
    <div
      className={`w-[227px] flex flex-row items-center justify-start py-3 px-4 box-border gap-[8px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={stateDefaultStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[15px]">
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfaceoutlineh}
          />
        )}
        <div className="relative leading-[24px]" style={homeStyle}>
          {text}
        </div>
      </div>
      <Pro />
    </div>
  );
};

StateDefault1.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,
  text: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,

  /** Style props */
  stateDefaultBorderRadius: PropTypes.any,
  stateDefaultBackgroundColor: PropTypes.any,
  homeColor: PropTypes.any,
};

export default StateDefault1;
