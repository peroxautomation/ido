import { useMemo, useState } from "react";

const SizeBigStateSecondaryDev = (props) => {
  const {
    onClick,
    className = "",
    hugeIconinterfacesolidplu,
    text = "CTA",
    hugeIconinterfacesolidplu1,
    leftIcon = true,
    rightIcon = true,
    sizeBigStateSecondaryDevBackgroundColor,
    sizeBigStateSecondaryDevAlignSelf,
    sizeBigStateSecondaryDevWidth,
    sizeBigStateSecondaryDevPosition,
    sizeBigStateSecondaryDevRight,
    sizeBigStateSecondaryDevBottom,
    sizeBigStateSecondaryDevLeft,
    sizeBigStateSecondaryDevFlex,
    sizeBigStateSecondaryDevBorder,
    sizeBigStateSecondaryDevTop,
    cTAColor,
  } = props;
  const sizeBigStateSecondaryDevStyle = useMemo(() => {
    return {
      backgroundColor: sizeBigStateSecondaryDevBackgroundColor,
      alignSelf: sizeBigStateSecondaryDevAlignSelf,
      width: sizeBigStateSecondaryDevWidth,
      position: sizeBigStateSecondaryDevPosition,
      right: sizeBigStateSecondaryDevRight,
      bottom: sizeBigStateSecondaryDevBottom,
      left: sizeBigStateSecondaryDevLeft,
      flex: sizeBigStateSecondaryDevFlex,
      border: sizeBigStateSecondaryDevBorder,
      top: sizeBigStateSecondaryDevTop,
    };
  }, [
    sizeBigStateSecondaryDevBackgroundColor,
    sizeBigStateSecondaryDevAlignSelf,
    sizeBigStateSecondaryDevWidth,
    sizeBigStateSecondaryDevPosition,
    sizeBigStateSecondaryDevRight,
    sizeBigStateSecondaryDevBottom,
    sizeBigStateSecondaryDevLeft,
    sizeBigStateSecondaryDevFlex,
    sizeBigStateSecondaryDevBorder,
    sizeBigStateSecondaryDevTop,
  ]);

  const cTAStyle = useMemo(() => {
    return {
      color: cTAColor,
    };
  }, [cTAColor]);

 

  return (
    <div
      className={`cursor-pointer rounded-xl bg-white-8 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular self-stretch hover:opacity-80 ${className}`}
      onClick={onClick}
      style={sizeBigStateSecondaryDevStyle}
    >
      {leftIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu}
        />
      )}
      <div className="relative leading-[24px] font-semibold" style={cTAStyle}>
        {text}
      </div>
      {rightIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu1}
        />
      )}
    </div>
  );
};

export default SizeBigStateSecondaryDev;
