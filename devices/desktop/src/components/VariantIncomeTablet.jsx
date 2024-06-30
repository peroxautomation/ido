import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantIncomeTablet = ({
  className = "",
  stText = "Feature",
  ndText = "Premium",
  variantIncomeTabletWidth,
  variantIncomeTabletAlignSelf,
  featureFontSize,
  featureLineHeight,
  premiumColor,
  premiumFontSize,
  premiumLineHeight,
  premiumFontWeight,
}) => {
  const variantIncomeTabletStyle = useMemo(() => {
    return {
      width: variantIncomeTabletWidth,
      alignSelf: variantIncomeTabletAlignSelf,
    };
  }, [variantIncomeTabletWidth, variantIncomeTabletAlignSelf]);

  const featureStyle = useMemo(() => {
    return {
      fontSize: featureFontSize,
      lineHeight: featureLineHeight,
    };
  }, [featureFontSize, featureLineHeight]);

  const premiumStyle = useMemo(() => {
    return {
      color: premiumColor,
      fontSize: premiumFontSize,
      lineHeight: premiumLineHeight,
      fontWeight: premiumFontWeight,
    };
  }, [premiumColor, premiumFontSize, premiumLineHeight, premiumFontWeight]);

  return (
    <div
      className={`w-[696px] box-border max-w-full flex flex-row items-center justify-between text-left text-xl text-neutral-100 font-overline-regular border-b-[1px] border-solid border-neutral-700 ${className}`}
      style={variantIncomeTabletStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-center py-3 px-0">
        <div className="flex-1 relative leading-[28px]" style={featureStyle}>
          {stText}
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-end py-3 px-0 text-right text-success-500">
        <div
          className="flex-1 relative leading-[28px] font-semibold"
          style={premiumStyle}
        >
          {ndText}
        </div>
      </div>
    </div>
  );
};

VariantIncomeTablet.propTypes = {
  className: PropTypes.string,
  stText: PropTypes.string,
  ndText: PropTypes.string,

  /** Style props */
  variantIncomeTabletWidth: PropTypes.any,
  variantIncomeTabletAlignSelf: PropTypes.any,
  featureFontSize: PropTypes.any,
  featureLineHeight: PropTypes.any,
  premiumColor: PropTypes.any,
  premiumFontSize: PropTypes.any,
  premiumLineHeight: PropTypes.any,
  premiumFontWeight: PropTypes.any,
};

export default VariantIncomeTablet;
