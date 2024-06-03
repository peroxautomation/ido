import MusicInfo from "./MusicInfo";
import PauseMusicBtn from "./PauseMusicBtn";
import PropTypes from "prop-types";

const MusicRow1 = ({ className = "", onCTAClick }) => {
  return (
    <div
      onClick={onCTAClick}
      className={`w-[100%] flex flex-row items-center justify-between py-[0.75rem] px-[1.25rem] box-border text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <MusicInfo rectangle2002="/rectangle-2002@2x.jpg" />
      <PauseMusicBtn />
    </div>
  );
};

MusicRow1.propTypes = {
  className: PropTypes.string,
};

export default MusicRow1;
