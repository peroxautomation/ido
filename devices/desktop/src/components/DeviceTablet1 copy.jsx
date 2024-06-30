import { useMemo } from "react";

const DeviceTablet1 = (props) => {
  const {
    className = "",
    front,
    titleText = "Want to try",
    creatorText = "Sabina Jeyhunzade",
    numOfVideoText = "7 video",
    info = true,
    deviceTabletWidth,
    deviceTabletPosition,
    deviceTabletTop,
    deviceTabletRight,
    deviceTabletLeft,
    deviceTabletBorderRadius,
    deviceTabletBackgroundColor,
    deviceTabletHeight,
    deviceTabletPadding,
    frontIconAlignSelf,
    frontIconHeight,
    frontIconWidth,
    infoEditBtnAlignSelf,
    infoEditBtnWidth,
    infoEditBtnPadding,
  } = props;
  const deviceTablet2Style = useMemo(() => {
    return {
      width: deviceTabletWidth,
      position: deviceTabletPosition,
      top: deviceTabletTop,
      right: deviceTabletRight,
      left: deviceTabletLeft,
      borderRadius: deviceTabletBorderRadius,
      backgroundColor: deviceTabletBackgroundColor,
      height: deviceTabletHeight,
      padding: deviceTabletPadding,
    };
  }, [
    deviceTabletWidth,
    deviceTabletPosition,
    deviceTabletTop,
    deviceTabletRight,
    deviceTabletLeft,
    deviceTabletBorderRadius,
    deviceTabletBackgroundColor,
    deviceTabletHeight,
    deviceTabletPadding,
  ]);

  const frontIconStyle = useMemo(() => {
    return {
      alignSelf: frontIconAlignSelf,
      height: frontIconHeight,
      width: frontIconWidth,
    };
  }, [frontIconAlignSelf, frontIconHeight, frontIconWidth]);

  const infoEditBtnStyle = useMemo(() => {
    return {
      alignSelf: infoEditBtnAlignSelf,
      width: infoEditBtnWidth,
      padding: infoEditBtnPadding,
    };
  }, [infoEditBtnAlignSelf, infoEditBtnWidth, infoEditBtnPadding]);

  return (
    <div
      className={`w-[696px] max-w-full flex flex-col items-start justify-start gap-[16px] text-left text-xl text-neutral-100 font-overline-regular ${className}`}
      style={deviceTablet2Style}
    >
      <img
        className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[400px] shrink-0 object-cover"
        alt=""
        src={front}
        style={frontIconStyle}
      />
      {info && (
        <div
          className="self-stretch flex flex-row items-start justify-center gap-[176px]"
          style={infoEditBtnStyle}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <div className="relative text-9xl leading-[36px] font-semibold">
              {titleText}
            </div>
            <div className="relative leading-[28px]">{creatorText}</div>
            <div className="relative leading-[28px] text-neutral-500">
              {numOfVideoText}
            </div>
          </div>
          <div className="rounded-xl bg-white-8 flex flex-row items-start justify-start p-2">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/hugeiconeducationoutlinepencil.svg"
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default DeviceTablet1;
