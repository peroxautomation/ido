import { useMemo } from "react";

const StateInactiveSizeDefault = (props) => {
  const {
    className = "",
    text = "CTA",
    hugeIconeducationsolidpen,
    icon = true,
    stateInactiveSizeDefaultBackgroundColor,
    stateInactiveSizeDefaultPosition,
    stateInactiveSizeDefaultTop,
    stateInactiveSizeDefaultLeft,
    stateInactiveSizeDefaultWidth,
    stateInactiveSizeDefaultRight,
    stateInactiveSizeDefaultBottom,
    stateInactiveSizeDefaultGap,
    stateInactiveSizeDefaultFlex,
    stateInactiveSizeDefaultAlignSelf,
    hugeIconeducationsolidpenWidth,
    hugeIconeducationsolidpenHeight,
    confirmReason,
  } = props;
  const stateInactiveSizeDefaultStyle = useMemo(() => {
    return {
      backgroundColor: stateInactiveSizeDefaultBackgroundColor,
      position: stateInactiveSizeDefaultPosition,
      top: stateInactiveSizeDefaultTop,
      left: stateInactiveSizeDefaultLeft,
      width: stateInactiveSizeDefaultWidth,
      right: stateInactiveSizeDefaultRight,
      bottom: stateInactiveSizeDefaultBottom,
      gap: stateInactiveSizeDefaultGap,
      flex: stateInactiveSizeDefaultFlex,
      alignSelf: stateInactiveSizeDefaultAlignSelf,
    };
  }, [
    stateInactiveSizeDefaultBackgroundColor,
    stateInactiveSizeDefaultPosition,
    stateInactiveSizeDefaultTop,
    stateInactiveSizeDefaultLeft,
    stateInactiveSizeDefaultWidth,
    stateInactiveSizeDefaultRight,
    stateInactiveSizeDefaultBottom,
    stateInactiveSizeDefaultGap,
    stateInactiveSizeDefaultFlex,
    stateInactiveSizeDefaultAlignSelf,
  ]);

  const hugeIconeducationsolidpenc1Style = useMemo(() => {
    return {
      width: hugeIconeducationsolidpenWidth,
      height: hugeIconeducationsolidpenHeight,
    };
  }, [hugeIconeducationsolidpenWidth, hugeIconeducationsolidpenHeight]);

  return (
    <div
      className={`cursor-pointer w-[335px] rounded-xl bg-primary-100 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular ${className}`}
      style={stateInactiveSizeDefaultStyle}
      onClick={confirmReason}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
      {icon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={hugeIconeducationsolidpen}
          style={hugeIconeducationsolidpenc1Style}
        />
      )}
    </div>
  );
};

export default StateInactiveSizeDefault;
