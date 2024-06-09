import { useMemo } from "react";
import DropdownSearch from "./DropdownSearch";
import DropdownItem1 from "./DropdownItem1";

/**
 * Dropdown list used use in sign-up country pages
 */
const Dropdown2 = ({
  className = "",
  countryDropdownTop,
  countryDropdownHeight,
  allHref,
  allTarget,
}) => {
  const countryDropdownStyle = useMemo(() => {
    return {
      top: countryDropdownTop,
      height: countryDropdownHeight,
    };
  }, [countryDropdownTop, countryDropdownHeight]);

  return (
    <div
      className={`absolute top-[160px] left-[20px] rounded-2xl h-[402px] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold ${className}`}
      style={countryDropdownStyle}
    >
      <DropdownSearch />
      <DropdownItem1 placeholder="Afghanistan" />
      <DropdownItem1
        placeholder="Bahrain"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Bahrain"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Cambodia"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Cambodia"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Denmark"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Denmark"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Ecuador"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Ecuador"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Finland"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Finland"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Germany"
        allTextDecoration="none"
        item2BorderBottom="1px solid #1b1b1b"
        allHref="https://www.britannica.com/place/Germany"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Zimbabwe"
        allTextDecoration="none"
        item2BorderBottom="unset"
        allHref="https://www.britannica.com/place/Zimbabwe"
        allTarget="_blank"
      />
      <DropdownItem1
        placeholder="Nigeria"
        allTextDecoration="unset"
        item2BorderBottom="unset"
      />
    </div>
  );
};

export default Dropdown2;
