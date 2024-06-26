import TFaqAccoridan from "./TFaqAccoridan";
import { useRef } from "react";

const TFAQ = () => {
  return (
    <div
      className={`absolute top-[2794px] left-[calc(50%_-_512px)] bg-neutral-900 w-[1024px] h-[644px] overflow-hidden text-center text-13xl text-neutral-100 font-button-1-regular`}
      data-scroll-to="TfAQPage"
      >
      <div className="absolute top-[40px] left-[calc(50%_-_348px)] w-[696px] flex flex-row items-start justify-between py-4 px-0 box-border">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 opacity-[0]"
          alt=""
        />
        <div className="relative leading-[40px] font-semibold">FAQs</div>
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0 object-contain opacity-[0]"
          alt=""
          src="/hugeiconarrowssoliddirectionleft-2@2x.png"
        />
      </div>
      <TFaqAccoridan />
      <div className="absolute top-[112px] left-[calc(50%_-_267px)] w-[592px] flex flex-row items-center justify-center text-5xl">
        <div className="flex-1 relative leading-[32px]">
          Explore our FAQ section for quick answers to common questions about
          our dance app
        </div>
      </div>
    </div>
  );
};

export default TFAQ;
