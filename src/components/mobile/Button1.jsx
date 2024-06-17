const Button1 = ({ className = "", cTA, onCTAClick }) => {
  return (
    <button
      name="create-button-1"
      onClick={onCTAClick}
      className={`cursor-pointer [border:none] py-[0.625rem] px-[0.5rem] bg-primary-500 absolute w-[calc(100%_-_40px)] bottom-[2.5rem] rounded-xl flex flex-row items-center justify-center box-border gap-[0.5rem] ${className}`}
    >
      <div className="relative text-[1rem] leading-[1.5rem] font-semibold font-button-1-regular text-neutral-100 text-center">
        {cTA}
      </div>
    </button>
  );
};


export default Button1;
