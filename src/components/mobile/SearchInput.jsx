import PropTypes from "prop-types";

const SearchInput = ({ className = "" }) => {
  return (
    <div
      className={`relative top-[13vh] h-[2.75rem] w-[20.938rem] flex flex-row ${className} content-center`}
    >
      <div className="w-[90vw] rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.5rem] px-[1rem] box-border gap-[0.5rem]">
        <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
          <img
            className="absolute h-[89.58%] w-[89.58%] top-[5.42%] right-[5%] bottom-[5%] left-[5.42%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/union3.svg"
          />
        </div>
        <input
          className="[border:none] [outline:none] font-button-1-regular text-[1rem] bg-[transparent] flex-1 relative leading-[1.5rem] text-neutral-100 text-left"
          placeholder="Search"
          type="text"
        />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
};

export default SearchInput;
