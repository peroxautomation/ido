import { useMemo } from "react";
import PropTypes from "prop-types";

const CardDropdownItem = ({
  className = "",
  masterCard,
  all,
  item2BorderBottom,
}) => {
  const item22Style = useMemo(() => {
    return {
      borderBottom: item2BorderBottom,
    };
  }, [item2BorderBottom]);

  return (
    <div
      className={`w-[20.938rem] bg-neutral-700 box-border flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular border-b-[1px] border-solid border-neutral-800 ${className}`}
      style={item22Style}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 hidden"
        alt=""
        src="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
      />
      <img className="w-[1.5rem] relative h-[1.5rem]" alt="" src={masterCard} />
      <div className="flex-1 relative leading-[1.5rem]">{all}</div>
    </div>
  );
};

CardDropdownItem.propTypes = {
  className: PropTypes.string,
  masterCard: PropTypes.string,
  all: PropTypes.string,

  /** Style props */
  item2BorderBottom: PropTypes.any,
};

export default CardDropdownItem;
