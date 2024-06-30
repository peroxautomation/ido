import { useMemo } from "react";
import PropTypes from "prop-types";

const DeviceTablet4 = ({
  className = "",
  deviceTabletIconWidth,
  deviceTabletIconHeight,
  deviceTabletIconPosition,
  deviceTabletIconTop,
  deviceTabletIconRight,
  deviceTabletIconBottom,
  deviceTabletIconLeft,
  deviceTabletIconMaxHeight,
}) => {
  const deviceTabletIconStyle = useMemo(() => {
    return {
      width: deviceTabletIconWidth,
      height: deviceTabletIconHeight,
      position: deviceTabletIconPosition,
      top: deviceTabletIconTop,
      right: deviceTabletIconRight,
      bottom: deviceTabletIconBottom,
      left: deviceTabletIconLeft,
      maxHeight: deviceTabletIconMaxHeight,
    };
  }, [
    deviceTabletIconWidth,
    deviceTabletIconHeight,
    deviceTabletIconPosition,
    deviceTabletIconTop,
    deviceTabletIconRight,
    deviceTabletIconBottom,
    deviceTabletIconLeft,
    deviceTabletIconMaxHeight,
  ]);

  return (
    <img
      className={`w-[744px] max-w-full overflow-hidden h-[1133px] ${className}`}
      alt=""
      src="/devicetablet1.svg"
      style={deviceTabletIconStyle}
    />
  );
};

DeviceTablet4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  deviceTabletIconWidth: PropTypes.any,
  deviceTabletIconHeight: PropTypes.any,
  deviceTabletIconPosition: PropTypes.any,
  deviceTabletIconTop: PropTypes.any,
  deviceTabletIconRight: PropTypes.any,
  deviceTabletIconBottom: PropTypes.any,
  deviceTabletIconLeft: PropTypes.any,
  deviceTabletIconMaxHeight: PropTypes.any,
};

export default DeviceTablet4;
