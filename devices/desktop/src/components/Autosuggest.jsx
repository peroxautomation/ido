import { useMemo } from "react";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";
import PropTypes from "prop-types";

const Autosuggest = ({ className = "", propTop, propLeft }) => {
  const autosuggestStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className={`absolute top-[462px] left-[212px] rounded-2xl w-80 overflow-hidden flex flex-col items-start justify-start ${className}`}
      style={autosuggestStyle}
    >
      <StateWithStrokeSizeSmall
        hugeIconmultimediaAndAudi="/hugeiconmultimedia-and-audiosolidmusic-01.svg"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
        text="Ballroom"
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
        text="Contemporary"
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
        text="Cultural"
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
        text="Hip Hop"
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
        text="Jazz"
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
        text="Tap"
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
        text="Folk"
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
        text="Modern"
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
        text="Latin"
        icon={false}
        stateWithStrokeSizeSmallBorderBottom="unset"
        stateWithStrokeSizeSmallAlignSelf="stretch"
        stateWithStrokeSizeSmallWidth="unset"
        hugeIcontimeAndDatesolidOverflow="hidden"
        allTextDecoration="unset"
      />
    </div>
  );
};

Autosuggest.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Autosuggest;
