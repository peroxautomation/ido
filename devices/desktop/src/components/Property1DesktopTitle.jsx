import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1DesktopTitle = (props) => {
  const {
    className = "",
    text = "Payment history",
    showLayers = true,
    property1DesktopTitlePosition,
    property1DesktopTitleTop,
    property1DesktopTitleLeft,
    property1DesktopTitleWidth,
    property1DesktopTitleAlignSelf,
    onClick,
  } = props;
  const property1DesktopTitleStyle = useMemo(() => {
    return {
      position: property1DesktopTitlePosition,
      top: property1DesktopTitleTop,
      left: property1DesktopTitleLeft,
      width: property1DesktopTitleWidth,
      alignSelf: property1DesktopTitleAlignSelf,
    };
  }, [
    property1DesktopTitlePosition,
    property1DesktopTitleTop,
    property1DesktopTitleLeft,
    property1DesktopTitleWidth,
    property1DesktopTitleAlignSelf,
  ]);

  return (
    <div
      className={`w-[1080px] max-w-full flex flex-row items-start justify-start py-4 px-0 box-border gap-[16px] text-left text-13xl text-neutral-100 font-overline-regular ${className}`}
      style={property1DesktopTitleStyle}
    >
      {showLayers && (
        <img
          className="cursor-pointer hover:opacity-80 w-10 relative h-10 overflow-hidden shrink-0"
          alt=""
          src="/hugeiconarrowsbulkdirectionleft-01.svg"
          onClick={onClick}
        />
      )}
      <div className="relative leading-[40px] font-semibold">{text}</div>
    </div>
  );
};

export default Property1DesktopTitle;
