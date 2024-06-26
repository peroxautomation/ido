const MContactForm = () => {
  return (
    <div
      className={`absolute top-[108px] left-[calc(50%_-_168px)] w-[335px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-neutral-900 font-button-2-regular`}
    >
      <div className="flex flex-row items-start justify-start gap-[15px]">
        <div className="w-40 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
            <div className="flex-1 relative leading-[24px]">First name</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation.svg"
            />
          </div>
          <input
            className="[border:none] [outline:none] font-button-2-regular text-base bg-neutral-200 self-stretch rounded-xl flex flex-row items-center justify-start py-2.5 px-4 text-neutral-600"
            placeholder="First Name"
            type="text"
          />
          <div className="w-40 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm text-neutral-600">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
        <div className="w-40 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
            <div className="flex-1 relative leading-[24px]">Last name</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidinformation.svg"
            />
          </div>
          <input
            className="[border:none] [outline:none] font-button-2-regular text-base bg-neutral-200 self-stretch rounded-xl flex flex-row items-center justify-start py-2.5 px-4 text-neutral-600"
            placeholder="Last Name"
            type="text"
          />
          <div className="w-40 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm text-neutral-600">
            <div className="flex-1 relative leading-[20px]">Helper text</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="w-[335px] flex flex-row items-start justify-end pt-0 px-0 pb-1 box-border">
          <div className="flex-1 relative leading-[24px]">Email</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
          />
        </div>
        <input
          className="[border:none] [outline:none] font-button-2-regular text-base bg-neutral-200 w-[335px] rounded-xl flex flex-row items-center justify-center py-2.5 px-4 box-border text-neutral-600"
          placeholder="Enter your email"
          type="text"
        />
        <div className="w-[335px] hidden flex-row items-center justify-center py-1 px-0 box-border text-sm text-neutral-600">
          <div className="flex-1 relative leading-[20px]">Helper text</div>
        </div>
      </div>
      <div className="w-[335px] flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch flex flex-row items-start justify-end gap-[6px]">
          <div className="flex-1 relative leading-[24px]">Your message</div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolidinformation.svg"
          />
        </div>
        <input
          className="[border:none] [outline:none] font-button-2-regular text-base bg-neutral-200 self-stretch rounded-xl h-[140px] flex flex-row items-start justify-start py-2 px-4 box-border text-neutral-600"
          placeholder="Your message here"
          type="text"
        />
      </div>
      <div className="w-[335px] flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] touch-btn-secondary">
        <div className="relative leading-[24px] font-semibold">
          Send message
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/hugeiconeducationsolidpencil@2x.png"
        />
      </div>
    </div>
  );
};

export default MContactForm;
