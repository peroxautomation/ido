import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";
import VariantIncomeTablet from "./VariantIncomeTablet";
import PropTypes from "prop-types";

const Subscriptions2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-2xl bg-neutral-800 flex flex-col items-start justify-start p-6 gap-[16px] text-left text-9xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="relative leading-[36px]">Subscriptions</div>
        <SizeSmallStatePrimaryDev
          text="Cancel subscriptions"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus2.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#cc240e"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <VariantIncomeTablet
          stText="Plan"
          ndText="Premium"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Duration"
          ndText="Monthly"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Status"
          ndText="Active"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Renewal date"
          ndText="18th May"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
        <VariantIncomeTablet
          stText="Amount"
          ndText="$10"
          variantIncomeTabletWidth="unset"
          variantIncomeTabletAlignSelf="stretch"
          featureFontSize="20px"
          featureLineHeight="28px"
          premiumColor="#fff"
          premiumFontSize="20px"
          premiumLineHeight="28px"
          premiumFontWeight="600"
        />
      </div>
    </div>
  );
};

Subscriptions2.propTypes = {
  className: PropTypes.string,
};

export default Subscriptions2;
