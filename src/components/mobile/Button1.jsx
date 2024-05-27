import { useMemo } from "react";

const Button1 = ({
  className = "",
  onCTAClick,
  cTAAlignSelf,
  cTAPosition,
  cTATop,
  cTALeft,
  cTAWidth,
  cTA,
  icon,
}) => {
  const cTAStyle = useMemo(() => {
    return {
      alignSelf: cTAAlignSelf,
      position: cTAPosition,
      top: cTATop,
      left: cTALeft,
      width: cTAWidth,
    };
  }, [cTAAlignSelf, cTAPosition, cTATop, cTALeft, cTAWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-2 bg-primary-500 self-stretch rounded-xl flex flex-row items-center justify-center gap-[8px] ${className}`}
      onClick={onCTAClick}
      style={cTAStyle}
    >
      <div className="relative flex py-1 gap-1 text-base leading-[24px] font-semibold font-button-1-semibold text-white text-center">
        {cTA}
        <img src={icon} alt="" />
      </div>
    </button>
  );
};


export default Button1;
