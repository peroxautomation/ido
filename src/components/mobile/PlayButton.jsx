import PropTypes from "prop-types";

const PlayButton = ({ className = "" }) => {
  return (
    <img
      className={`absolute top-[8.75rem] left-[calc(50%_-_28.5px)] w-[3.5rem] h-[3.5rem] overflow-hidden ${className}`}
      alt=""
      src="/hugeiconmultimedia-and-audiosolidplay1.svg"
    />
  );
};

PlayButton.propTypes = {
  className: PropTypes.string,
};

export default PlayButton;
