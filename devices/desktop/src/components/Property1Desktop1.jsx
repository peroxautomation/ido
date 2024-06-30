import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Desktop1 = ({
  className = "",
  text = "Log in",
  property1DesktopAlignSelf,
  property1DesktopPosition,
  property1DesktopTop,
  property1DesktopLeft,
  property1DesktopWidth,
  property1DesktopBottom,
  property1DesktopHeight,
}) => {
  const property1DesktopStyle = useMemo(() => {
    return {
      alignSelf: property1DesktopAlignSelf,
      position: property1DesktopPosition,
      top: property1DesktopTop,
      left: property1DesktopLeft,
      width: property1DesktopWidth,
      bottom: property1DesktopBottom,
      height: property1DesktopHeight,
    };
  }, [
    property1DesktopAlignSelf,
    property1DesktopPosition,
    property1DesktopTop,
    property1DesktopLeft,
    property1DesktopWidth,
    property1DesktopBottom,
    property1DesktopHeight,
  ]);

  return (
    <div
      className={`flex flex-row items-center justify-center py-0 px-2 box-border text-center text-21xl text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={property1DesktopStyle}
    >
      <div className="relative leading-[48px]">{text}</div>
    </div>
  );
};

Property1Desktop1.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  property1DesktopAlignSelf: PropTypes.any,
  property1DesktopPosition: PropTypes.any,
  property1DesktopTop: PropTypes.any,
  property1DesktopLeft: PropTypes.any,
  property1DesktopWidth: PropTypes.any,
  property1DesktopBottom: PropTypes.any,
  property1DesktopHeight: PropTypes.any,
};

export default Property1Desktop1;
