const GenderDropdown1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[276px] left-[20px] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] text-left text-base text-white font-button-2-semibold ${className} z-10`}
    >
      <div className="w-[335px] bg-neutral-700 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] border-b-[1px] border-solid border-neutral-800">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover hidden"
          alt=""
        />
        <div className="flex-1 relative leading-[24px]">Male</div>
      </div>
      <div className="w-[335px] bg-neutral-700 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] border-b-[1px] border-solid border-neutral-800">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover hidden"
          alt=""
        />
        <div className="flex-1 relative leading-[24px]">Female</div>
      </div>
      <div className="w-[335px] bg-neutral-700 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover hidden"
          alt=""
        />
        <div className="flex-1 relative leading-[24px]">
          I don't want to say
        </div>
      </div>
    </div>
  );
};

export default GenderDropdown1;
