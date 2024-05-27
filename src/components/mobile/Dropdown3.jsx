import { list } from "postcss";
import PropTypes from "prop-types";

/**
 * Dropdown button for each filter dropdown (YearDropdown, GenereDropdown, RatingsDropdown, CountryDropdown)
 */
const Dropdown3 = ({ className = "", dropdown , Label, onClick, list}) => {
  const DropdownList = list;
  return (
    <div
      className={`relative flex-1 flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-2-bold ${className}`}
      onClick={onClick}
    >
      <div className="w-[10rem] hidden flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">{Label}</div>
      </div>
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem]">
        <div className="flex-1 relative leading-[1.5rem]">{dropdown}</div>
        <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
          <div className="absolute h-[22.92%] w-[47.92%] top-[38.75%] right-[25.83%] bottom-[38.33%] left-[26.25%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/dropdownArrow.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[10rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
      {DropdownList}
    </div>
  );
};

Dropdown3.propTypes = {
  className: PropTypes.string,
  dropdown: PropTypes.string,
  onclick: PropTypes.func,
  list: PropTypes.element
};

export default Dropdown3;
