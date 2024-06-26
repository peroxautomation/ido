import DFAQAccordian from "./DFAQAccordian";


const DFAQs = () => {
  return (
    <div
      className={`absolute top-[3532px] bg-neutral-900 w-screen h-[818px] overflow-hidden text-left text-base text-neutral-100 font-body-semibold`}
      data-scroll-to="DfAQPage"
    >
      <DFAQAccordian />
      <div className="absolute top-[80px] left-[calc(50%_-_275px)] w-[551px] flex flex-row items-start justify-between py-4 px-0 box-border text-13xl">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">FAQs</div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
      </div>
      <div className="absolute top-[152px] left-[calc(50%_-_296px)] w-[592px] flex flex-row items-center justify-center text-center text-5xl">
        <div className="flex-1 relative leading-[32px]">
          Explore our FAQ section for quick answers to common questions about
          our dance app
        </div>
      </div>
    </div>
  );
};

export default DFAQs;
