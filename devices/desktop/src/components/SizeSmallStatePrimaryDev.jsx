import { useMemo } from "react";

const SizeSmallStatePrimaryDev = (props) => {
  const {
    className = "",
    text = "CTA",
    hugeIconinterfacesolidplu,
    rightIcon = true,
    sizeSmallStatePrimaryDevBackgroundColor,
    sizeSmallStatePrimaryDevWidth,
    sizeSmallStatePrimaryDevPosition,
    sizeSmallStatePrimaryDevRight,
    sizeSmallStatePrimaryDevBottom,
    sizeSmallStatePrimaryDevLeft,
    cTAColor,
    onClick,
  } = props;
  const sizeSmallStatePrimaryDevStyle = useMemo(() => {
    return {
      backgroundColor: sizeSmallStatePrimaryDevBackgroundColor,
      width: sizeSmallStatePrimaryDevWidth,
      position: sizeSmallStatePrimaryDevPosition,
      right: sizeSmallStatePrimaryDevRight,
      bottom: sizeSmallStatePrimaryDevBottom,
      left: sizeSmallStatePrimaryDevLeft,
    };
  }, [
    sizeSmallStatePrimaryDevBackgroundColor,
    sizeSmallStatePrimaryDevWidth,
    sizeSmallStatePrimaryDevPosition,
    sizeSmallStatePrimaryDevRight,
    sizeSmallStatePrimaryDevBottom,
    sizeSmallStatePrimaryDevLeft,
  ]);

  const cTA1Style = useMemo(() => {
    return {
      color: cTAColor,
    };
  }, [cTAColor]);

  return (
    <div
      className={` cursor-pointer hover:opacity-80 w-[252px] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular ${className}`}
      style={sizeSmallStatePrimaryDevStyle}
      onClick={onClick}
    >
      <div className="relative leading-[24px] font-semibold" style={cTA1Style}>
        {text}
      </div>
      {rightIcon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src={hugeIconinterfacesolidplu}
        />
      )}
    </div>
  );
};

export default SizeSmallStatePrimaryDev;
