import { useMemo } from "react";
import DeviceTabletStateHalfMove from "./DeviceTabletStateHalfMove";
import StateMovesDeviceTablet from "./StateMovesDeviceTablet";
import PropTypes from "prop-types";

const DeviceTabletSizeStateFu = ({
  className = "",
  subtract,
  star5,
  subtract1,
  star51,
  unrelate,
  viewStory,
  contentContainerConponent,
  hugeIconarrowsoutlinezoom,
  hugeIconinterfaceoutlines,
  hugeIconcommunicationoutl,
  contentContainerConponent1,
  contentContainerConponent2,
  hugeIconfinanceAndPayment,
  showMiniBtn,
  showContentContainerConponent,
  deviceTabletSizeStateFuWidth,
  deviceTabletSizeStateFuHeight,
  deviceTabletSizeStateFuBackgroundImage,
  deviceTabletSizeStateFuPosition,
  deviceTabletSizeStateFuTop,
  deviceTabletSizeStateFuRight,
  deviceTabletSizeStateFuBottom,
  deviceTabletSizeStateFuLeft,
  viewStoryWidth,
  viewStoryDisplay,
}) => {
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

  const viewStoryStyle = useMemo(() => {
    return {
      width: viewStoryWidth,
      display: viewStoryDisplay,
    };
  }, [viewStoryWidth, viewStoryDisplay]);

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

DeviceTabletSizeStateFu.propTypes = {
  className: PropTypes.string,
  subtract: PropTypes.string,
  star5: PropTypes.string,
  subtract1: PropTypes.string,
  star51: PropTypes.string,
  unrelate: PropTypes.string,
  viewStory: PropTypes.string,
  contentContainerConponent: PropTypes.string,
  hugeIconarrowsoutlinezoom: PropTypes.string,
  hugeIconinterfaceoutlines: PropTypes.string,
  hugeIconcommunicationoutl: PropTypes.string,
  contentContainerConponent1: PropTypes.string,
  contentContainerConponent2: PropTypes.string,
  hugeIconfinanceAndPayment: PropTypes.string,
  showMiniBtn: PropTypes.bool,
  showContentContainerConponent: PropTypes.bool,

  /** Style props */
  deviceTabletSizeStateFuWidth: PropTypes.any,
  deviceTabletSizeStateFuHeight: PropTypes.any,
  deviceTabletSizeStateFuBackgroundImage: PropTypes.any,
  deviceTabletSizeStateFuPosition: PropTypes.any,
  deviceTabletSizeStateFuTop: PropTypes.any,
  deviceTabletSizeStateFuRight: PropTypes.any,
  deviceTabletSizeStateFuBottom: PropTypes.any,
  deviceTabletSizeStateFuLeft: PropTypes.any,
  viewStoryWidth: PropTypes.any,
  viewStoryDisplay: PropTypes.any,
};

export default DeviceTabletSizeStateFu;
