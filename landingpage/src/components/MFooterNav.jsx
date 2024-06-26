import { useCallback } from "react";

const MFooterNav = () => {
  const onPartnershipTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='MpartnersPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='MfAQPage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='McontactPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);
  
  const activeFooterNav = (
    <div
    className={`absolute top-[216px] left-[calc(50%_-_175px)] w-[260px] h-[119px] text-left text-base text-neutral-100 font-button-2-regular`}
  >
    <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] touch-hrefbtn">APPs</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[35px] left-[176px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onFAQTextClick}>FAQ</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[0px] left-[176px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onPartnershipTextClick}>Partnership</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[35px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] touch-hrefbtn" onClick={onContactTextClick}>Contact</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
  </div>
  )

  const FutureFooterNav = (
    <div
    className={`absolute top-[216px] left-[calc(50%_-_175px)] w-[260px] h-[119px] text-left text-base text-neutral-100 font-button-2-regular`}
  >
    <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline">APPs</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[35px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline">API</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[35px] left-[176px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline" onClick={onFAQTextClick}>FAQ</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[0px] left-[176px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline" onClick={onPartnershipTextClick}>Partnership</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[65px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline">Adverts</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[65px] left-[176px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline" onClick={onContactTextClick}>Contact</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
    <div className="absolute top-[95px] left-[0px] flex flex-col items-center justify-start">
      <div className="relative leading-[24px] z-[0] active:underline">Price</div>
      <img
        className="w-px absolute !m-[0] top-[24px] left-[0px] h-0 object-contain opacity-[0] z-[1]"
        alt=""
      />
    </div>
  </div>
  )
  return (
   <>{activeFooterNav}</>
  );
};

export default MFooterNav;
