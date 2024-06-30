import { useMemo } from "react";
import DeviceDefaultStateFullMov from "./DeviceDefaultStateFullMov";
import StateForMovesDeviceTablet1 from "./StateForMovesDeviceTablet1";
import PropTypes from "prop-types";

const DeviceTabletSizeStateHa = (props) => {
  const {
    deviceTabletSizeStateHaWidth,
    deviceTabletSizeStateHaHeight,
    deviceTabletSizeStateHaBackgroundImage,
    deviceTabletSizeStateHaPosition,
    deviceTabletSizeStateHaTop,
    deviceTabletSizeStateHaRight,
    deviceTabletSizeStateHaBottom,
    deviceTabletSizeStateHaLeft,
  } = props;
  const deviceTabletSizeStateHaStyle = useMemo(() => {
    return {
      // width: deviceTabletSizeStateHaWidth,
      // height: deviceTabletSizeStateHaHeight,
      backgroundImage: deviceTabletSizeStateHaBackgroundImage,
      position: deviceTabletSizeStateHaPosition,
      // top: deviceTabletSizeStateHaTop,
      right: deviceTabletSizeStateHaRight,
      bottom: deviceTabletSizeStateHaBottom,
      left: deviceTabletSizeStateHaLeft,
    };
  }, [
    deviceTabletSizeStateHaWidth,
    deviceTabletSizeStateHaHeight,
    deviceTabletSizeStateHaBackgroundImage,
    deviceTabletSizeStateHaPosition,
    deviceTabletSizeStateHaTop,
    deviceTabletSizeStateHaRight,
    deviceTabletSizeStateHaBottom,
    deviceTabletSizeStateHaLeft,
  ]);

  return (
    <div
      className={`w-[518px] max-w-full h-[800px] overflow-hidden bg-[url('/public/devicetablet-size--statehalf@3x.png')] bg-cover bg-no-repeat bg-[top]`}
      style={deviceTabletSizeStateHaStyle}
    >
      <DeviceDefaultStateFullMov
        subtract="/subtract.svg"
        star5="/star-5.svg"
        unrelate="Follow"
        deviceDefaultStateFullMovWidth="100%"
        deviceDefaultStateFullMovPosition="absolute"
        deviceDefaultStateFullMovTop="0px"
        deviceDefaultStateFullMovRight="0px"
        deviceDefaultStateFullMovLeft="0px"
      />
      <StateForMovesDeviceTablet1
        hugeIconarrowsoutlinezoom="/hugeiconarrowsoutlinezoom-outrectangle1.svg"
        hugeIconinterfaceoutlines="/hugeiconinterfaceoutlinestar3.svg"
        hugeIconcommunicationoutl="/hugeiconcommunicationoutlinechat-021.svg"
        contentContainerConponent="/content-container-conponents3.svg"
        contentContainerConponent1="/content-container-conponents4.svg"
        hugeIconfinanceAndPayment="/hugeiconfinance-and-paymentoutlinedonate1.svg"
        stateForMovesDeviceTabletWidth="100%"
        stateForMovesDeviceTabletPosition="absolute"
        stateForMovesDeviceTabletRight="0px"
        stateForMovesDeviceTabletBottom="0px"
        stateForMovesDeviceTabletLeft="0px"
      />
    </div>
  );
};


export default DeviceTabletSizeStateHa;
