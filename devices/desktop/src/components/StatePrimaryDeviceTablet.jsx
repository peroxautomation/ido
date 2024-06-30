import { useMemo } from "react";
import PropTypes from "prop-types";

const StatePrimaryDeviceTablet = ({
  className = "",
  text = "Unrelate",
  statePrimaryDeviceTabletBackgroundColor,
  statePrimaryDeviceTabletWidth,
  statePrimaryDeviceTabletHeight,
  statePrimaryDeviceTabletPosition,
  statePrimaryDeviceTabletTop,
  statePrimaryDeviceTabletLeft,
  unrelateLineHeight,
}) => {
  const statePrimaryDeviceTabletStyle = useMemo(() => {
    return {
      backgroundColor: statePrimaryDeviceTabletBackgroundColor,
      width: statePrimaryDeviceTabletWidth,
      height: statePrimaryDeviceTabletHeight,
      position: statePrimaryDeviceTabletPosition,
      top: statePrimaryDeviceTabletTop,
      left: statePrimaryDeviceTabletLeft,
    };
  }, [
    statePrimaryDeviceTabletBackgroundColor,
    statePrimaryDeviceTabletWidth,
    statePrimaryDeviceTabletHeight,
    statePrimaryDeviceTabletPosition,
    statePrimaryDeviceTabletTop,
    statePrimaryDeviceTabletLeft,
  ]);

  const unrelateStyle = useMemo(() => {
    return {
      lineHeight: unrelateLineHeight,
    };
  }, [unrelateLineHeight]);

  return (
    <div
      className={`w-[73px] rounded-md bg-primary-500 h-8 flex flex-row items-center justify-center p-1.5 box-border text-right text-sm text-neutral-100 font-overline-regular ${className}`}
      style={statePrimaryDeviceTabletStyle}
    >
      <div className="relative leading-[20px]" style={unrelateStyle}>
        {text}
      </div>
    </div>
  );
};

StatePrimaryDeviceTablet.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  statePrimaryDeviceTabletBackgroundColor: PropTypes.any,
  statePrimaryDeviceTabletWidth: PropTypes.any,
  statePrimaryDeviceTabletHeight: PropTypes.any,
  statePrimaryDeviceTabletPosition: PropTypes.any,
  statePrimaryDeviceTabletTop: PropTypes.any,
  statePrimaryDeviceTabletLeft: PropTypes.any,
  unrelateLineHeight: PropTypes.any,
};

export default StatePrimaryDeviceTablet;
