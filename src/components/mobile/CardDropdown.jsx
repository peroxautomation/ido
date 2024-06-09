import PropTypes from "prop-types";

const CardDropdown = ({ className = "" }) => {
  // Show recent searches
  const onDropdownClick = () => {
    document.getElementById('CardDropdownMenu').classList.toggle('hidden');
  }
  return (
    <div
      onClick={onDropdownClick}
      className={`flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="w-[20.938rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border">
        <div className="flex-1 relative leading-[1.5rem]">Select card</div>
      </div>
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-center justify-start py-[0.625rem] px-[1rem] box-border gap-[0.5rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem]"
          alt=""
          src="/mastercard.svg"
        />
        <div className="flex-1 relative leading-[1.5rem]">
          4169 8883 4320 1284
        </div>
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-01.svg"
        />
      </div>
      <div className="w-[20.938rem] hidden flex-row items-center justify-start py-[0.25rem] px-[0rem] box-border text-[0.875rem]">
        <div className="flex-1 relative leading-[1.25rem]">Helper text</div>
      </div>
    </div>
  );
};

CardDropdown.propTypes = {
  className: PropTypes.string,
};

export default CardDropdown;
