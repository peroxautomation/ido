import { useMemo } from "react";
import PropTypes from "prop-types";

const StateOpenedDeviceTablet = ({
  className = "",
  questionText = "Various versions have evolved over the years",
  answerText = "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
  stateOpenedDeviceTabletAlignSelf,
  stateOpenedDeviceTabletWidth,
}) => {
  const stateOpenedDeviceTabletStyle = useMemo(() => {
    return {
      alignSelf: stateOpenedDeviceTabletAlignSelf,
      width: stateOpenedDeviceTabletWidth,
    };
  }, [stateOpenedDeviceTabletAlignSelf, stateOpenedDeviceTabletWidth]);

  return (
    <div
      className={`max-w-full flex flex-col items-start justify-start text-left text-base text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateOpenedDeviceTabletStyle}
    >
      <div className="self-stretch bg-neutral-800 flex flex-row items-center justify-between py-3 px-4">
        <div className="relative leading-[24px] font-semibold">
          {questionText}
        </div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconinterfaceoutlineminus.svg"
        />
      </div>
      <div className="self-stretch bg-neutral-800 flex flex-row items-center justify-start pt-0 px-4 pb-5 text-sm text-neutral-300 border-b-[1px] border-solid border-neutral-700">
        <div className="flex-1 relative leading-[20px]">{answerText}</div>
      </div>
    </div>
  );
};

StateOpenedDeviceTablet.propTypes = {
  className: PropTypes.string,
  questionText: PropTypes.string,
  answerText: PropTypes.string,

  /** Style props */
  stateOpenedDeviceTabletAlignSelf: PropTypes.any,
  stateOpenedDeviceTabletWidth: PropTypes.any,
};

export default StateOpenedDeviceTablet;
