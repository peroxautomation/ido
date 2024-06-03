import { useMemo } from "react";
import PropTypes from "prop-types";

const Button1Inactive = ({
  className = "",
  cTAPosition,
  cTAWidth,
  cTARight,
  cTABottom,
  cTALeft,
  cTAAlignSelf,
  cTA,
  hugeIconeducationsolidpen,
  onCTAClick
}) => {
  const cTAStyle = useMemo(() => {
    return {
      position: cTAPosition,
      width: cTAWidth,
      right: cTARight,
      bottom: cTABottom,
      left: cTALeft,
      alignSelf: cTAAlignSelf,
    };
  }, [cTAPosition, cTAWidth, cTARight, cTABottom, cTALeft, cTAAlignSelf]);

  return (
    <button
      name="create-button-1"
      onClick={onCTAClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-100 absolute w-[calc(100%_-_40px)] right-[1.25rem] bottom-[2.5rem] left-[1.25rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
      style={cTAStyle}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
      <img
        className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src={hugeIconeducationsolidpen}
      />
    </button>
  );
};

Button1Inactive.propTypes = {
  className: PropTypes.string,
  cTA: PropTypes.string,
  hugeIconeducationsolidpen: PropTypes.string,

  /** Style props */
  cTAPosition: PropTypes.any,
  cTAWidth: PropTypes.any,
  cTARight: PropTypes.any,
  cTABottom: PropTypes.any,
  cTALeft: PropTypes.any,
  cTAAlignSelf: PropTypes.any,
};

export default Button1Inactive;
