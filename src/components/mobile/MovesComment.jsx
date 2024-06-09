import PropTypes from "prop-types";

const MovesComment = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem] ${className}`}
    >
      <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
        <img
          className="absolute h-3/4 w-[83.33%] top-[12.5%] right-[8.33%] bottom-[12.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector11.svg"
        />
      </div>
      <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-center">
        12
      </div>
    </button>
  );
};

MovesComment.propTypes = {
  className: PropTypes.string,
};

export default MovesComment;
