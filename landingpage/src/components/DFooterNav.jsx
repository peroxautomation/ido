import { useCallback } from "react";

const DFooterNav = () => {
  const onPartnershipTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='DpartnersPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='DfAQPage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='DcontactPage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const activeFooterNav = (
    <div className="absolute top-[81px] left-[calc(50%_-_127px)] w-[193px] h-[119px] text-left text-base text-neutral-100 font-body-semibold"
    >
      <div className="absolute top-[0px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] desktop-hrefbtn">APPs</div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_+_12.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] desktop-hrefbtn" onClick={onPartnershipTextClick}>Partnership 
        </div>
      </div>
      <div className="absolute top-[35px] left-[calc(50%_+_12.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] desktop-hrefbtn" onClick={onFAQTextClick}>FAQ
        </div>
      </div>
      <div className="absolute top-[35px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] desktop-hrefbtn" onClick={onContactTextClick}>Contact
        </div>
      </div>
    </div>
  )

  const FutureFooterNav = (
    <div
      className={`absolute top-[81px] left-[calc(50%_-_127px)] w-[193px] h-[119px] text-left text-base text-neutral-100 font-body-semibold`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer">APPs</div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_+_12.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer" onClick={onPartnershipTextClick}>Partnership</div>

      </div>
      <div className="absolute top-[35px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer">API</div>

      </div>
      <div className="absolute top-[35px] left-[calc(50%_+_12.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer" onClick={onFAQTextClick}>FAQ</div>

      </div>
      <div className="absolute top-[65px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer">Adverts</div>

      </div>
      <div className="absolute top-[65px] left-[calc(50%_+_12.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer" onClick={onContactTextClick}>Contact</div>

      </div>
      <div className="absolute top-[95px] left-[calc(50%_-_96.5px)] flex flex-col items-center justify-start">
        <div className="relative leading-[24px] z-[0] hover:underline cursor-pointer">Price</div>
      </div>
    </div>
  )
  return (
    <>
    {activeFooterNav}
    </>
    
  );
};

export default DFooterNav;
