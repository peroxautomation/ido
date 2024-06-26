const MPartnerModal = () => {
  return (
    <div
      className={`absolute top-[calc(50%_-_128px)] left-[calc(50%_-_124px)] rounded-2xl bg-neutral-800 flex flex-col items-center justify-center py-6 px-4 gap-[24px] text-center text-xl text-neutral-100 font-h2-regular`}
    >
      <div className="relative leading-[28px] font-semibold text-left">
        Thank you
      </div>
      <div className="w-[209px] relative text-base leading-[24px] inline-block">
        Once you submit your application, we will contact you shortly to
        complete your partnership application.
      </div>
      <div className="w-[216px] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-xs">
        <div className="relative leading-[16px]">Back</div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src="/hugeiconeducationsolidpencil@2x.png"
        />
      </div>
    </div>
  );
};

export default MPartnerModal;
