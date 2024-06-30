import VariantForCategory from "./VariantForCategory";
import StateOffDeviceMobile from "./StateOffDeviceMobile";
import PropTypes from "prop-types";

const PushNotifications = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[16px] ${className}`}
    >
      <VariantForCategory
        text="Push notifications"
        showLayers
        variantForCategoryWidth="696px"
        variantForCategoryAlignSelf="unset"
        titleOfPageFontWeight="600"
        titleOfPageTextAlign="center"
      />
      <div className="w-[335px] flex flex-col items-start justify-start gap-[16px]">
        <StateOffDeviceMobile
          text="Pause all"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="Post, comment"
          toggle="/toggle3.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="Messages"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
        <StateOffDeviceMobile
          text="From Ido"
          toggle="/toggle2.svg"
          stateOffDeviceMobileAlignSelf="stretch"
          stateOffDeviceMobileWidth="unset"
        />
      </div>
    </div>
  );
};

PushNotifications.propTypes = {
  className: PropTypes.string,
};

export default PushNotifications;
