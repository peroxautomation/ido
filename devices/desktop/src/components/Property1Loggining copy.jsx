import { useMemo } from "react";
import StateInactiveSizeDefault from "./StateInactiveSizeDefault";
import UserNameImg from "./UserNameImg";
import PropTypes from "prop-types";

const Property1Loggining = ({
  className = "",
  hugeIconmenuoutlinemenuLi,
  ellipse1254,
  property1LogginingPosition,
  property1LogginingTop,
  property1LogginingLeft,
  property1LogginingWidth,
  property1LogginingRight,
}) => {
  const property1LogginingStyle = useMemo(() => {
    return {
      position: property1LogginingPosition,
      top: property1LogginingTop,
      left: property1LogginingLeft,
      width: property1LogginingWidth,
      right: property1LogginingRight,
    };
  }, [
    property1LogginingPosition,
    property1LogginingTop,
    property1LogginingLeft,
    property1LogginingWidth,
    property1LogginingRight,
  ]);

  return (
    <div
      className={`w-[744px] max-w-full flex flex-row items-start justify-start py-2 px-6 box-border gap-[203px] text-center text-5xl text-neutral-100 font-overline-regular ${className}`}
      style={property1LogginingStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[45px]">
        <img
          className="w-11 relative h-11"
          alt=""
          src={hugeIconmenuoutlinemenuLi}
        />
        <div className="relative leading-[32px] font-semibold">LOGO</div>
      </div>
      <div className="w-[336px] flex flex-row items-start justify-start gap-[16px]">
        <StateInactiveSizeDefault
          text="Create "
          hugeIconeducationsolidpen="/hugeiconinterfaceoutlineplus1.svg"
          icon
          stateInactiveSizeDefaultBackgroundColor="rgba(255, 255, 255, 0.08)"
          stateInactiveSizeDefaultPosition="unset"
          stateInactiveSizeDefaultTop="unset"
          stateInactiveSizeDefaultLeft="unset"
          stateInactiveSizeDefaultWidth="160px"
          stateInactiveSizeDefaultRight="unset"
          stateInactiveSizeDefaultBottom="unset"
          stateInactiveSizeDefaultGap="unset"
          stateInactiveSizeDefaultFlex="unset"
          stateInactiveSizeDefaultAlignSelf="unset"
          hugeIconeducationsolidpenWidth="24px"
          hugeIconeducationsolidpenHeight="24px"
        />
        <UserNameImg ellipse1254="/ellipse-1254@2x.png" />
      </div>
    </div>
  );
};

Property1Loggining.propTypes = {
  className: PropTypes.string,
  hugeIconmenuoutlinemenuLi: PropTypes.string,
  ellipse1254: PropTypes.string,

  /** Style props */
  property1LogginingPosition: PropTypes.any,
  property1LogginingTop: PropTypes.any,
  property1LogginingLeft: PropTypes.any,
  property1LogginingWidth: PropTypes.any,
  property1LogginingRight: PropTypes.any,
};

export default Property1Loggining;
