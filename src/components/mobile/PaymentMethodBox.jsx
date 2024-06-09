import DeleteCardBtn from "./DeleteCardBtn";
import PropTypes from "prop-types";

const PaymentMethodBox = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="w-[20.938rem] hidden flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">Label</div>
      </div>
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem]"
          alt=""
          src="/mastercard.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">
          4160 4573 9374 0013
        </div>
        <DeleteCardBtn />
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

PaymentMethodBox.propTypes = {
  className: PropTypes.string,
};

export default PaymentMethodBox;
