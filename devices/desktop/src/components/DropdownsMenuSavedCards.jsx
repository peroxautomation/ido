import { useMemo } from "react";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";

const DropdownsMenuSavedCards = (props) => {
  const {
    className = "",
    all,
    propTop,
    propLeft,
    dropdownsMenuHeight,
    onClick,
  } = props;
  const dropdownsMenu2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      height: dropdownsMenuHeight,
    };
  }, [propTop, propLeft, dropdownsMenuHeight]);

  return (
    <div
      className={`absolute top-[523px] left-[211px] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl w-[321px] overflow-hidden flex flex-col items-start justify-start ${className}`}
      style={dropdownsMenu2Style}
    >
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/mastercard1.svg"
        text="4169 9028 3716 5583"
        icon
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="unset"
        stateWithStrokeSizeSmallWidth="335px"
        hugeIcontimeAndDatesolidOverflow="unset"
        allTextDecoration="unset"
        onClick={onClick}
      />

      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/mastercard1.svg"
        text="4169 6372 9301 2884"
        icon
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="unset"
        stateWithStrokeSizeSmallWidth="335px"
        hugeIcontimeAndDatesolidOverflow="unset"
        allTextDecoration="unset"
        onClick={onClick}
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/visa.svg"
        text="9073 6379 7134 8104"
        icon
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="unset"
        stateWithStrokeSizeSmallWidth="335px"
        hugeIcontimeAndDatesolidOverflow="unset"
        allTextDecoration="unset"
        onClick={onClick}
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/mastercard1.svg"
        text="4169 8376 5730 0029"
        icon
        stateWithStrokeSizeSmallBorderBottom="unset"
        stateWithStrokeSizeSmallAlignSelf="unset"
        stateWithStrokeSizeSmallWidth="335px"
        hugeIcontimeAndDatesolidOverflow="unset"
        allTextDecoration="unset"
        onClick={onClick}
      />
    </div>
  );
};

export default DropdownsMenuSavedCards;
