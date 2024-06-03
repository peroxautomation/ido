import DropdownItem1 from "./DropdownItem1";
import PropTypes from "prop-types";

const GenreDropdown1 = ({ className = "" }) => {
  return (
    <div
      id="challengeDropdownMenu"
      className={`absolute top-[10rem] left-[1.25rem] rounded-2xl overflow-hidden flex flex-col items-start justify-start ${className} hidden`}
    >
      <DropdownItem1
        all="Ballroom"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Contemporary"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Cultural"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Hip Hop"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Jazz"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Tap"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Folk"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Modern"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
      <DropdownItem1
        all="Latin"
        allTextDecoration="unset"
        item2BorderBottom="unset"
        item2Width="20.938rem"
        hugeIcontimeAndDatesolidt="/hugeicontime-and-datesolidtimequarter-past@2x.png"
      />
    </div>
  );
};

GenreDropdown1.propTypes = {
  className: PropTypes.string,
};

export default GenreDropdown1;
