import PropTypes from "prop-types";

/**
 * Dropdown container component
 * @param {*} param0
 * @returns
 */
const Dropdown = ({ className = "", name, selected, DropdownOptions }) => {
  /**
   * Toggle dropdown list
   * @param {*} event
   */
  const onCTAClick = (event) => {
    event.currentTarget.lastChild.classList.toggle("hidden");
  };

  return (
    <div
      onClick={onCTAClick}
      className={`relative self-stretch flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="self-stretch rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] gap-[0.5rem]">
        <div className="flex-1 relative leading-[1.5rem]">
          {selected != null ? selected : name}
        </div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem] text-danger-500">
          Select your city {`${name}`}
        </div>
      </div>
      <DropdownOptions></DropdownOptions>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  label: PropTypes.string,
  dropdown: PropTypes.string,
};

export default Dropdown;
