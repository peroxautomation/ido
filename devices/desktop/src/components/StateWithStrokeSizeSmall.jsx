import { useMemo } from "react";

const StateWithStrokeSizeSmall = (props) => {
  const {
    className = "",
    hugeIconmultimediaAndAudi,
    hugeIcontimeAndDatesolidt,
    text = "All",
    icon = true,
    stateWithStrokeSizeSmallBorderBottom,
    stateWithStrokeSizeSmallAlignSelf,
    stateWithStrokeSizeSmallWidth,
    hugeIcontimeAndDatesolidOverflow,
    allTextDecoration,
    onClick,
  } = props;
  const stateWithStrokeSizeSmallStyle = useMemo(() => {
    return {
      borderBottom: stateWithStrokeSizeSmallBorderBottom,
      alignSelf: stateWithStrokeSizeSmallAlignSelf,
      width: stateWithStrokeSizeSmallWidth,
    };
  }, [
    stateWithStrokeSizeSmallBorderBottom,
    stateWithStrokeSizeSmallAlignSelf,
    stateWithStrokeSizeSmallWidth,
  ]);

  const hugeIcontimeAndDatesolidStyle = useMemo(() => {
    return {
      overflow: hugeIcontimeAndDatesolidOverflow,
    };
  }, [hugeIcontimeAndDatesolidOverflow]);

  const allStyle = useMemo(() => {
    return {
      textDecoration: allTextDecoration,
    };
  }, [allTextDecoration]);

  return (
    <div
      className={`cursor-pointer hover:opacity-80 bg-neutral-700 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-left text-base text-neutral-100 font-overline-regular self-stretch border-b-[1px] border-solid border-neutral-800 ${className}`}
      style={stateWithStrokeSizeSmallStyle}
      onClick={onClick}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
        alt=""
        src={hugeIconmultimediaAndAudi}
      />
      {icon && (
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
          alt=""
          src={hugeIcontimeAndDatesolidt}
          style={hugeIcontimeAndDatesolidStyle}
        />
      )}
      <div className="flex-1 relative leading-[24px]" style={allStyle}>
        {text}
      </div>
    </div>
  );
};

export default StateWithStrokeSizeSmall;
