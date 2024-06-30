import VariantForCategory from "./VariantForCategory";
import VariantsDefaultStateDefaul from "./VariantsDefaultStateDefaul";
import StateDefault2 from "./StateDefault2";
import PropTypes from "prop-types";

const VariantAllNotifications = ({ className = "", titleOfPage }) => {
  return (
    <div
      className={`rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-neutral-800 box-border h-[916px] flex flex-col items-start justify-start text-center text-xl text-neutral-100 font-overline-regular border-l-[1px] border-solid border-neutral-700 ${className}`}
    >
      <VariantForCategory
        text="Title of page"
        showLayers
        variantForCategoryWidth="unset"
        variantForCategoryAlignSelf="stretch"
        titleOfPageFontWeight="bold"
        titleOfPageTextAlign="left"
      />
      <VariantsDefaultStateDefaul variantsDefaultStateDefauBorderBottom="1px solid #252525" />
      <div className="self-stretch flex flex-row items-center justify-start py-4 pr-0 pl-6">
        <b className="relative leading-[28px]">Today</b>
      </div>
      <StateDefault2 />
      <StateDefault2 />
      <StateDefault2 />
      <StateDefault2 />
      <StateDefault2 />
      <div className="self-stretch flex flex-row items-center justify-start py-4 pr-0 pl-6">
        <b className="relative leading-[28px]">This week</b>
      </div>
      <StateDefault2 />
      <StateDefault2 />
      <StateDefault2 />
    </div>
  );
};

VariantAllNotifications.propTypes = {
  className: PropTypes.string,
  titleOfPage: PropTypes.string,
};

export default VariantAllNotifications;
