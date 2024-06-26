const TContactForm = () => {
  return (
    <div
      className={`absolute top-[calc(50%_-_164px)] right-[140px] w-[339px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-900 font-button-1-regular`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
          <div className="flex-1 relative leading-[24px]">Full name</div>
        </div>
        <input
          className="[border:none] [outline:none] font-button-1-regular text-base bg-neutral-200 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-black"
          placeholder="Enter your full name"
          type="text"
        />
        <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
          <div className="flex-1 relative leading-[20px]">Helper text</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
          <div className="flex-1 relative leading-[24px]">Email</div>
        </div>
        <input
          className="[border:none] [outline:none] font-button-1-regular text-base bg-neutral-200 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-black"
          placeholder="Enter yor email"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-end gap-[6px]">
          <div className="flex-1 relative leading-[24px]">Your message</div>
        </div>
        <input
          className="[border:none] [outline:none] font-button-1-regular text-base bg-neutral-200 self-stretch rounded-xl h-[140px] flex flex-row items-start justify-start py-2 px-4 box-border text-black"
          placeholder="Your message"
          type="text"
        />
      </div>
      <div className="touch-btn-secondary self-stretch flex flex-row items-center justify-center py-2.5 px-2 gap-[8px]">
        <div className="relative leading-[24px] font-semibold">
          Send message
        </div>
      </div>
    </div>
  );
};

export default TContactForm;
