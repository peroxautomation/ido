import { useCallback } from "react";
const TFooterNav = () => {
  const onPartnershipTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='TpartnersPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='TfAQPage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='TcontactPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);
  const activeFooterNav = (
    <div
      className={`absolute top-[64px] left-[calc(50%_+_102px)] w-[262px] h-[119px] text-left text-base text-neutral-100 font-button-1-regular`}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] touch-hrefbtn">APPs</div>
      </div>
      <div className="absolute top-[35px] left-[178px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onFAQTextClick}>FAQ</div>
      </div>
      <div className="absolute top-[0px] left-[178px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onPartnershipTextClick}> Partnership</div>
      </div>
      <div className="absolute top-[35px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onContactTextClick}>Contact</div>
      </div>
    </div>
  )
  const FutureFooterNav = (
    <div
      className={`absolute top-[64px] left-[calc(50%_+_102px)] w-[262px] h-[119px] text-left text-base text-neutral-100 font-button-1-regular`}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline">APPs</div>
      </div>
      <div className="absolute top-[35px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline">API</div>
      </div>
      <div className="absolute top-[35px] left-[178px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline" onClick={onFAQTextClick}>FAQ</div>
      </div>
      <div className="absolute top-[0px] left-[178px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline" onClick={onPartnershipTextClick}> Partnership</div>
      </div>
      <div className="absolute top-[65px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline">Adverts</div>
      </div>
      <div className="absolute top-[65px] left-[178px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline" onClick={onContactTextClick}>Contact</div>
      </div>
      <div className="absolute top-[95px] left-[0px] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] active:underline">Price</div>
      </div>
    </div>
  )
  return (
    <>{activeFooterNav}</>
    
  );
};

export default TFooterNav;
