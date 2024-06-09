import { useMemo } from "react";
import PropTypes from "prop-types";

const SearchResultItem = ({ className = "", placeholder, item2BorderBottom }) => {
  const item21Style = useMemo(() => {
    return {
      borderBottom: item2BorderBottom,
    };
  }, [item2BorderBottom]);

  return (
    <div
      className={`w-[20.938rem] bg-neutral-700 box-border flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-2-bold border-b-[1px] border-solid border-neutral-800 ${className}`}
      style={item21Style}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <div className="flex-1 relative leading-[1.5rem]">{placeholder}</div>
    </div>
  );
};

SearchResultItem.propTypes = {
  className: PropTypes.string,
  all: PropTypes.string,

  /** Style props */
  item2BorderBottom: PropTypes.any,
};

export default SearchResultItem;
