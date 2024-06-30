import { useMemo } from "react";
import PropTypes from "prop-types";

const VariantsForDropdown = ({
  className = "",
  hugeIconinterfacesolidsea,
  searchInputWidth,
  searchInputFlex,
}) => {
  const searchInputStyle = useMemo(() => {
    return {
      width: searchInputWidth,
      flex: searchInputFlex,
    };
  }, [searchInputWidth, searchInputFlex]);

  return (
    <div
      className={`box-border flex flex-row items-center justify-start text-left text-base text-neutral-100 font-overline-regular self-stretch border-b-[1px] border-solid border-neutral-900 ${className}`}
    >
      <div
        className="w-[335px] bg-neutral-700 flex flex-row items-start justify-start py-2 px-4 box-border gap-[8px]"
        style={searchInputStyle}
      >
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidsea}
        />
        <div className="flex-1 relative leading-[24px]">Search</div>
      </div>
    </div>
  );
};

VariantsForDropdown.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,

  /** Style props */
  searchInputWidth: PropTypes.any,
  searchInputFlex: PropTypes.any,
};

export default VariantsForDropdown;
