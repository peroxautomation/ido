import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantTotal = ({
  className = "",
  ndText = "Premium",
  variantTotalWidth,
  variantTotalAlignSelf,
}) => {
  const variantTotalStyle = useMemo(() => {
    return {
      width: variantTotalWidth,
      alignSelf: variantTotalAlignSelf,
    };
  }, [variantTotalWidth, variantTotalAlignSelf]);

  return (
    <div
      className={`w-[335px] flex flex-row items-center justify-center text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={variantTotalStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start py-2 px-0">
        <div className="flex-1 relative leading-[32px] font-semibold">
          {ndText}
        </div>
      </div>
    </div>
  );
};

VariantTotal.propTypes = {
  className: PropTypes.string,
  ndText: PropTypes.string,

  /** Style props */
  variantTotalWidth: PropTypes.any,
  variantTotalAlignSelf: PropTypes.any,
};

export default VariantTotal;
