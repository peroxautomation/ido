import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantTabletFeature = ({
  className = "",
  stText = "Feature",
  variantTabletFeatureWidth,
  variantTabletFeatureAlignSelf,
}) => {
  const variantTabletFeatureStyle = useMemo(() => {
    return {
      width: variantTabletFeatureWidth,
      alignSelf: variantTabletFeatureAlignSelf,
    };
  }, [variantTabletFeatureWidth, variantTabletFeatureAlignSelf]);

  return (
    <div
      className={`w-[340px] flex flex-row items-center justify-center text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={variantTabletFeatureStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-center py-2 px-0 gap-[8px]">
        <img
          className="w-7 relative h-7 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfacesolidcheckcircle1.svg"
        />
        <div className="relative leading-[28px]">{stText}</div>
      </div>
    </div>
  );
};

VariantTabletFeature.propTypes = {
  className: PropTypes.string,
  stText: PropTypes.string,

  /** Style props */
  variantTabletFeatureWidth: PropTypes.any,
  variantTabletFeatureAlignSelf: PropTypes.any,
};

export default VariantTabletFeature;
