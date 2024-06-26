import TFooterDowloadButtons from "./TFooterDowloadButtons";
import TFooterNav from "./TFooterNav";
import TFooterLogo from "./TFooterLogo";

const TFooter = () => {
  
  return (
    <div
      className={`absolute top-[4062px] left-[calc(50%_-_512px)] bg-neutral-900 w-[1024px] h-[478px] overflow-hidden text-center text-base text-neutral-100 font-button-1-regular`}
    >
      <TFooterDowloadButtons />
      <TFooterNav />
      <div className="absolute top-[414px] left-[calc(50%_-_179px)] flex flex-row items-start justify-start">
        <img className="w-6 relative h-6" alt="" src="/copyright.svg" />
        <div className="w-[335px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">
            Copyright 2024 .IDO. All Right Reserved.
          </div>
        </div>
      </div>
      <TFooterLogo />
    </div>
  );
};

export default TFooter;
