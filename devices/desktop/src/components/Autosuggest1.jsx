import { useMemo } from "react";
import StateWithStrokeSizeSmall from "./StateWithStrokeSizeSmall";
import PropTypes from "prop-types";

const Autosuggest1 = ({
  className = "",
  all,
  all1,
  allHref,
  all2,
  allHref1,
  all3,
  allHref2,
  all4,
  allHref3,
  all5,
  allHref4,
  all6,
  allHref5,
  all7,
  propTop,
  propLeft,
  propTextDecoration,
}) => {
  const autosuggest1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const allStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className={`absolute top-[527px] left-[380px] rounded-2xl w-[168px] overflow-hidden flex flex-col items-start justify-start ${className}`}
      style={autosuggest1Style}
    >
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
    </div>
  );
};

Autosuggest1.propTypes = {
  className: PropTypes.string,
  all: PropTypes.string,
  all1: PropTypes.string,
  allHref: PropTypes.string.isRequired,
  all2: PropTypes.string,
  allHref1: PropTypes.string.isRequired,
  all3: PropTypes.string,
  allHref2: PropTypes.string.isRequired,
  all4: PropTypes.string,
  allHref3: PropTypes.string.isRequired,
  all5: PropTypes.string,
  allHref4: PropTypes.string.isRequired,
  all6: PropTypes.string,
  allHref5: PropTypes.string.isRequired,
  all7: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default Autosuggest1;
