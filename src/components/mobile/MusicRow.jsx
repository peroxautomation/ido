import MusicInfo from "./MusicInfo";
import PlayMusicBtn from "./PlayMusicBtn";
import PropTypes from "prop-types";

const MusicRow = ({ className = "" }) => {
  return (
    <div
      className={`w-[100%] flex flex-row items-center justify-between py-[0.75rem] px-[1.25rem] box-border ${className}`}
    >
      <MusicInfo rectangle2002="/rectangle-2002@2x.png" />
      <PlayMusicBtn />
    </div>
  );
};

MusicRow.propTypes = {
  className: PropTypes.string,
};

export default MusicRow;
