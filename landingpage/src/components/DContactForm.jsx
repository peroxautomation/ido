const DContactForm = () => {
  return (
    <div
      className={`absolute top-[192px] right-[189px] w-[410px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-900 font-body-semibold`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
          <div className="flex-1 relative leading-[24px]">Full name</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolidinformation.svg"
          />
        </div>
        <input
          className="[border:none] [outline:none] font-body-semibold text-base bg-neutral-200 self-stretch rounded-xs flex flex-row items-center justify-center py-2.5 px-4 text-black"
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
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolidinformation.svg"
          />
        </div>
        <input
          className="[border:none] [outline:none] font-body-semibold text-base bg-neutral-200 self-stretch rounded-xs flex flex-row items-center justify-center py-2.5 px-4 text-black"
          placeholder="Enter yor email"
          type="text"
        />
        <div className="w-80 hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
          <div className="flex-1 relative leading-[20px]">Helper text</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-end gap-[6px]">
          <div className="flex-1 relative leading-[24px]">Your message</div>
        </div>
        <input
          className="[border:none] [outline:none] font-body-semibold text-base bg-neutral-200 self-stretch rounded-xs h-[140px] flex flex-row py-2 px-4 box-border text-black"
          placeholder="Your message"
          type="text"
        />
      </div>
      <div className="desktop-btn-primary self-stretch rounded-xs flex flex-row items-center justify-center py-2.5 px-2 gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconinterfacesolidplus.svg"
        />
        <div className="relative leading-[24px] font-semibold">
          Send message
        </div>
      </div>
    </div>
  );
};

export default DContactForm;
