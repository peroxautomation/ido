import { useMemo } from "react";
import PropTypes from "prop-types";

const HugeIconsocialoutlinegmail = ({
  className = "",
  vector3014,
  hugeIconsocialoutlinegmaiPosition,
  hugeIconsocialoutlinegmaiWidth,
  hugeIconsocialoutlinegmaiHeight,
  rectangleDivBorder,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconLeft,
}) => {
  const hugeIconsocialoutlinegmailStyle = useMemo(() => {
    return {
      position: hugeIconsocialoutlinegmaiPosition,
      width: hugeIconsocialoutlinegmaiWidth,
      height: hugeIconsocialoutlinegmaiHeight,
    };
  }, [
    hugeIconsocialoutlinegmaiPosition,
    hugeIconsocialoutlinegmaiWidth,
    hugeIconsocialoutlinegmaiHeight,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: rectangleDivBorder,
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivBorder,
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      height: vectorIconHeight,
      width: vectorIconWidth,
      top: vectorIconTop,
      right: vectorIconRight,
      left: vectorIconLeft,
    };
  }, [
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconLeft,
  ]);

  return (
    <div
      className={`w-6 h-6 overflow-hidden ${className}`}
      style={hugeIconsocialoutlinegmailStyle}
    >
      <div
        className="absolute h-[81.25%] w-[89.58%] top-[9.58%] right-[5%] bottom-[9.17%] left-[5.42%] rounded box-border border-[1.5px] border-solid border-darkslategray"
        style={rectangleDivStyle}
      />
      <img
        className="absolute h-[33.33%] w-[83.33%] top-[29.17%] right-[8.33%] bottom-[37.5%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={vector3014}
        style={vectorIconStyle}
      />
    </div>
  );
};

HugeIconsocialoutlinegmail.propTypes = {
  className: PropTypes.string,
  vector3014: PropTypes.string,

  /** Style props */
  hugeIconsocialoutlinegmaiPosition: PropTypes.any,
  hugeIconsocialoutlinegmaiWidth: PropTypes.any,
  hugeIconsocialoutlinegmaiHeight: PropTypes.any,
  rectangleDivBorder: PropTypes.any,
  rectangleDivHeight: PropTypes.any,
  rectangleDivWidth: PropTypes.any,
  rectangleDivTop: PropTypes.any,
  rectangleDivRight: PropTypes.any,
  rectangleDivBottom: PropTypes.any,
  rectangleDivLeft: PropTypes.any,
  vectorIconHeight: PropTypes.any,
  vectorIconWidth: PropTypes.any,
  vectorIconTop: PropTypes.any,
  vectorIconRight: PropTypes.any,
  vectorIconLeft: PropTypes.any,
};

export default HugeIconsocialoutlinegmail;
