import { useMemo } from "react";
import PropTypes from "prop-types";

const MiniVideo1 = ({ className = "", miniVideosBackgroundImage }) => {
  const miniVideosStyle = useMemo(() => {
    return {
      backgroundImage: miniVideosBackgroundImage,
    };
  }, [miniVideosBackgroundImage]);

  return (
    <div
      className={`flex-1 relative h-[5.125rem] w-[5.7rem] overflow-hidden bg-[url('/public/mini-videos@2x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
      style={miniVideosStyle}
    />
  );
};

MiniVideo1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  miniVideosBackgroundImage: PropTypes.any,
};

export default MiniVideo1;
