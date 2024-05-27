import DropdownItem2 from "./DropdownItem2";
import PropTypes from "prop-types";
/**
 * Genere dropdown filter
 */
const GenreDropdown = ({ className = "" }) => {
  return (
    <div
      id="genreDropdown"
      className={`absolute top-[2.9rem] rounded-2xl overflow-hidden flex flex-col items-start justify-start ${className} z-20 max-h-[50vh] overflow-y-scroll `}
    >
      <DropdownItem2
        all="Ballroom"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Contemporary"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Cultural"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Hip Hop"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Jazz"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Tap"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Folk"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Modern"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Latin"
        allTextDecoration="unset"
        item2BorderBottom="unset"
        item2Width="10rem"
      />
    </div>
  );
};

GenreDropdown.propTypes = {
  className: PropTypes.string,
};

export default GenreDropdown;
