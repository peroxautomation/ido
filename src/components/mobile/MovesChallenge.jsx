import PropTypes from "prop-types";

const MovesChallenge = ({ className = "", onCTAClick }) => {
  return (
    <img
      onClick={onCTAClick}
      className={`w-[1.5rem] relative h-[1.5rem] ${className}`}
      alt=""
      src="/content-container-conponents2.svg"
    />
  );
};

MovesChallenge.propTypes = {
  className: PropTypes.string,
};

export default MovesChallenge;
