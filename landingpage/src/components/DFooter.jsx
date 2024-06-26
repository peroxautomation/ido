import DFooterNav from "./DFooterNav";
import DFooterDowloadeButtons from "./DFooterDowloadeButtons";
import DFooterLogo from "./DFooterLogo";

const DFooter = () => {
  return (
    <div className={`absolute bottom-[0px] bg-black w-screen h-[342px] overflow-hidden text-left text-base text-neutral-100 font-body-semibold`}>
      <DFooterNav />
      <div className="absolute top-[286px] left-[calc(50%_-_197px)] flex flex-row items-start justify-start text-center">
        <img className="w-6 relative h-6" alt="" src="/copyright.svg" />
        <div className="w-[335px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[24px]">
            Copyright 2024 .IDO. All Right Reserved.
          </div>
        </div>
      </div>
      <DFooterDowloadeButtons />
      <DFooterLogo />
    </div>
  );
};

export default DFooter;
