import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantForCategory = ({
  className = "",
  text = "Title of page",
  showLayers = true,
  variantForCategoryWidth,
  variantForCategoryAlignSelf,
  titleOfPageFontWeight,
  titleOfPageTextAlign,
}) => {
  const variantForCategoryStyle = useMemo(() => {
    return {
      width: variantForCategoryWidth,
      alignSelf: variantForCategoryAlignSelf,
    };
  }, [variantForCategoryWidth, variantForCategoryAlignSelf]);

  const titleOfPageStyle = useMemo(() => {
    return {
      fontWeight: titleOfPageFontWeight,
      textAlign: titleOfPageTextAlign,
    };
  }, [titleOfPageFontWeight, titleOfPageTextAlign]);

  return (
    <div
      className={`w-[696px] max-w-full flex flex-row items-start justify-center py-4 px-0 box-border text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantForCategoryStyle}
    >
      {showLayers && (
        <div
          className="relative leading-[32px] font-semibold"
          style={titleOfPageStyle}
        >
          {text}
        </div>
      )}
    </div>
  );
};

VariantForCategory.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  showLayers: PropTypes.bool,

  /** Style props */
  variantForCategoryWidth: PropTypes.any,
  variantForCategoryAlignSelf: PropTypes.any,
  titleOfPageFontWeight: PropTypes.any,
  titleOfPageTextAlign: PropTypes.any,
};

export default VariantForCategory;
