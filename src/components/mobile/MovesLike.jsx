import PropTypes from "prop-types";

const MovesLike = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-[0.25rem] text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem]"
        alt=""
        src="/heart-icons.svg"
      />
      <div className="relative leading-[1rem]">63</div>
    </div>
  );
};

MovesLike.propTypes = {
  className: PropTypes.string,
};

export default MovesLike;
