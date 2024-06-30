import { useMemo } from "react";
import DeviceTabletStateHalfMove from "./DeviceTabletStateHalfMove";
import StateMovesDeviceTablet from "./StateMovesDeviceTablet";
const DesktopFullScreenMode = (props) => {
  const {
    className = "",
    post,
    deviceTabletSizeStateFuWidth,
    deviceTabletSizeStateFuHeight,
    deviceTabletSizeStateFuBackgroundImage,
    deviceTabletSizeStateFuPosition,
    deviceTabletSizeStateFuTop,
    deviceTabletSizeStateFuRight,
    deviceTabletSizeStateFuBottom,
    deviceTabletSizeStateFuLeft,
  } = props;
  const deviceTabletSizeStateFuStyle = useMemo(() => {
    return {
      width: deviceTabletSizeStateFuWidth,
      height: deviceTabletSizeStateFuHeight,
      backgroundImage: deviceTabletSizeStateFuBackgroundImage,
      position: deviceTabletSizeStateFuPosition,
      top: deviceTabletSizeStateFuTop,
      right: deviceTabletSizeStateFuRight,
      bottom: deviceTabletSizeStateFuBottom,
      left: deviceTabletSizeStateFuLeft,
    };
  }, [
    deviceTabletSizeStateFuWidth,
    deviceTabletSizeStateFuHeight,
    deviceTabletSizeStateFuBackgroundImage,
    deviceTabletSizeStateFuPosition,
    deviceTabletSizeStateFuTop,
    deviceTabletSizeStateFuRight,
    deviceTabletSizeStateFuBottom,
    deviceTabletSizeStateFuLeft,
  ]);

 
  return (
    <div
      className={`w-[744px] max-w-full h-[1133px] overflow-hidden bg-[url('/public/devicetablet-size--statefull@3x.png')] bg-cover bg-no-repeat bg-[top] ${className}`}
      style={deviceTabletSizeStateFuStyle}
    >
      <DeviceTabletStateHalfMove
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        showUpperContentContainer={false}
        showMiniBtn
        deviceTabletStateHalfMoveWidth="100%"
        deviceTabletStateHalfMovePosition="absolute"
        deviceTabletStateHalfMoveTop="0px"
        deviceTabletStateHalfMoveRight="0px"
        deviceTabletStateHalfMoveLeft="0px"
        deviceTabletStateHalfMoveHeight="188px"
        upperContentContainerAlignSelf="unset"
        upperContentContainerWidth="518px"
      />
      <DeviceTabletStateHalfMove
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        showUpperContentContainer
        showMiniBtn
        deviceTabletStateHalfMoveWidth="100%"
        deviceTabletStateHalfMovePosition="absolute"
        deviceTabletStateHalfMoveTop="0px"
        deviceTabletStateHalfMoveRight="0px"
        deviceTabletStateHalfMoveLeft="0px"
        deviceTabletStateHalfMoveHeight="unset"
        upperContentContainerAlignSelf="stretch"
        upperContentContainerWidth="unset"
      />
      <StateMovesDeviceTablet
        viewStory="View story"
        contentContainerConponent="/content-container-conponents5.svg"
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-inrectangle.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar3.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-021.svg"
        contentContainerConponent1="/content-container-conponents6.svg"
        contentContainerConponent2="/content-container-conponents4.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate1.svg"
        showContentContainerConponent
        stateMovesDeviceTabletWidth="100%"
        stateMovesDeviceTabletPosition="absolute"
        stateMovesDeviceTabletRight="0px"
        stateMovesDeviceTabletBottom="-0.1px"
        stateMovesDeviceTabletLeft="0px"
        viewStoryWidth="78px"
        viewStoryDisplay="inline-block"
      />
    </div>
  );
};

export default DesktopFullScreenMode;
