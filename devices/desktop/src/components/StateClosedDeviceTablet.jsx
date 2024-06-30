import { useMemo } from "react";
import PropTypes from "prop-types";

const StateClosedDeviceTablet = ({
  className = "",
  questionText = "Various versions have evolved over the years",
  stateClosedDeviceTabletAlignSelf,
  stateClosedDeviceTabletWidth,
}) => {
  const stateClosedDeviceTabletStyle = useMemo(() => {
    return {
      alignSelf: stateClosedDeviceTabletAlignSelf,
      width: stateClosedDeviceTabletWidth,
    };
  }, [stateClosedDeviceTabletAlignSelf, stateClosedDeviceTabletWidth]);

  return (
    <div
      className={`max-w-full flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateClosedDeviceTabletStyle}
    >
      <div className="self-stretch bg-neutral-800 flex flex-row items-center justify-between py-3.5 px-4 border-b-[1px] border-solid border-neutral-700">
        <div className="relative leading-[24px] font-semibold">
          {questionText}
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlineplus.svg"
        />
      </div>
    </div>
  );
};

StateClosedDeviceTablet.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,

  /** Style props */
  stateClosedDeviceTabletAlignSelf: PropTypes.any,
  stateClosedDeviceTabletWidth: PropTypes.any,
};

export default StateClosedDeviceTablet;
