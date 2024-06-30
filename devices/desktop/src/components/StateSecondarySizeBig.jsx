import { useMemo } from "react";
import PropTypes from "prop-types";

const StateSecondarySizeBig = ({
  className = "",
  hugeIconinterfacesolidplu,
  text = "CTA",
  hugeIconinterfacesolidplu1,
  rightIcon = true,
  leftIcon = true,
  stateSecondarySizeBigAlignSelf,
  stateSecondarySizeBigPosition,
  stateSecondarySizeBigTop,
  stateSecondarySizeBigLeft,
  stateSecondarySizeBigWidth,
  stateSecondarySizeBigHeight,
}) => {
  const stateSecondarySizeBigStyle = useMemo(() => {
    return {
      alignSelf: stateSecondarySizeBigAlignSelf,
      position: stateSecondarySizeBigPosition,
      top: stateSecondarySizeBigTop,
      left: stateSecondarySizeBigLeft,
      width: stateSecondarySizeBigWidth,
      height: stateSecondarySizeBigHeight,
    };
  }, [
    stateSecondarySizeBigAlignSelf,
    stateSecondarySizeBigPosition,
    stateSecondarySizeBigTop,
    stateSecondarySizeBigLeft,
    stateSecondarySizeBigWidth,
    stateSecondarySizeBigHeight,
  ]);

  return (
    <div
      className={`rounded-xl bg-white-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateSecondarySizeBigStyle}
    >
      {leftIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu}
        />
      )}
      <div className="relative leading-[24px] font-semibold">{text}</div>
      {rightIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu1}
        />
      )}
    </div>
  );
};

StateSecondarySizeBig.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,
  text: PropTypes.string,
  hugeIconinterfacesolidplu1: PropTypes.string,
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,

  /** Style props */
  stateSecondarySizeBigAlignSelf: PropTypes.any,
  stateSecondarySizeBigPosition: PropTypes.any,
  stateSecondarySizeBigTop: PropTypes.any,
  stateSecondarySizeBigLeft: PropTypes.any,
  stateSecondarySizeBigWidth: PropTypes.any,
  stateSecondarySizeBigHeight: PropTypes.any,
};

export default StateSecondarySizeBig;
