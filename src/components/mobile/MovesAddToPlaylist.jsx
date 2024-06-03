import PropTypes from "prop-types";

const MovesAddToPlaylist = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] w-[1.5rem] relative h-[1.5rem] ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/content-container-conponents1.svg"
      />
    </button>
  );
};

MovesAddToPlaylist.propTypes = {
  className: PropTypes.string,
};

export default MovesAddToPlaylist;
