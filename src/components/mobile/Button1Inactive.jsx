import { useMemo } from "react";

const Button1Inactive = ({
  className = "",
  label,
  onClick,
}) => {

  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-2 bg-primary-100 absolute w-[calc(100%_-_40px)] right-[20px] bottom-[40px] left-[20px] rounded-xl flex flex-row items-center justify-center box-border gap-[8px] ${className}`}
      onClick={onClick}
    >
      <div className="relative text-base leading-[24px] font-semibold font-button-2-semibold text-white text-center">
        {label}
      </div>
      <img
        className="w-4 relative h-4 overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="/hugeiconeducationsolidpencil1@2x.png"
      />
    </button>
  );
};

export default Button1Inactive;
