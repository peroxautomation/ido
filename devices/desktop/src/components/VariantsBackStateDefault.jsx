import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantsBackStateDefault = ({
  className = "",
  variantsBackStateDefaultBorderBottom,
}) => {
  const variantsBackStateDefaultStyle = useMemo(() => {
    return {
      borderBottom: variantsBackStateDefaultBorderBottom,
    };
  }, [variantsBackStateDefaultBorderBottom]);

  return (
    <div
      className={`w-[315px] box-border flex flex-row items-end justify-start p-6 gap-[48px] text-center text-xl text-neutral-100 font-overline-regular border-b-[1px] border-solid border-neutral-500 ${className}`}
      style={variantsBackStateDefaultStyle}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-013.svg"
      />
      <div className="relative leading-[28px] font-semibold">
        Relate requests
      </div>
    </div>
  );
};

VariantsBackStateDefault.propTypes = {
  className: PropTypes.string,

  /** Style props */
  variantsBackStateDefaultBorderBottom: PropTypes.any,
};

export default VariantsBackStateDefault;
