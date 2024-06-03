import { useMemo } from "react";
import MiniVideo1 from "./MiniVideo1";
import PropTypes from "prop-types";

const MiniVideosRow = ({
  className = "",
  miniVideosBackgroundImage,
  miniVideosBackgroundSize,
}) => {
  const miniVideos1Style = useMemo(() => {
    return {
      backgroundImage: miniVideosBackgroundImage,
      backgroundSize: miniVideosBackgroundSize,
    };
  }, [miniVideosBackgroundImage, miniVideosBackgroundSize]);

  return (
    <div
      className={`relative self-stretch grid grid-cols-[25%_25%_25%_25%] items-start w-[90vw] justify-start ${className}`}
      style={miniVideos1Style}
    >
      <MiniVideo1 />
      <MiniVideo1 miniVideosBackgroundImage="url('/mini-videos@2x.png')" />
      <MiniVideo1 miniVideosBackgroundImage="url('/mini-videos@2x.png')" />
      <MiniVideo1 miniVideosBackgroundImage="url('/mini-videos@2x.png')" />
    </div>
  );
};

MiniVideosRow.propTypes = {
  className: PropTypes.string,

  /** Style props */
  miniVideosBackgroundImage: PropTypes.any,
  miniVideosBackgroundSize: PropTypes.any,
};

export default MiniVideosRow;
