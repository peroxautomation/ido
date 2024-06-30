import { useMemo } from "react";

const StateDefaultSizeSmallVar = (props) => {
  const {
    className = "",
    hugeIconeducationsolidpen,
    text = "CTA",
    icon = true,
    stateDefaultSizeSmallVarWidth,
    stateDefaultSizeSmallVarBackgroundColor,
    stateDefaultSizeSmallVarPosition,
    stateDefaultSizeSmallVarTop,
    stateDefaultSizeSmallVarLeft,
    stateDefaultSizeSmallVarFlex,
    hugeIconeducationsolidpenOverflow,
    confirmDeleteAccount,
  } = props;
  const stateDefaultSizeSmallVarStyle = useMemo(() => {
    return {
      width: stateDefaultSizeSmallVarWidth,
      backgroundColor: stateDefaultSizeSmallVarBackgroundColor,
      position: stateDefaultSizeSmallVarPosition,
      top: stateDefaultSizeSmallVarTop,
      left: stateDefaultSizeSmallVarLeft,
      flex: stateDefaultSizeSmallVarFlex,
    };
  }, [
    stateDefaultSizeSmallVarWidth,
    stateDefaultSizeSmallVarBackgroundColor,
    stateDefaultSizeSmallVarPosition,
    stateDefaultSizeSmallVarTop,
    stateDefaultSizeSmallVarLeft,
    stateDefaultSizeSmallVarFlex,
  ]);

  const hugeIconeducationsolidpencStyle = useMemo(() => {
    return {
      overflow: hugeIconeducationsolidpenOverflow,
    };
  }, [hugeIconeducationsolidpenOverflow]);

  return (
    <div
      className={`cursor-pointer w-[101px] rounded-xl bg-neutral-800 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular hover:opacity-80 ${className}`}
      style={stateDefaultSizeSmallVarStyle}
      onClick={confirmDeleteAccount}
    >
      {icon && (
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src={hugeIconeducationsolidpen}
          style={hugeIconeducationsolidpencStyle}
        />
      )}
      <div className="relative leading-[24px] font-semibold">{text}</div>
    </div>
  );
};

export default StateDefaultSizeSmallVar;
