const OnboardingInput = ({ label, inputPlaceholder, type }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold">
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <div className="flex-1 relative leading-[24px]">{label}</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
        />
      </div>
      <input
        className="[border:none] [outline:none] font-button-2-semibold text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-neutral-600"
        placeholder={inputPlaceholder}
        type={type}
      />
      <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
        <div className="flex-1 relative leading-[20px]">Helper text</div>
      </div>
    </div>
  );
};

export default OnboardingInput;
