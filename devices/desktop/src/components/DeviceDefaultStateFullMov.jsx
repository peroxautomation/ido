import { useMemo } from "react";
import StateForMovesDeviceTablet from "./StateForMovesDeviceTablet";
import PropTypes from "prop-types";

const DeviceDefaultStateFullMov = ({
  className = "",
  subtract,
  star5,
  unrelate,
  deviceDefaultStateFullMovWidth,
  deviceDefaultStateFullMovPosition,
  deviceDefaultStateFullMovTop,
  deviceDefaultStateFullMovRight,
  deviceDefaultStateFullMovLeft,
}) => {
  const deviceDefaultStateFullMovStyle = useMemo(() => {
    return {
      width: deviceDefaultStateFullMovWidth,
      position: deviceDefaultStateFullMovPosition,
      top: deviceDefaultStateFullMovTop,
      right: deviceDefaultStateFullMovRight,
      left: deviceDefaultStateFullMovLeft,
    };
  }, [
    deviceDefaultStateFullMovWidth,
    deviceDefaultStateFullMovPosition,
    deviceDefaultStateFullMovTop,
    deviceDefaultStateFullMovRight,
    deviceDefaultStateFullMovLeft,
  ]);

  return (
    <div
      className={`w-[744px] max-w-full flex flex-col items-start justify-start ${className}`}
      style={deviceDefaultStateFullMovStyle}
    >
      <StateForMovesDeviceTablet
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
      />
    </div>
  );
};

DeviceDefaultStateFullMov.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
  unrelate: PropTypes.string,

  /** Style props */
  deviceDefaultStateFullMovWidth: PropTypes.any,
  deviceDefaultStateFullMovPosition: PropTypes.any,
  deviceDefaultStateFullMovTop: PropTypes.any,
  deviceDefaultStateFullMovRight: PropTypes.any,
  deviceDefaultStateFullMovLeft: PropTypes.any,
};

export default DeviceDefaultStateFullMov;
