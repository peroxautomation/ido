import PropTypes from "prop-types";

/**
 * Searchbox input component
 * @returns JSX element
 */
const SearchInput1 = ({
  className = "",
  hugeIconinterfacesolidsea,
  searchPlaceholder,
}) => {
  return (
    <div
      className={`flex-1 rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] gap-[0.5rem] ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfacesolidsea}
      />
      <input
        className="[border:none] [outline:none] font-button-2-bold text-[1rem] bg-[transparent] flex-1 relative leading-[1.5rem] text-neutral-100 text-left"
        placeholder={searchPlaceholder}
        type="text"
      />
    </div>
  );
};

SearchInput1.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsea: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

export default SearchInput1;
