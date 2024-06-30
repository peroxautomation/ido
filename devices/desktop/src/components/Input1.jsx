import PropTypes from "prop-types";

const Input3 = (props) => {
  const { className = "", title, inputPlaceholder, info } = props;
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">
          {title ? title : "CVV"}
        </div>
        {info && (
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 relative h-6 overflow-hidden shrink-0">
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/information.svg"
            />
          </button>
        )}
      </div>
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4">
        <input
          className="[border:none] [outline:none] bg-[transparent] w-32 flex flex-row items-center justify-start font-overline-regular text-base text-neutral-100"
          type="text"
          placeholder={inputPlaceholder ? inputPlaceholder :"Enter your password"}
        />
      </div>
      <div className="w-40 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm text-neutral-100">
        <div className="flex-1 relative leading-[20px]">Helper text</div>
      </div>
    </div>
  );
};

export default Input3;
