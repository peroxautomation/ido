import { useMemo } from "react";
import DeviceTablet8 from "./DeviceTablet8";

const VariantsWhyAreYouLeavingI = (props) => {
  const {
    className = "",
    reason1,
    reason2,
    reason3,
    reason4,
    reason5,
    reason6,
    hugeIconeducationsolidpen,
    showCTA,
    variantsWhyAreYouLeavingIPosition,
    variantsWhyAreYouLeavingITop,
    variantsWhyAreYouLeavingILeft,
    variantsWhyAreYouLeavingIBackgroundColor,
    confirmReason,
    rejectingDelete,
  } = props;
  const variantsWhyAreYouLeavingIStyle = useMemo(() => {
    return {
      position: variantsWhyAreYouLeavingIPosition,
      top: variantsWhyAreYouLeavingITop,
      left: variantsWhyAreYouLeavingILeft,
      backgroundColor: variantsWhyAreYouLeavingIBackgroundColor,
    };
  }, [
    variantsWhyAreYouLeavingIPosition,
    variantsWhyAreYouLeavingITop,
    variantsWhyAreYouLeavingILeft,
    variantsWhyAreYouLeavingIBackgroundColor,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[616px] flex flex-col items-center justify-start p-6 box-border relative gap-[24px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={variantsWhyAreYouLeavingIStyle}
    >
      <div className="h-[524px] flex flex-col items-center justify-center pt-10 px-0 pb-0 box-border gap-[8px] z-[0]">
        <div className="self-stretch flex flex-col items-center justify-center text-sm text-neutral-300">
          <DeviceTablet8
            text="Why are you leaving Ido?"
            orSignUpFontSize="20px"
            orSignUpLineHeight="28px"
            orSignUpFontWeight="unset"
            orSignUpColor="#e9e9e9"
          />
          <div className="self-stretch relative leading-[20px]">
            We're sorry to see you go! We'd love to know why you want to delete
            your account, so we can improve the app and support our community.
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason1}
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason2}
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason3}
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason4}
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason5}
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-center justify-end">
          <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-start justify-start py-3 px-4 gap-[8px]">
            <img
              className="w-5 relative rounded h-5"
              alt=""
              src="/vector.svg"
            />
            <div className="flex-1 relative leading-[24px] font-semibold">
              {reason6}
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-center text-neutral-600">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="relative leading-[24px]">
              Other (please specify)
            </div>
          </div>
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/hugeiconinterfacesolideye.svg"
          />
        </div>
      </div>
      <button className={`btn-primary-active`} onClick={confirmReason}>
        Next
      </button>
      <img
        className="cursor-pointer hover:opacity-80 w-8 absolute !m-[0] top-[24px] left-[360px] h-8 overflow-hidden shrink-0 z-[2]"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
        onClick={rejectingDelete}
      />
    </div>
  );
};

export default VariantsWhyAreYouLeavingI;
