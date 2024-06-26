import { useCallback } from "react";

const DHeader = () => {
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
  const activeHeader = (
  <div
    className={`relative top-[0px]  [backdrop-filter:blur(24px)] bg-gray-100 w-screen h-[92px] flex flex-row items-center justify-between py-6 px-[90px] box-border text-left text-base text-neutral-100 font-body-semibold`}
  >
    <div className="shadow-[0px_4px_5.8px_rgba(0,_0,_0,_0.65)] flex flex-row items-center justify-start py-0 px-2 relative gap-[11px] text-34xl-8 font-pacifico">
      <img
        className="w-[57px] relative h-[53.9px] z-[0]"
        alt=""
        src="/vector-851.svg"
      />
      <div className="relative leading-[86px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
        Ido
      </div>
      <div className="w-[8.4px] absolute !m-[0] top-[21px] left-[20px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[8.4px] z-[2]" />
    </div>
    <div className="flex flex-row items-start justify-start gap-[64px]">
      <div className="flex flex-col items-center justify-start">
        <div className="relative leading-[24px] desktop-hrefbtn">Apps</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start desktop-hrefbtn">
        <div className="relative leading-[24px]" onClick={onPartnershipTextClick}>Partnership</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start desktop-hrefbtn">
        <div className="relative leading-[24px]" onClick={onFAQTextClick}>FAQs</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start desktop-hrefbtn">
        <div className="relative leading-[24px]" onClick={onContactTextClick}>Contact</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
    </div>
    <div className="desktop-btn-secondary w-144 rounded-xs box-border flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-center border-[1px] border-solid border-primary-500">
      <div className="relative leading-[24px] font-semibold">
        Download app
      </div>
      <img
        className="w-4 relative rounded-sm h-4 overflow-hidden shrink-0"
        alt=""
        src="/qr-code.svg"
      />
    </div>
  </div>)

const futureHeader = (
  <div
    className={`relative top-[0px]  [backdrop-filter:blur(24px)] bg-gray-100 w-screen h-[92px] flex flex-row items-center justify-between py-6 px-[90px] box-border text-left text-base text-neutral-100 font-body-semibold`}
  >
    <div className="shadow-[0px_4px_5.8px_rgba(0,_0,_0,_0.65)] flex flex-row items-center justify-start py-0 px-2 relative gap-[11px] text-34xl-8 font-pacifico">
      <img
        className="w-[57px] relative h-[53.9px] z-[0]"
        alt=""
        src="/vector-851.svg"
      />
      <div className="relative leading-[86px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
        Ido
      </div>
      <div className="w-[8.4px] absolute !m-[0] top-[21px] left-[20px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[8.4px] z-[2]" />
    </div>
    <div className="flex flex-row items-start justify-start gap-[64px]">
      <div className="flex flex-col items-center justify-start">
        <div className="relative leading-[24px] no-underline hover:underline cursor-pointer">Apps</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]">API</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]" onClick={onPartnershipTextClick}>Partnership</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]">Adverts</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]" onClick={onFAQTextClick}>FAQs</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]">Price</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start no-underline hover:underline cursor-pointer">
        <div className="relative leading-[24px]" onClick={onContactTextClick}>Contact</div>
        <img
          className="w-px relative h-0 object-contain opacity-[0]"
          alt=""
        />
      </div>
    </div>
    <div className=" cursor-pointer hover:bg-gray-100/10 w-144 rounded-xs box-border flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-center border-[1px] border-solid border-primary-500">
      <div className="relative leading-[24px] font-semibold">
        Download app
      </div>
      <img
        className="w-4 relative rounded-sm h-4 overflow-hidden shrink-0"
        alt=""
        src="/qr-code.svg"
      />
    </div>
  </div>)
  return (
    <>
    {activeHeader}
    </>
  );
};

export default DHeader;
