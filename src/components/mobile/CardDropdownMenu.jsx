import CardDropdownItem from "./CardDropdownItem";
import PropTypes from "prop-types";

const CardDropdownMenu = ({ className = "" }) => {
  return (
    <div
      id="CardDropdownMenu"
      className={`hidden z-10 absolute top-[4.75rem] shadow-[0px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-2xl overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <CardDropdownItem
        masterCard="/mastercard.svg"
        all="4169 9028 3716 5583"
      />
      <CardDropdownItem
        masterCard="/mastercard.svg"
        all="4169 4763 6720 7390"
        item2BorderBottom="1px solid #1b1b1b"
      />
      <CardDropdownItem
        masterCard="/visa.svg"
        all="9073 6379 7134 8104"
        item2BorderBottom="1px solid #1b1b1b"
      />
      <CardDropdownItem
        masterCard="/mastercard.svg"
        all="4169 8376 5730 0029"
        item2BorderBottom="unset"
      />
    </div>
  );
};

CardDropdownMenu.propTypes = {
  className: PropTypes.string,
};

export default CardDropdownMenu;
