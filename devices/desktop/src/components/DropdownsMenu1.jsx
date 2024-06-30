import { useMemo } from "react";
import VariantsForDropdown from "./VariantsForDropdown";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";

const DropdownsMenu2 = (props) => {
  const { hugeIcontimeAndDatesolidTop } = props
  const dropdownsMenu1Style = useMemo(() => {
    return {
      top: hugeIcontimeAndDatesolidTop,
    };
  }, [hugeIcontimeAndDatesolidTop]);

  return (
    <div
      className={`absolute top-[343px] left-[560px] rounded-2xl w-80 h-[270px] overflow-hidden flex flex-col items-start justify-start`}
      style={dropdownsMenu1Style}
    >
      <VariantsForDropdown
        hugeIconinterfacesolidsea="/hugeiconinterfacesolidsearch-022.svg"
        searchInputWidth="unset"
        searchInputFlex="1"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Afghanistan"
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
        text="Bahrain"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Cambodia"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Denmark"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Ecuador"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Finland"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Germany"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="1px solid #1b1b1b"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Zimbabwe"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="unset"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="none"
      />
      <img
        className="w-0 absolute !m-[0] top-[40px] right-[8px] h-[119px] object-contain z-[9]"
        alt=""
        src="/line-55.svg"
      />
    </div>
  );
};


export default DropdownsMenu2;
