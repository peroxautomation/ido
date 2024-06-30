import { useMemo } from "react";
import PropTypes from "prop-types";

const HIndexIcon = ({
  className = "",
  subtract,
  star5,
  hIndexIconPosition,
}) => {
  const hIndexIconStyle = useMemo(() => {
    return {
      position: hIndexIconPosition,
    };
  }, [hIndexIconPosition]);

  return (
    <div
      className={`w-6 h-9 text-center text-xs text-neutral-100 font-overline-regular ${className}`}
      style={hIndexIconStyle}
    >
      <img
        className="absolute h-[66.67%] w-full top-[0%] right-[0%] bottom-[33.33%] left-[0%] rounded-12xs-3 max-w-full overflow-hidden max-h-full"
        alt=""
        src={star5}
      />
      <img className="relative w-[22px] h-3.5 mt-[22px]" alt="" src={subtract} />

      <div className="absolute top-[11.11%] left-[20.83%] leading-[16px] font-semibold">
        17
      </div>
    </div>
  );
};

HIndexIcon.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,

  /** Style props */
  hIndexIconPosition: PropTypes.any,
};

export default HIndexIcon;
