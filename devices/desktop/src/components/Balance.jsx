import { useMemo } from "react";
import PropTypes from "prop-types";

const Balance = ({
  className = "",
  text = "$ 132,74",
  balanceWidth,
  balancePosition,
  balanceTop,
  balanceRight,
  balanceLeft,
}) => {
  const balanceStyle = useMemo(() => {
    return {
      width: balanceWidth,
      position: balancePosition,
      top: balanceTop,
      right: balanceRight,
      left: balanceLeft,
    };
  }, [balanceWidth, balancePosition, balanceTop, balanceRight, balanceLeft]);

  return (
    <div
      className={`w-[335px] flex flex-col items-center justify-start gap-[8px] text-center text-base text-neutral-400 font-overline-regular ${className}`}
      style={balanceStyle}
    >
      <div className="self-stretch relative leading-[24px]">Balance</div>
      <b className="self-stretch relative text-21xl leading-[48px] text-neutral-100">
        {text}
      </b>
    </div>
  );
};

Balance.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  balanceWidth: PropTypes.any,
  balancePosition: PropTypes.any,
  balanceTop: PropTypes.any,
  balanceRight: PropTypes.any,
  balanceLeft: PropTypes.any,
};

export default Balance;
