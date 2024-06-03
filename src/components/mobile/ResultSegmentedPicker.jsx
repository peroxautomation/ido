import PropTypes from "prop-types";

const ResultSegmentedPicker = ({ className = "" }) => {
  return (
    <div
      className={`relative top-[13vh] rounded-xl bg-neutral-800 w-[20.938rem] flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-button-1-regular ${className} self-baseline`}
    >
      <div className="w-[6.938rem] rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem] box-border gap-[0.5rem]">
        <div className="relative leading-[1rem] font-semibold">All</div>
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 hidden"
          alt=""
          src="/hugeiconarrowssoliddirectiondown-2.svg"
        />
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[7.063rem] rounded-xl flex flex-row items-center justify-center box-border">
        <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
          Similar
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[0.25rem] bg-[transparent] w-[6.938rem] rounded-xl flex flex-row items-center justify-center box-border">
        <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-500 text-left">
          Dissimilar
        </div>
      </button>
    </div>
  );
};

ResultSegmentedPicker.propTypes = {
  className: PropTypes.string,
};

export default ResultSegmentedPicker;
