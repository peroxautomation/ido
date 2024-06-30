import { useMemo } from "react";
import Menus from "./Menus";
import PropTypes from "prop-types";

const StateGuest = ({
  className = "",
  hugeIconinterfaceoutlineh,
  stateGuestPosition,
  stateGuestTop,
  stateGuestLeft,
}) => {
  const stateGuestStyle = useMemo(() => {
    return {
      position: stateGuestPosition,
      top: stateGuestTop,
      left: stateGuestLeft,
    };
  }, [stateGuestPosition, stateGuestTop, stateGuestLeft]);

  return (
    <div
      className={`bg-neutral-800 h-[1133px] flex flex-col items-start justify-start py-12 px-6 box-border gap-[24px] ${className}`}
      style={stateGuestStyle}
    >
      <img
        className="w-11 relative h-11 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidremove2.svg"
      />
      <Menus
        hugeIconinterfaceoutlineh="/hugeiconmultimedia-and-audiosolidmusic-014.svg"
        propPosition="unset"
        propHeight="unset"
        propTop="unset"
        propBottom="unset"
        propLeft="unset"
        propBackgroundColor="unset"
        propPadding="unset"
        propWidth="227px"
        propWidth1="227px"
        propWidth2="227px"
        propWidth3="227px"
        propBorderRadius="unset"
        propBackgroundColor1="unset"
        propWidth4="227px"
        propWidth5="227px"
        propWidth6="227px"
      />
    </div>
  );
};

StateGuest.propTypes = {
  className: PropTypes.string,
  hugeIconinterfaceoutlineh: PropTypes.string,

  /** Style props */
  stateGuestPosition: PropTypes.any,
  stateGuestTop: PropTypes.any,
  stateGuestLeft: PropTypes.any,
};

export default StateGuest;
