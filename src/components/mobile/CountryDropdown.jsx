import DropdownItem2 from "./DropdownItem2";
import PropTypes from "prop-types";
/**
 * Country filter dropdown
 */
const CountryDropdown = ({ className = "" }) => {
  return (
    <div
      id="countryDropdown"
      className={`absolute top-[2.9rem] rounded-2xl overflow-hidden flex flex-col items-start justify-start z-20 max-h-[50vh] overflow-y-scroll ${className}`}
    >
      <DropdownItem2
        all="Afghanistan"
        allTextDecoration="unset"
        item2BorderBottom="1px solid #1b1b1b"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Bahrain"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Bahrain"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Cambodia"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Cambodia"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Denmark"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Denmark"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Ecuador"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Ecuador"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Finland"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Finland"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Germany"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Germany"
        allTarget="_blank"
        item2Width="10rem"
      />
      <DropdownItem2
        all="Zimbabwe"
        allTextDecoration="none"
        item2BorderBottom="unset"
        allHref="https://www.britannica.com/place/Zimbabwe"
        allTarget="_blank"
        item2Width="10rem"
      />
    </div>
  );
};

CountryDropdown.propTypes = {
  className: PropTypes.string,
};

export default CountryDropdown;
