const DPartnerModal = () => {
  return (
    <div
      className={`absolute top-[calc(50%_-_228px)] left-[calc(50%_-_208px)] rounded-3xl bg-neutral-800 w-[416px] h-[456px] flex flex-col items-end justify-start p-6 box-border gap-[16px] text-center text-5xl text-neutral-100 font-h2-regular`}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch h-[360px] flex flex-col items-center justify-center py-0 px-6 box-border gap-[16px]">
        <div className="w-80 relative leading-[32px] hidden">Donate</div>
        <div className="self-stretch h-[299px] flex flex-col items-center justify-between text-left text-base">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="relative text-13xl leading-[40px] font-semibold">
              Thank you!
            </div>
            <div className="w-80 hidden flex-col items-start justify-start">
              <div className="w-80 hidden flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
                <div className="flex-1 relative leading-[24px]">Label</div>
              </div>
              <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
                />
                <div className="flex-1 relative leading-[24px]">
                  Choose card
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/hugeiconarrowssoliddirectiondown-01.svg"
                />
              </div>
              <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm text-primary-500">
                <div className="flex-1 relative leading-[20px]">
                  Add new card
                </div>
              </div>
            </div>
            <div className="w-80 hidden flex-col items-start justify-start text-neutral-600">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 text-neutral-100">
                <div className="flex-1 relative leading-[24px]">Amount</div>
              </div>
              <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconmultimedia-and-audiosolidmusic-011.svg"
                />
                <div className="flex-1 relative leading-[24px]">200</div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/hugeiconarrowssoliddirectiondown-011.svg"
                />
              </div>
              <div className="w-80 hidden flex-row items-center justify-start py-1 px-0 box-border text-sm">
                <div className="flex-1 relative leading-[20px]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 hidden flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
              <div className="flex-1 flex flex-row items-center justify-center py-3 px-0">
                <div className="flex-1 relative leading-[24px]">Donation</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end py-3 px-0 text-right">
                <b className="flex-1 relative leading-[24px]">$10</b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between border-b-[1px] border-solid border-neutral-700">
              <div className="flex-1 flex flex-row items-center justify-center py-3 px-0">
                <div className="flex-1 relative leading-[24px]">Subtotal</div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-end py-3 px-0 text-right">
                <b className="flex-1 relative leading-[24px]">$9</b>
              </div>
            </div>
            <div className="w-[189px] flex flex-row items-center justify-center text-center text-5xl">
              <div className="flex-1 flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative leading-[32px] font-semibold">
                  Total: $10
                </div>
              </div>
            </div>
          </div>
          <div className="w-[311px] relative text-5xl leading-[32px] text-center inline-block">
            Once you submit your application, we will contact you shortly to
            complete your partnership application. 
          </div>
          <div className="self-stretch rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 gap-[8px] text-center">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/hugeiconinterfacesolidplus1.svg"
            />
            <div className="relative leading-[24px] font-semibold">Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DPartnerModal;
