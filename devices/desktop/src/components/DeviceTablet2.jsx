import { useMemo } from "react";
import HIndexIcon from "./HIndexIcon";
import PropTypes from "prop-types";

const DeviceTablet2 = ({
  className = "",
  createdName = "Ronald Hilson",
  star5,
  style = "Original",
  percentage = "100%",
  prop,
  deviceTabletPosition,
  deviceTabletTop,
  deviceTabletLeft,
}) => {
  const deviceTablet3Style = useMemo(() => {
    return {
      position: deviceTabletPosition,
      top: deviceTabletTop,
      left: deviceTabletLeft,
    };
  }, [deviceTabletPosition, deviceTabletTop, deviceTabletLeft]);

  return (
    <div
      className={`w-[744px] max-w-full flex flex-col items-center justify-start gap-[8px] text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={deviceTablet3Style}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-6">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <div className="relative leading-[28px] font-semibold">
            {createdName}
          </div>
          <HIndexIcon
            subtract="/subtract.svg"
            star5="/star-5.svg"
            hIndexIconPosition="relative"
          />
          <div className="relative leading-[28px] text-center">{style}</div>
        </div>
        <div className="relative leading-[28px] text-center">{percentage}</div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-80 shrink-0 object-cover"
        alt=""
        src={prop}
      />
    </div>
  );
};

DeviceTablet2.propTypes = {
  className: PropTypes.string,
  createdName: PropTypes.string,
  star5: PropTypes.string,
  style: PropTypes.string,
  percentage: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  deviceTabletPosition: PropTypes.any,
  deviceTabletTop: PropTypes.any,
  deviceTabletLeft: PropTypes.any,
};

export default DeviceTablet2;
