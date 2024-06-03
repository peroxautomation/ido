import PropTypes from "prop-types";

const PrevFrameBtn = ({ className = "" }) => {
  return (
    <button
      className={`hidden cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] right-[11em] relative h-[1.5rem] overflow-hidden shrink-0 bottom-[4em]${className}`}
    >
      <img
        className="absolute h-[45.83%] w-9/12 top-[27.08%] right-[12.5%] bottom-[27.08%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </button>
  );
};

PrevFrameBtn.propTypes = {
  className: PropTypes.string,
};

export default PrevFrameBtn;
