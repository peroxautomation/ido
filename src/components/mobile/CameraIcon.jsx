import PropTypes from "prop-types";

const CameraIcon = ({ ctaClick, className = "" }) => {
  return (
    <button
      onClick={ctaClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
    >
      <img
        className="absolute h-3/4 w-[83.33%] top-[12.5%] right-[8.33%] bottom-[12.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector7.svg"
      />
      <div className="absolute h-[8.33%] w-[8.33%] top-[20.83%] right-[45.83%] bottom-[70.83%] left-[45.83%] rounded-[50%] bg-neutral-100" />
    </button>
  );
};

CameraIcon.propTypes = {
  className: PropTypes.string,
};

export default CameraIcon;