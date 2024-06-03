import PropTypes from "prop-types";

const MovesLikes = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="w-[1.5rem] relative h-[1.5rem]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <img
            className="absolute h-3/4 w-[83.33%] top-[12.5%] right-[8.33%] bottom-[12.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector9.svg"
          />
        </div>
      </div>
      <div className="relative leading-[1rem]">63</div>
    </div>
  );
};

MovesLikes.propTypes = {
  className: PropTypes.string,
};

export default MovesLikes;
