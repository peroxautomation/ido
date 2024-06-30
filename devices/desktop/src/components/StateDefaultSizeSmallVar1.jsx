import { useMemo } from "react";

const StateDefaultSizeSmallVar1 = (props) => {
  const {
    className = "",
    viewStoryText = "View story",
    stateDefaultSizeSmallVarWidth,
    stateDefaultSizeSmallVarBorderRadius,
    stateDefaultSizeSmallVarPosition,
    stateDefaultSizeSmallVarBottom,
    stateDefaultSizeSmallVarLeft,
    viewStoryFontSize,
    viewStoryLineHeight,
    viewStoryColor,
    viewStoryFontWeight,
    viewStoryWidth,
    viewStoryDisplay,
    deleteAccount,
  } = props;
  const stateDefaultSizeSmallVar1Style = useMemo(() => {
    return {
      width: stateDefaultSizeSmallVarWidth,
      borderRadius: stateDefaultSizeSmallVarBorderRadius,
      position: stateDefaultSizeSmallVarPosition,
      bottom: stateDefaultSizeSmallVarBottom,
      left: stateDefaultSizeSmallVarLeft,
    };
  }, [
    stateDefaultSizeSmallVarWidth,
    stateDefaultSizeSmallVarBorderRadius,
    stateDefaultSizeSmallVarPosition,
    stateDefaultSizeSmallVarBottom,
    stateDefaultSizeSmallVarLeft,
  ]);

  const viewStoryStyle = useMemo(() => {
    return {
      fontSize: viewStoryFontSize,
      lineHeight: viewStoryLineHeight,
      color: viewStoryColor,
      fontWeight: viewStoryFontWeight,
      width: viewStoryWidth,
      display: viewStoryDisplay,
    };
  }, [
    viewStoryFontSize,
    viewStoryLineHeight,
    viewStoryColor,
    viewStoryFontWeight,
    viewStoryWidth,
    viewStoryDisplay,
  ]);

  return (
    <div
      className={`cursor-pointer hover:opacity-80  w-[101px] rounded-md bg-neutral-800 flex flex-row items-center justify-center p-2 box-border text-center text-xs text-neutral-100 font-overline-regular`}
      style={stateDefaultSizeSmallVar1Style}
    >
      <div
        className="cursor-pointer relative leading-[16px]"
        style={viewStoryStyle}
        onClick={deleteAccount}
      >
        {viewStoryText}
      </div>
    </div>
  );
};

export default StateDefaultSizeSmallVar1;
