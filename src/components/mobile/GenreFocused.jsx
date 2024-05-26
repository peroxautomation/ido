import PropTypes from "prop-types";

const GenreFocused = ({ className = "" }) => {
  return (
    <div
      className={`relative shadow-[0px_4px_23.5px_#000] rounded-xl box-border w-[15.5rem] min-w-[15.5em] h-[90%] overflow-hidden text-left text-[1rem] text-neutral-100 font-button-1-regular border-[0.5px] border-solid border-neutral-800 ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-1972@2x.png"
      />
      <b className="absolute top-[41.43%] left-[35%] leading-[1.5rem]">
        Hip Hop
      </b>
    </div>
  );
};

GenreFocused.propTypes = {
  className: PropTypes.string,
};

export default GenreFocused;
