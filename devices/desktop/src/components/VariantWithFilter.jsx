import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantWithFilter = ({
  className = "",
  text = "Search",
  leftIcon = true,
  variantWithFilterWidth,
  variantWithFilterPosition,
  variantWithFilterTop,
  variantWithFilterRight,
  variantWithFilterLeft,
}) => {
  const variantWithFilterStyle = useMemo(() => {
    return {
      width: variantWithFilterWidth,
      position: variantWithFilterPosition,
      top: variantWithFilterTop,
      right: variantWithFilterRight,
      left: variantWithFilterLeft,
    };
  }, [
    variantWithFilterWidth,
    variantWithFilterPosition,
    variantWithFilterTop,
    variantWithFilterRight,
    variantWithFilterLeft,
  ]);

  return (
    <div
      className={`w-[696px] max-w-full flex flex-row items-center justify-start gap-[16px] text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={variantWithFilterStyle}
    >
      <div className="self-stretch flex-1 rounded-xl bg-white-8 flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidsearch-02.svg"
          />
        )}
        <div className="flex-1 relative leading-[24px]">{text}</div>
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlinefilter-06.svg"
      />
    </div>
  );
};

VariantWithFilter.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  leftIcon: PropTypes.bool,

  /** Style props */
  variantWithFilterWidth: PropTypes.any,
  variantWithFilterPosition: PropTypes.any,
  variantWithFilterTop: PropTypes.any,
  variantWithFilterRight: PropTypes.any,
  variantWithFilterLeft: PropTypes.any,
};

export default VariantWithFilter;
