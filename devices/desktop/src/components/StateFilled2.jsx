import { useMemo } from "react";
import PropTypes from "prop-types";

const StateFilled2 = ({
  className = "",
  stateFilledPosition,
  stateFilledBorder,
  stateFilledOutline,
  stateFilledFontFamily,
  stateFilledFontSize,
  stateFilledPadding,
  stateFilledColor,
}) => {
  const stateFilled1Style = useMemo(() => {
    return {
      position: stateFilledPosition,
      border: stateFilledBorder,
      outline: stateFilledOutline,
      fontFamily: stateFilledFontFamily,
      fontSize: stateFilledFontSize,
      padding: stateFilledPadding,
      color: stateFilledColor,
    };
  }, [
    stateFilledPosition,
    stateFilledBorder,
    stateFilledOutline,
    stateFilledFontFamily,
    stateFilledFontSize,
    stateFilledPadding,
    stateFilledColor,
  ]);

  return (
    <div
      className={`w-[45px] rounded-lg bg-white-16 h-12 overflow-hidden text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={stateFilled1Style}
    >
      <div className="absolute top-[10px] left-[17px] leading-[28px]">5</div>
    </div>
  );
};

StateFilled2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  stateFilledPosition: PropTypes.any,
  stateFilledBorder: PropTypes.any,
  stateFilledOutline: PropTypes.any,
  stateFilledFontFamily: PropTypes.any,
  stateFilledFontSize: PropTypes.any,
  stateFilledPadding: PropTypes.any,
  stateFilledColor: PropTypes.any,
};

export default StateFilled2;
