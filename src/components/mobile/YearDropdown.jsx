import DropdownItem2 from "./DropdownItem2";
import PropTypes from "prop-types";

/**
 * Dropdown for year filter
 */
const YearDropdown = ({ className = "" }) => {
  return (
    <div
      id="yearDropdown"
      className={`absolute top-[2.9rem] rounded-2xl overflow-hidden flex flex-col items-start justify-start z-10 max-h-[40vh] overflow-y-scroll ${className}`}
    >
      <DropdownItem2
        all="2017"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Bahrain"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2018"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Cambodia"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2019"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Denmark"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2020"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Ecuador"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2021"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Finland"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2022"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Germany"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2023"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Zimbabwe"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="2024"
        allTextDecoration="none"
        item2BorderBottom="unset"
        allHref="https://www.britannica.com/place/Zimbabwe"
        allTarget="_blank"
        item2Width="10rem"
      />
    </div>
  );
};

YearDropdown.propTypes = {
  className: PropTypes.string,
};

export default YearDropdown;
