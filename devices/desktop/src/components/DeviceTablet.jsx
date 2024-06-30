import { useMemo } from "react";
import GhostBtn from "./GhostBtn";
import PropTypes from "prop-types";

const DeviceTablet = (props) => {
  const {
    className = "",
    text = "Trending now",
    rightBtn = true,
    deviceTabletWidth,
    deviceTabletAlignSelf,
    onClick
  } = props;
  const deviceTablet1Style = useMemo(() => {
    return {
      width: deviceTabletWidth,
      alignSelf: deviceTabletAlignSelf,
    };
  }, [deviceTabletWidth, deviceTabletAlignSelf]);

  return (
    <div
      className={`w-[696px] max-w-full h-14 flex flex-row items-center justify-between pt-0 px-0 pb-4 box-border text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={deviceTablet1Style}
    >
      <div className="relative leading-[32px] font-semibold">{text}</div>
      <GhostBtn text="View all" onClick={onClick}/>
    </div>
  );
};

export default DeviceTablet;
