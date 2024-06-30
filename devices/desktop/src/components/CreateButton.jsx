import { useMemo } from "react";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";

const CreateButton = (props) => {
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
    <div className="">
      <div
        className={`w-[252px] rounded-xl bg-primary-500 flex flex-row items-center justify-center py-2.5 px-2 box-border gap-[8px] text-center text-base text-neutral-100 font-overline-regular ${className}`}
        style={sizeSmallStatePrimaryDevStyle}
      >
        <div
          className="relative leading-[24px] font-semibold"
          style={cTA1Style}
        >
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
      {/* <>
        <div className="left-[971px] rounded-2xl w-[252px] overflow-hidden flex flex-col items-start justify-start z-20">
          <StateWithStrokeSizeSmall
            hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
            hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
            text="Challenge"
            icon={false}
            stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
            stateWithStrokeSizeSmallAlignSelf="stretch"
            stateWithStrokeSizeSmallWidth="unset"
            hugeIcontimeAndDatesolidOverflow="hidden"
            allTextDecoration="unset"
          />
          <StateWithStrokeSizeSmall
            hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
            hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
            text="Cover"
            icon={false}
            stateWithStrokeSizeSmallBorderBottom="unset"
            stateWithStrokeSizeSmallAlignSelf="stretch"
            stateWithStrokeSizeSmallWidth="unset"
            hugeIcontimeAndDatesolidOverflow="hidden"
            allTextDecoration="none"
          />
        </div>
      </> */}
    </div>
  );
};

export default CreateButton;
