import MFAQAccordian from "./MFAQAccordian";

const MFAQ = () => {
  return (
    <div
      className={`absolute top-[2872px] left-[calc(50%_-_215px)] bg-neutral-900 w-[430px] h-[676px] overflow-hidden text-center text-xl text-neutral-100 font-button-2-regular`}
    data-scroll-to="MfAQPage"
    >
      <div className="absolute top-[40px] left-[calc(50%_-_168px)] w-[335px] h-11 flex flex-row items-center justify-between py-2 px-0 box-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <b className="relative leading-[28px]">FAQs</b>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-3@2x.png"
        />
      </div>
      <MFAQAccordian />
      <div className="absolute top-[84px] left-[calc(50%_-_168px)] w-[335px] flex flex-row items-center justify-center text-base">
        <div className="flex-1 relative leading-[24px]">
          Explore our FAQ section for quick answers to common questions about
          our dance app
        </div>
      </div>
    </div>
  );
};

export default MFAQ;
