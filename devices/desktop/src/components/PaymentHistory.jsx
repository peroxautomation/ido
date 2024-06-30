import { useMemo } from "react";
import PropTypes from "prop-types";

const PaymentHistory = (props) => {
  const {
    className = "",
    paymentHistory,
    showHugeIconarrowsbulkdirecti,
    hugeIconarrowsbulkdirectiVisible,
    propTop,
    propLeft,
    propGap,
  } = props;
  const paymentHistoryStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      gap: propGap,
    };
  }, [propTop, propLeft, propGap]);

  return (
    <div
      className={`absolute top-[40px]  w-screen flex flex-row items-center justify-between py-4 px-0 box-border text-left text-13xl text-neutral-100 font-overline-regular ${className}`}

      style={paymentHistoryStyle}
    >
      {showHugeIconarrowsbulkdirecti && (
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-10 relative h-10 overflow-hidden shrink-0">
          <img
            className="absolute h-[48%] w-[23%] top-[26%] right-[38.5%] bottom-[26%] left-[38.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/direction-left2.svg"
          />
        </button>
      )}
      <div className="relative leading-[40px] font-semibold">
        {paymentHistory}
      </div>
      {hugeIconarrowsbulkdirectiVisible && (
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      )}
    </div>
  );
};

PaymentHistory.propTypes = {
  className: PropTypes.string,
  paymentHistory: PropTypes.string,
  showHugeIconarrowsbulkdirecti: PropTypes.bool,
  hugeIconarrowsbulkdirectiVisible: PropTypes.bool,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propGap: PropTypes.any,
};

export default PaymentHistory;
