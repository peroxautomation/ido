import PropTypes from "prop-types";

const MovesShare1 = ({ className = "" }) => {
  return (
    <img
      className={`w-[1.5rem] relative h-[1.5rem] ${className}`}
      alt=""
      src="/content-container-conponents.svg"
    />
  );
};

MovesShare1.propTypes = {
  className: PropTypes.string,
};

export default MovesShare1;
