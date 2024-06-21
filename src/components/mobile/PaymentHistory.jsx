const PaymentHistory = (props) => {
  const { value, isPositive, time, name } = props;

  const negative = "text-danger-500";
  const positive = "#0c9f6e";

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.875rem] text-neutral-400 font-button-1-regular`}
    >
      <div className="self-stretch relative leading-[1.25rem]">Today</div>
      <div className="w-[20.938rem] flex flex-row items-start justify-between text-[1rem] text-neutral-100">
        <div className="flex-1 relative leading-[1.5rem] font-semibold">
          Sofia Kuchenko
        </div>
        {!isPositive ? (
          <span
            className={`relative leading-[1.5rem] font-semibold ${negative}}`}
          >
            {value}
          </span>
        ) : (
          <span
            className={`relative leading-[1.5rem] font-semibold bg-[${positive}]`}
          >
            {value}
          </span>
        )}
      </div>
      <div className="self-stretch relative leading-[1.25rem]">10:42</div>
    </div>
  );
};

export default PaymentHistory;
