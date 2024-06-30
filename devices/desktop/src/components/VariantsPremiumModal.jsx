import { useMemo } from "react";
import StateOf3OriginalColumn from "./StateOf3OriginalColumn";
import MonthlyPayment from "./MonthlyPayment";
import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import PropTypes from "prop-types";

const VariantsPremiumModal = ({
  className = "",
  hugeIconinterfacesolidplu,
  variantsPremiumModalWidth,
  variantsPremiumModalPosition,
  variantsPremiumModalTop,
  variantsPremiumModalRight,
  variantsPremiumModalLeft,
}) => {
  const variantsPremiumModalStyle = useMemo(() => {
    return {
      width: variantsPremiumModalWidth,
      position: variantsPremiumModalPosition,
      top: variantsPremiumModalTop,
      right: variantsPremiumModalRight,
      left: variantsPremiumModalLeft,
    };
  }, [
    variantsPremiumModalWidth,
    variantsPremiumModalPosition,
    variantsPremiumModalTop,
    variantsPremiumModalRight,
    variantsPremiumModalLeft,
  ]);

  return (
    <div
      className={`w-[416px] rounded-3xl bg-neutral-800 max-w-full h-[456px] flex flex-col items-end justify-start py-3.5 px-4 box-border text-center text-base text-neutral-100 font-overline-regular ${className}`}
      style={variantsPremiumModalStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove.svg"
      />
      <div className="self-stretch h-[396px] flex flex-col items-center justify-start py-0 px-6 box-border gap-[32px]">
        <StateOf3OriginalColumn
          divBackgroundColor="unset"
          freeFontWeight="unset"
          freeColor="#6c6c6c"
          divBackgroundColor1="#252525"
          premiumColor="#fff"
          premiumFontWeight="600"
        />
        <div className="self-stretch h-[216px] flex flex-col items-center justify-start gap-[24px]">
          <MonthlyPayment amount="$10 " />
          <div className="self-stretch h-[152px] flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch relative leading-[24px]">
              All from free
            </div>
            <div className="self-stretch relative leading-[24px]">
              Create unlimited
            </div>
            <div className="self-stretch relative leading-[24px]">
              Remix unlimited
            </div>
          </div>
        </div>
        <SizeSmallStatePrimaryDev
          text="Continue"
          hugeIconinterfacesolidplu="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="#cc0f3c"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
        />
      </div>
    </div>
  );
};

VariantsPremiumModal.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidplu: PropTypes.string,

  /** Style props */
  variantsPremiumModalWidth: PropTypes.any,
  variantsPremiumModalPosition: PropTypes.any,
  variantsPremiumModalTop: PropTypes.any,
  variantsPremiumModalRight: PropTypes.any,
  variantsPremiumModalLeft: PropTypes.any,
};

export default VariantsPremiumModal;
