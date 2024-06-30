import { useMemo } from "react";
import StateDefaultSizeSmallVar1 from "./StateDefaultSizeSmallVar1";
import PropTypes from "prop-types";

const StateForMovesDeviceTablet1 = ({
  className = "",
  hugeIconarrowsoutlinezoom,
  hugeIconinterfaceoutlines,
  hugeIconcommunicationoutl,
  contentContainerConponent,
  contentContainerConponent1,
  hugeIconfinanceAndPayment,
  stateForMovesDeviceTabletWidth,
  stateForMovesDeviceTabletPosition,
  stateForMovesDeviceTabletRight,
  stateForMovesDeviceTabletBottom,
  stateForMovesDeviceTabletLeft,
}) => {
  const stateForMovesDeviceTabletStyle = useMemo(() => {
    return {
      width: stateForMovesDeviceTabletWidth,
      position: stateForMovesDeviceTabletPosition,
      right: stateForMovesDeviceTabletRight,
      bottom: stateForMovesDeviceTabletBottom,
      left: stateForMovesDeviceTabletLeft,
    };
  }, [
    stateForMovesDeviceTabletWidth,
    stateForMovesDeviceTabletPosition,
    stateForMovesDeviceTabletRight,
    stateForMovesDeviceTabletBottom,
    stateForMovesDeviceTabletLeft,
  ]);

  return (
    <div
      className={`w-[518px] [background:linear-gradient(141.98deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.9))] max-w-full flex flex-row items-end justify-start text-center text-base text-neutral-100 font-overline-regular ${className}`}
      style={stateForMovesDeviceTabletStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-center py-4 px-[19px] gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-start">
          <StateDefaultSizeSmallVar1
            viewStoryText="View story"
            stateDefaultSizeSmallVarWidth="unset"
            stateDefaultSizeSmallVarBorderRadius="6px"
            stateDefaultSizeSmallVarPosition="unset"
            stateDefaultSizeSmallVarBottom="unset"
            stateDefaultSizeSmallVarLeft="unset"
            viewStoryFontSize="16px"
            viewStoryLineHeight="24px"
            viewStoryColor="#fff"
            viewStoryFontWeight="unset"
            viewStoryWidth="78px"
            viewStoryDisplay="inline-block"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start relative">
          <div className="self-stretch flex flex-col items-start justify-start z-[0]">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-white-40" />
            <div className="w-8 relative box-border h-px border-t-[1px] border-solid border-neutral-100" />
          </div>
          <div className="w-[11px] absolute !m-[0] top-[-6px] left-[25px] rounded-[50%] bg-neutral-100 h-[11px] z-[1]" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src={hugeIconarrowsoutlinezoom}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-4 px-5 gap-[16px]">
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img className="w-8 relative h-8" alt="" src="/heart-icons1.svg" />
          <div className="relative leading-[24px]">63</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src={hugeIconinterfaceoutlines}
          />
          <div className="relative leading-[24px]">4.6</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/hugeiconinterfaceoutlineeye2.svg"
          />
          <div className="relative leading-[24px]">487</div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src={hugeIconcommunicationoutl}
          />
          <div className="relative leading-[24px]">12</div>
        </div>
        <img
          className="w-8 relative h-8"
          alt=""
          src={contentContainerConponent}
        />
        <img
          className="w-8 relative h-8"
          alt=""
          src={contentContainerConponent1}
        />
        <img
          className="w-8 relative h-8"
          alt=""
          src="/content-container-conponents2.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconfinanceAndPayment}
        />
      </div>
    </div>
  );
};

StateForMovesDeviceTablet1.propTypes = {
  className: PropTypes.string,
  hugeIconarrowsoutlinezoom: PropTypes.string,
  hugeIconinterfaceoutlines: PropTypes.string,
  hugeIconcommunicationoutl: PropTypes.string,
  contentContainerConponent: PropTypes.string,
  contentContainerConponent1: PropTypes.string,
  hugeIconfinanceAndPayment: PropTypes.string,

  /** Style props */
  stateForMovesDeviceTabletWidth: PropTypes.any,
  stateForMovesDeviceTabletPosition: PropTypes.any,
  stateForMovesDeviceTabletRight: PropTypes.any,
  stateForMovesDeviceTabletBottom: PropTypes.any,
  stateForMovesDeviceTabletLeft: PropTypes.any,
};

export default StateForMovesDeviceTablet1;
