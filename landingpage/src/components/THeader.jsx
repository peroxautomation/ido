import { useCallback } from "react";

const THeader = () => {
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
  const activeHeader = (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_512px)] [backdrop-filter:blur(24px)] bg-gray-100 w-[1024px] h-[92px] flex flex-col items-center justify-start p-6 box-border text-left text-14xl text-neutral-100 font-button-1-regular`}
    >
      <div className="flex flex-row items-center justify-start gap-[40px]">
        <div className="w-[100px] shadow-[0px_2.5px_3.56px_rgba(0,_0,_0,_0.65)] h-[50px] flex flex-row items-center justify-start py-0 px-[4.9px] box-border relative gap-[8px] font-pacifico">
          <img
            className="w-[35px] relative h-[33.1px] z-[0]"
            alt=""
            src="/vector-851.svg"
          />
          <div className="relative leading-[52.76px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
            Ido
          </div>
          <div className="w-[5.1px] absolute !m-[0] top-[12.9px] left-[12.3px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[5.1px] z-[2]" />
        </div>
        <div className="h-11 flex flex-row items-center justify-center gap-[24px] text-sm">
          <div className="relative leading-[20px] tablet-hrefbtn">Apps</div>
          <div className="relative leading-[20px] tablet-hrefbtn"
          onClick={onPartnershipTextClick}
          >
            Partnership</div>
          <div className="relative leading-[20px] tablet-hrefbtn"
          onClick={onFAQTextClick}
          >
            FAQs</div>
          <div className="relative leading-[20px] tablet-hrefbtn"
          onClick={onContactTextClick}
          >
            Contact</div>
        </div>
        <div className="touch-btn-primary w-[73px] h-8 flex flex-row items-center justify-center p-1.5 box-border">
          <div className="relative leading-[16px]">Get started</div>
        </div>
      </div>
    </div>
  )
  const futureHeader = (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_512px)] [backdrop-filter:blur(24px)] bg-gray-100 w-[1024px] h-[92px] flex flex-col items-center justify-start p-6 box-border text-left text-14xl text-neutral-100 font-button-1-regular`}
    >
      <div className="flex flex-row items-center justify-start gap-[40px]">
        <div className="w-[100px] shadow-[0px_2.5px_3.56px_rgba(0,_0,_0,_0.65)] h-[50px] flex flex-row items-center justify-start py-0 px-[4.9px] box-border relative gap-[8px] font-pacifico">
          <img
            className="w-[35px] relative h-[33.1px] z-[0]"
            alt=""
            src="/vector-851.svg"
          />
          <div className="relative leading-[52.76px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
            Ido
          </div>
          <div className="w-[5.1px] absolute !m-[0] top-[12.9px] left-[12.3px] rounded-[50%] [background:linear-gradient(180deg,_#cc0f3c_34.5%,_#66081e)] h-[5.1px] z-[2]" />
        </div>
        <div className="h-11 flex flex-row items-center justify-center gap-[24px] text-sm">
          <div className="relative leading-[20px] active:underline">Apps</div>
          <div className="relative leading-[20px] active:underline">API</div>
          <div className="relative leading-[20px] active:underline"
          onClick={onPartnershipTextClick}
          >
            Partnership</div>
          <div className="relative leading-[20px] active:underline">Adverts</div>
          <div className="relative leading-[20px] active:underline"
          onClick={onFAQTextClick}
          >
            FAQs</div>
          <div className="relative leading-[20px] active:underline">Price</div>
          <div className="relative leading-[20px] active:underline"
          onClick={onContactTextClick}
          >
            Contact</div>
        </div>
        <div className="w-[73px] rounded-md bg-primary-500 h-8 flex flex-row items-center justify-center p-1.5 box-border text-right text-xs active:bg-primary-500/80">
          <div className="relative leading-[16px]">Get started</div>
        </div>
      </div>
    </div>
  )
  return (
   <>
   {activeHeader}
   </>
  );
};

export default THeader;
