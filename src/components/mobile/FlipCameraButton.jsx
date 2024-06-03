import PropTypes from "prop-types";

const FlipCameraButton = ({ ctaClick, className = "" }) => {
  return (
    <div onClick={ctaClick}>
      <img
        className={`w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
        alt=""
        src="/hugeiconarrowsoutlinereload.svg"
      />
    </div>
  );
};

FlipCameraButton.propTypes = {
  className: PropTypes.string,
};

export default FlipCameraButton;
