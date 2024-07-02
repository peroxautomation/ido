/**
 * Payment card box
 * @param className
 * @param card
 * @param id
 * @param onDeleteClick
 * @returns A JSX element
 */
const PaymentMethodBox = (props) => {
  const { className, card, id, onDeleteClick } = props;
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100  ${className}`}
    >
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem]"
          alt=""
          src="/mastercard.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">{card}</div>
        <button
          onClick={() => onDeleteClick(id)}
          className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 `}
        >
          <img
            className="absolute h-[83.33%] w-9/12 top-[8.33%] right-[12.5%] bottom-[8.33%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector13.svg"
          />
        </button>
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

export default PaymentMethodBox;
