import PropTypes from "prop-types";

const NextButton = ({
  className = "",
  onNextClick,
  cta,
}) => {

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] leading-[1.5rem] font-semibold font-overline-semibold text-neutral-100 text-center inline-block ${className}`}
      onClick={onNextClick}
    >
      {cta}
    </button>
  );
};

NextButton.propTypes = {
  className: PropTypes.string,

  /** Style props */
  nextBorder: PropTypes.any,
  nextPadding: PropTypes.any,
  nextBackgroundColor: PropTypes.any,
  nextDisplay: PropTypes.any,

  /** Action props */
  onNextClick: PropTypes.func,
};

export default NextButton;
