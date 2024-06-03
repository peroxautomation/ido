import PropTypes from "prop-types";

const PlayMusicBtn = ({ className = "" }) => {
  return (
    <img
      className={`w-[2rem] relative h-[2rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/hugeiconmultimedia-and-audiooutlineplay.svg"
    />
  );
};

PlayMusicBtn.propTypes = {
  className: PropTypes.string,
};

export default PlayMusicBtn;
