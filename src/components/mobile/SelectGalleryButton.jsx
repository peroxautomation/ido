import PropTypes from "prop-types";

const SelectGalleryButton = ({ ctaClick, className = "" }) => {
  return (
    <button
      onClick={ctaClick}
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 ${className}`}
    >
      <img
        className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
    </button>
  );
};

SelectGalleryButton.propTypes = {
  className: PropTypes.string,
};

export default SelectGalleryButton;