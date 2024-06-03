import { useMemo } from "react";
import PropTypes from "prop-types";

const Button2 = ({
  onClick,
  className = "",
  cTAWidth,
  cTARight,
  cTABottom,
  cTATop,
  cTAPosition,
  cTALeft,
  cTABackgroundColor,
  cTAGap,
  cTAFlex,
  cTA,
  hugeIconeducationsolidpen,
  hugeIconeducationsolidpenWidth,
  hugeIconeducationsolidpenHeight,
}) => {
  const cTA1Style = useMemo(() => {
    return {
      width: cTAWidth,
      right: cTARight,
      bottom: cTABottom,
      top: cTATop,
      position: cTAPosition,
      left: cTALeft,
      backgroundColor: cTABackgroundColor,
      gap: cTAGap,
      flex: cTAFlex,
    };
  }, [
    cTAWidth,
    cTARight,
    cTABottom,
    cTATop,
    cTAPosition,
    cTALeft,
    cTABackgroundColor,
    cTAGap,
    cTAFlex,
  ]);

  const hugeIconeducationsolidpencStyle = useMemo(() => {
    return {
      width: hugeIconeducationsolidpenWidth,
      height: hugeIconeducationsolidpenHeight,
    };
  }, [hugeIconeducationsolidpenWidth, hugeIconeducationsolidpenHeight]);

  return (
    <div
      onClick={onClick}
      className={`absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] box-border gap-[0.5rem] text-center text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
      style={cTA1Style}
    >
      <div className="relative leading-[1.5rem] font-semibold">{cTA}</div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src={hugeIconeducationsolidpen}
        style={hugeIconeducationsolidpencStyle}
      />
    </div>
  );
};

Button2.propTypes = {
  className: PropTypes.string,
  cTA: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,

  /** Style props */
  cTAWidth: PropTypes.any,
  cTARight: PropTypes.any,
  cTABottom: PropTypes.any,
  cTATop: PropTypes.any,
  cTAPosition: PropTypes.any,
  cTALeft: PropTypes.any,
  cTABackgroundColor: PropTypes.any,
  cTAGap: PropTypes.any,
  cTAFlex: PropTypes.any,
  hugeIconeducationsolidpenWidth: PropTypes.any,
  hugeIconeducationsolidpenHeight: PropTypes.any,
};

export default Button2;
