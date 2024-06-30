import { useMemo } from "react";
import PropTypes from "prop-types";

const DeviceTablet3 = ({
  className = "",
  deviceTabletBackgroundImage,
  deviceTabletPosition,
  deviceTabletAlignSelf,
  deviceTabletFlex,
  deviceTabletWidth,
  deviceTabletHeight,
  divLeft,
  divTop,
  divFontSize,
  divLineHeight,
}) => {
  const deviceTablet4Style = useMemo(() => {
    return {
      backgroundImage: deviceTabletBackgroundImage,
      position: deviceTabletPosition,
      alignSelf: deviceTabletAlignSelf,
      flex: deviceTabletFlex,
      width: deviceTabletWidth,
      height: deviceTabletHeight,
    };
  }, [
    deviceTabletBackgroundImage,
    deviceTabletPosition,
    deviceTabletAlignSelf,
    deviceTabletFlex,
    deviceTabletWidth,
    deviceTabletHeight,
  ]);

  const div4Style = useMemo(() => {
    return {
      left: divLeft,
      top: divTop,
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divLeft, divTop, divFontSize, divLineHeight]);

  return (
    <div
      className={`overflow-hidden bg-[url('/public/devicetablet@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-xl text-neutral-100 font-overline-regular self-stretch flex-1 ${className}`}
      style={deviceTablet4Style}
    >
      <div
        className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_22px)] leading-[28px]"
        style={div4Style}
      >
        64%
      </div>
    </div>
  );
};

DeviceTablet3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  deviceTabletBackgroundImage: PropTypes.any,
  deviceTabletPosition: PropTypes.any,
  deviceTabletAlignSelf: PropTypes.any,
  deviceTabletFlex: PropTypes.any,
  deviceTabletWidth: PropTypes.any,
  deviceTabletHeight: PropTypes.any,
  divLeft: PropTypes.any,
  divTop: PropTypes.any,
  divFontSize: PropTypes.any,
  divLineHeight: PropTypes.any,
};

export default DeviceTablet3;
