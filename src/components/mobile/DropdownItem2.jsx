import { useMemo } from "react";
import PropTypes from "prop-types";
/**
 * Dropdown item for filter dropdowns (Year, Ratings, Genre)
 */
const DropdownItem2 = ({
  className = "",
  all,
  allTextDecoration,
  item2BorderBottom,
  allHref,
  allTarget,
  item2Width,
}) => {
  const allStyle = useMemo(() => {
    return {
      textDecoration: allTextDecoration,
    };
  }, [allTextDecoration]);

  const item2Style = useMemo(() => {
    return {
      borderBottom: item2BorderBottom,
      width: item2Width,
    };
  }, [item2BorderBottom, item2Width]);

  return (
    <div
      className={`w-[20.938rem] bg-neutral-700 box-border flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-2-bold border-b-[1px] border-solid border-neutral-800 ${className}`}
      style={item2Style}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover hidden"
        alt=""
        src="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <div className="flex-1 relative leading-[1.5rem]" style={allStyle}>
        {all}
      </div>
    </div>
  );
};

DropdownItem2.propTypes = {
  className: PropTypes.string,
  all: PropTypes.string,
  allHref: PropTypes.string,
  allTarget: PropTypes.string,

  /** Style props */
  allTextDecoration: PropTypes.any,
  item2BorderBottom: PropTypes.any,
  item2Width: PropTypes.any,
};

export default DropdownItem2;
