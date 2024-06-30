import { useMemo } from "react";
import StateOfflineDeviceTablet from "./StateOfflineDeviceTablet";
import PropTypes from "prop-types";

const DeviceTablet5 = ({
  className = "",
  ellipse1250,
  userName = "Oksana Ferrum",
  deviceTabletWidth,
  deviceTabletPosition,
  deviceTabletTop,
  deviceTabletRight,
  deviceTabletLeft,
  deviceTabletAlignSelf,
}) => {
  const deviceTabletStyle = useMemo(() => {
    return {
      width: deviceTabletWidth,
      position: deviceTabletPosition,
      top: deviceTabletTop,
      right: deviceTabletRight,
      left: deviceTabletLeft,
      alignSelf: deviceTabletAlignSelf,
    };
  }, [
    deviceTabletWidth,
    deviceTabletPosition,
    deviceTabletTop,
    deviceTabletRight,
    deviceTabletLeft,
    deviceTabletAlignSelf,
  ]);

  return (
    <div
      className={`w-[744px] bg-white-8 max-w-full flex flex-row items-center justify-start py-6 px-5 box-border gap-[16px] text-left text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={deviceTabletStyle}
    >
      <img
        className="w-8 relative h-8 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsbulkdirectionleft-011.svg"
      />
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <img
          className="w-[52px] relative rounded-[50%] h-[52px] object-cover"
          alt=""
          src={ellipse1250}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[32px] font-semibold">
            {userName}
          </div>
          <StateOfflineDeviceTablet />
        </div>
      </div>
    </div>
  );
};

DeviceTablet5.propTypes = {
  className: PropTypes.string,
  ellipse1250: PropTypes.string,
  userName: PropTypes.string,

  /** Style props */
  deviceTabletWidth: PropTypes.any,
  deviceTabletPosition: PropTypes.any,
  deviceTabletTop: PropTypes.any,
  deviceTabletRight: PropTypes.any,
  deviceTabletLeft: PropTypes.any,
  deviceTabletAlignSelf: PropTypes.any,
};

export default DeviceTablet5;
