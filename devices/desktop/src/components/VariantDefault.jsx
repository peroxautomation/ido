import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantDefault = ({
  className = "",
  text = "Search",
  leftIcon = true,
  variantDefaultWidth,
  variantDefaultPosition,
  variantDefaultTop,
  variantDefaultRight,
  variantDefaultLeft,
}) => {
  const variantDefaultStyle = useMemo(() => {
    return {
      width: variantDefaultWidth,
      position: variantDefaultPosition,
      top: variantDefaultTop,
      right: variantDefaultRight,
      left: variantDefaultLeft,
    };
  }, [
    variantDefaultWidth,
    variantDefaultPosition,
    variantDefaultTop,
    variantDefaultRight,
    variantDefaultLeft,
  ]);

  return (
    <div
      className={`w-[696px] max-w-full flex flex-row items-center justify-start text-left text-base text-neutral-100 font-overline-regular ${className}`}
      style={variantDefaultStyle}
    >
      <div className="self-stretch flex-1 rounded-xl bg-white-8 flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
        {leftIcon && (
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfacesolidsearch-023.svg"
          />
        )}
        <div className="flex-1 relative leading-[24px]">{text}</div>
      </div>
    </div>
  );
};

VariantDefault.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  leftIcon: PropTypes.bool,

  /** Style props */
  variantDefaultWidth: PropTypes.any,
  variantDefaultPosition: PropTypes.any,
  variantDefaultTop: PropTypes.any,
  variantDefaultRight: PropTypes.any,
  variantDefaultLeft: PropTypes.any,
};

export default VariantDefault;
