import { useMemo } from "react";
import HIndexIcon from "./HIndexIcon";
import PropTypes from "prop-types";

const OmparisonCard2 = ({ className = "", rectangle2010, propLeft }) => {
  const omparisonCardStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[148px] left-[312px] flex flex-col items-start justify-start gap-[16px] text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={omparisonCardStyle}
    >
      <img
        className="w-[528px] relative h-[673px] object-cover"
        alt=""
        src={rectangle2010}
      />
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <div className="relative leading-[28px] font-semibold">
            Ronald Hilson
          </div>
          <HIndexIcon
            subtract="/subtract.svg"
            star5="/star-5.svg"
            hIndexIconPosition="relative"
          />
          <div className="relative leading-[28px] text-center">Original</div>
        </div>
        <div className="relative leading-[28px] text-center">100%</div>
      </div>
    </div>
  );
};

OmparisonCard2.propTypes = {
  className: PropTypes.string,
  rectangle2010: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default OmparisonCard2;
