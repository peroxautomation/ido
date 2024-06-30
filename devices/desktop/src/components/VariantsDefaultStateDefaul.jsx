import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantsDefaultStateDefaul = ({
  className = "",
  variantsDefaultStateDefauBorderBottom,
}) => {
  const variantsDefaultStateDefaulStyle = useMemo(() => {
    return {
      borderBottom: variantsDefaultStateDefauBorderBottom,
    };
  }, [variantsDefaultStateDefauBorderBottom]);

  return (
    <div
      className={`w-[315px] box-border flex flex-row items-end justify-between p-6 text-center text-xl text-neutral-100 font-overline-regular border-b-[1px] border-solid border-neutral-500 ${className}`}
      style={variantsDefaultStateDefaulStyle}
    >
      <div className="relative leading-[28px] font-semibold">
        Relate requests
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsbulkdirectionright-011.svg"
      />
    </div>
  );
};

VariantsDefaultStateDefaul.propTypes = {
  className: PropTypes.string,

  /** Style props */
  variantsDefaultStateDefauBorderBottom: PropTypes.any,
};

export default VariantsDefaultStateDefaul;
