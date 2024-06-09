import PropTypes from "prop-types";

const RelatingSearchInput = ({ className = "" }) => {
  return (
    <div
      className={`w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidsearch-021.svg"
      />
      <div className="flex-1 relative leading-[1.5rem]">Search</div>
    </div>
  );
};

RelatingSearchInput.propTypes = {
  className: PropTypes.string,
};

export default RelatingSearchInput;
