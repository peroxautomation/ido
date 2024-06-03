import PropTypes from "prop-types";

const MovesAddToPlaylist1 = ({ className = "" }) => {
  return (
    <img
      className={`w-[1.5rem] relative h-[1.5rem] ${className}`}
      alt=""
      src="/content-container-conponents1.svg"
    />
  );
};

MovesAddToPlaylist1.propTypes = {
  className: PropTypes.string,
};

export default MovesAddToPlaylist1;
