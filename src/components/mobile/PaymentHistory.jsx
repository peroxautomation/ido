/**
 * Transaction container for Paymeny history
 * @param value The value of the transaction
 * @param time The time of the transaction
 * @param name The name of the user to which the transaction was made
 * @param day The day of the transaction
 * @returns
 */
const PaymentHistory = (props) => {
  const { value, time, name, day } = props;

  return (
    <div className={`payment-history `}>
      <div className="self-stretch relative leading-[1.25rem]">{day}</div>
      <div className="w-[20.938rem] flex flex-row items-start justify-between text-[1rem] text-neutral-100">
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          {name}
        </div>
        {value < 0 ? (
          <span
            className={`relative leading-[1.5rem] font-semibold text-danger-500`}
          >
            ${value.toFixed(2)}
          </span>
        ) : (
          <span
            className={`relative leading-[1.5rem] font-semibold text-[#0c9f6e]`}
          >
            +${value.toFixed(2)}
          </span>
        )}
      </div>
      <div className="self-stretch relative leading-[1.25rem]">{time}</div>
    </div>
  );
};

export default PaymentHistory;
