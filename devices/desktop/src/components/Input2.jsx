import PropTypes from "prop-types";

const Input6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      {label && (
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
          <div className="flex-1 relative leading-[24px]">
            When did you start dancing?
          </div>
          {infoIcon && (
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation1.svg"
            />
          )}
        </div>
      )}
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-center py-2.5 px-4">
        {showInputAndWord && (
          <input
            className="[border:none] [outline:none] font-overline-regular text-base bg-[transparent] flex-1 flex flex-row items-center justify-start text-white-16"
            placeholder="Year"
            type="text"
          />
        )}
        {showInput && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolideye.svg"
          />
        )}
      </div>
      {eye && (
        <div className="w-[340px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
          {helperText && (
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          )}
        </div>
      )}
    </div>
  );
};

Input6.propTypes = {
  className: PropTypes.string,
};

export default Input6;
