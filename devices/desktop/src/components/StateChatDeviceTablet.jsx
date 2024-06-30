import { useMemo } from "react";
import PropTypes from "prop-types";

const StateChatDeviceTablet = ({
  className = "",
  rectangle2002,
  userName = "User name",
  lastMessage = "Desc",
  date = "09 Apr 2024",
  time = "18:35",
  stateChatDeviceTabletGap,
  stateChatDeviceTabletAlignSelf,
  stateChatDeviceTabletWidth,
  rectangleIconWidth,
  rectangleIconHeight,
  userNameFontSize,
  userNameLineHeight,
  descFontSize,
  descLineHeight,
  dateTimeGap,
  apr2024FontSize,
  apr2024LineHeight,
  divFontSize,
  divLineHeight,
}) => {
  const stateChatDeviceTabletStyle = useMemo(() => {
    return {
      gap: stateChatDeviceTabletGap,
      alignSelf: stateChatDeviceTabletAlignSelf,
      width: stateChatDeviceTabletWidth,
    };
  }, [
    stateChatDeviceTabletGap,
    stateChatDeviceTabletAlignSelf,
    stateChatDeviceTabletWidth,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconWidth, rectangleIconHeight]);

  const userNameStyle = useMemo(() => {
    return {
      fontSize: userNameFontSize,
      lineHeight: userNameLineHeight,
    };
  }, [userNameFontSize, userNameLineHeight]);

  const descStyle = useMemo(() => {
    return {
      fontSize: descFontSize,
      lineHeight: descLineHeight,
    };
  }, [descFontSize, descLineHeight]);

  const dateTimeStyle = useMemo(() => {
    return {
      gap: dateTimeGap,
    };
  }, [dateTimeGap]);

  const apr2024Style = useMemo(() => {
    return {
      fontSize: apr2024FontSize,
      lineHeight: apr2024LineHeight,
    };
  }, [apr2024FontSize, apr2024LineHeight]);

  const divStyle = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  return (
    <div
      className={`max-w-full flex flex-row items-center justify-start py-4 px-5 box-border gap-[24px] text-left text-5xl text-neutral-100 font-overline-regular self-stretch ${className}`}
      style={stateChatDeviceTabletStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
        <img
          className="w-14 relative rounded-9xl h-14 object-cover"
          alt=""
          src={rectangle2002}
          style={rectangleIconStyle}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div
            className="self-stretch relative leading-[32px] font-semibold"
            style={userNameStyle}
          >
            {userName}
          </div>
          <div
            className="self-stretch relative text-base leading-[24px] text-neutral-400"
            style={descStyle}
          >
            {lastMessage}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-end justify-center gap-[8px] text-right text-sm text-neutral-500"
        style={dateTimeStyle}
      >
        <div
          className="relative leading-[20px] font-light"
          style={apr2024Style}
        >
          {date}
        </div>
        <div className="relative leading-[20px] font-light" style={divStyle}>
          {time}
        </div>
      </div>
    </div>
  );
};

StateChatDeviceTablet.propTypes = {
  className: PropTypes.string,
  rectangle2002: PropTypes.string,
  userName: PropTypes.string,
  lastMessage: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,

  /** Style props */
  stateChatDeviceTabletGap: PropTypes.any,
  stateChatDeviceTabletAlignSelf: PropTypes.any,
  stateChatDeviceTabletWidth: PropTypes.any,
  rectangleIconWidth: PropTypes.any,
  rectangleIconHeight: PropTypes.any,
  userNameFontSize: PropTypes.any,
  userNameLineHeight: PropTypes.any,
  descFontSize: PropTypes.any,
  descLineHeight: PropTypes.any,
  dateTimeGap: PropTypes.any,
  apr2024FontSize: PropTypes.any,
  apr2024LineHeight: PropTypes.any,
  divFontSize: PropTypes.any,
  divLineHeight: PropTypes.any,
};

export default StateChatDeviceTablet;
