import { useMemo } from "react";
import PropTypes from "prop-types";

const SegmentedButton2 = ({
  className = "",
  placeholder,
  onClick
}) => {

  return (
    <div
      onClick={onClick}
      className={`flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] text-left text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <div
        className="relative leading-[1rem] font-semibold"
      >
        {placeholder}
      </div>
    </div>
  );
};

SegmentedButton2.propTypes = {
  className: PropTypes.string,
  free: PropTypes.string,
  showDiv: PropTypes.bool,

  /** Style props */
  divBackgroundColor: PropTypes.any,
  freeFontWeight: PropTypes.any,
  freeColor: PropTypes.any,
  divFlex: PropTypes.any,
  divWidth: PropTypes.any,
};

export default SegmentedButton2;
