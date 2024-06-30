import { useMemo } from "react";
import PropTypes from "prop-types";

const DeviceMobile = ({
  className = "",
  hugeIconarrowsoutlineprev,
  hugeIconarrowsoutlinenext,
  showHugeIconarrowsoutlineprev,
  showHugeIconarrowsoutlinenext,
  deviceMobileWidth,
  deviceMobilePosition,
  deviceMobileTop,
  deviceMobileLeft,
  deviceMobileHeight,
  hugeIconarrowsoutlineprevWidth,
  hugeIconarrowsoutlineprevHeight,
  hugeIconarrowsoutlinenextWidth,
  hugeIconarrowsoutlinenextHeight,
}) => {
  const deviceMobileStyle = useMemo(() => {
    return {
      width: deviceMobileWidth,
      position: deviceMobilePosition,
      top: deviceMobileTop,
      left: deviceMobileLeft,
      height: deviceMobileHeight,
    };
  }, [
    deviceMobileWidth,
    deviceMobilePosition,
    deviceMobileTop,
    deviceMobileLeft,
    deviceMobileHeight,
  ]);

  const hugeIconarrowsoutlinepreviStyle = useMemo(() => {
    return {
      width: hugeIconarrowsoutlineprevWidth,
      height: hugeIconarrowsoutlineprevHeight,
    };
  }, [hugeIconarrowsoutlineprevWidth, hugeIconarrowsoutlineprevHeight]);

  const hugeIconarrowsoutlinenextStyle = useMemo(() => {
    return {
      width: hugeIconarrowsoutlinenextWidth,
      height: hugeIconarrowsoutlinenextHeight,
    };
  }, [hugeIconarrowsoutlinenextWidth, hugeIconarrowsoutlinenextHeight]);

  return (
    <div
      className={`w-[335px] flex flex-row items-start justify-between ${className}`}
      style={deviceMobileStyle}
    >
      {showHugeIconarrowsoutlineprev && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
          alt=""
          src={hugeIconarrowsoutlineprev}
          style={hugeIconarrowsoutlinepreviStyle}
        />
      )}
      {showHugeIconarrowsoutlinenext && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconarrowsoutlinenext}
          style={hugeIconarrowsoutlinenextStyle}
        />
      )}
    </div>
  );
};

DeviceMobile.propTypes = {
  className: PropTypes.string,
  hugeIconarrowsoutlineprev: PropTypes.string,
  hugeIconarrowsoutlinenext: PropTypes.string,
  showHugeIconarrowsoutlineprev: PropTypes.bool,
  showHugeIconarrowsoutlinenext: PropTypes.bool,

  /** Style props */
  deviceMobileWidth: PropTypes.any,
  deviceMobilePosition: PropTypes.any,
  deviceMobileTop: PropTypes.any,
  deviceMobileLeft: PropTypes.any,
  deviceMobileHeight: PropTypes.any,
  hugeIconarrowsoutlineprevWidth: PropTypes.any,
  hugeIconarrowsoutlineprevHeight: PropTypes.any,
  hugeIconarrowsoutlinenextWidth: PropTypes.any,
  hugeIconarrowsoutlinenextHeight: PropTypes.any,
};

export default DeviceMobile;
