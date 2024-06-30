import PropTypes from "prop-types";

const MonthlyPayment = ({ className = "", amount = "$0 " }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center text-center text-13xl text-neutral-100 font-overline-regular self-stretch ${className}`}
    >
      <div className="flex flex-row items-center justify-center py-0 px-2 border-r-[1px] border-solid border-neutral-700">
        <div className="relative leading-[40px] font-semibold">{amount}</div>
      </div>
      <div className="flex flex-row items-center justify-center py-0 px-2 text-left text-sm">
        <div className="relative leading-[20px] font-semibold">
          <p className="m-0">{`per `}</p>
          <p className="m-0">month</p>
        </div>
      </div>
    </div>
  );
};

MonthlyPayment.propTypes = {
  className: PropTypes.string,
  amount: PropTypes.string,
};

export default MonthlyPayment;
