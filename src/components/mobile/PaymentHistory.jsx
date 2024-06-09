import { useMemo } from "react";
import PropTypes from "prop-types";

const PaymentHistory = ({ className = "", prop, spanColor }) => {
  const spanStyle = useMemo(() => {
    return {
      color: spanColor,
    };
  }, [spanColor]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.875rem] text-neutral-400 font-button-1-regular ${className}`}
    >
      <div className="self-stretch relative leading-[1.25rem]">Today</div>
      <div className="w-[20.938rem] flex flex-row items-start justify-between text-[1rem] text-neutral-100">
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          Sofia Kuchenko
        </div>
        <span
          className="relative leading-[1.5rem] font-semibold text-danger-500"
          style={spanStyle}
        >
          {prop}
        </span>
      </div>
      <div className="self-stretch relative leading-[1.25rem]">10:42</div>
    </div>
  );
};

PaymentHistory.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  spanColor: PropTypes.any,
};

export default PaymentHistory;
