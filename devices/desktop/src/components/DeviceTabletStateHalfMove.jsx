import { useMemo } from "react";
import StateForDefaultDeviceTabl from "./StateForDefaultDeviceTabl";
import PropTypes from "prop-types";

const DeviceTabletStateHalfMove = ({
  className = "",
  subtract,
  star5,
  unrelate,
  showUpperContentContainer,
  showMiniBtn,
  deviceTabletStateHalfMoveWidth,
  deviceTabletStateHalfMovePosition,
  deviceTabletStateHalfMoveTop,
  deviceTabletStateHalfMoveRight,
  deviceTabletStateHalfMoveLeft,
  deviceTabletStateHalfMoveHeight,
  upperContentContainerAlignSelf,
  upperContentContainerWidth,
}) => {
  const deviceTabletStateHalfMoveStyle = useMemo(() => {
    return {
      width: deviceTabletStateHalfMoveWidth,
      position: deviceTabletStateHalfMovePosition,
      top: deviceTabletStateHalfMoveTop,
      right: deviceTabletStateHalfMoveRight,
      left: deviceTabletStateHalfMoveLeft,
      height: deviceTabletStateHalfMoveHeight,
    };
  }, [
    deviceTabletStateHalfMoveWidth,
    deviceTabletStateHalfMovePosition,
    deviceTabletStateHalfMoveTop,
    deviceTabletStateHalfMoveRight,
    deviceTabletStateHalfMoveLeft,
    deviceTabletStateHalfMoveHeight,
  ]);


  return (
    <div
      className={`w-[518px] max-w-full flex flex-col items-start justify-start ${className}`}
      style={deviceTabletStateHalfMoveStyle}
    >
      <StateForDefaultDeviceTabl
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        showMiniBtn
      />
    </div>
  );
};

DeviceTabletStateHalfMove.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
  unrelate: PropTypes.string,
  showUpperContentContainer: PropTypes.bool,
  showMiniBtn: PropTypes.bool,

  /** Style props */
  deviceTabletStateHalfMoveWidth: PropTypes.any,
  deviceTabletStateHalfMovePosition: PropTypes.any,
  deviceTabletStateHalfMoveTop: PropTypes.any,
  deviceTabletStateHalfMoveRight: PropTypes.any,
  deviceTabletStateHalfMoveLeft: PropTypes.any,
  deviceTabletStateHalfMoveHeight: PropTypes.any,
  upperContentContainerAlignSelf: PropTypes.any,
  upperContentContainerWidth: PropTypes.any,
};

export default DeviceTabletStateHalfMove;
