import Stars from "./Stars";
import PropTypes from "prop-types";
/**
 * Ratings dropdown filter
 */
const RatingsDropdown = ({ className = "" }) => {
  return (
    <div
      id="ratingsDropdown"
      className={`absolute top-[2.9rem] rounded-2xl overflow-hidden flex flex-col items-start justify-start z-10 max-h-[40vh] overflow-y-scroll ${className}`}
    >
      <Stars
        hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta4="/hugeiconinterfacesolidstar2.svg"
      />
      <Stars
        hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta4="/hugeiconinterfacesolidstar3.svg"
      />
      <Stars
        hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta4="/hugeiconinterfacesolidstar3.svg"
      />
      <Stars
        hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta4="/hugeiconinterfacesolidstar3.svg"
      />
      <Stars
        hugeIconinterfacesolidsta="/hugeiconinterfacesolidstar2.svg"
        hugeIconinterfacesolidsta1="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta2="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta3="/hugeiconinterfacesolidstar3.svg"
        hugeIconinterfacesolidsta4="/hugeiconinterfacesolidstar3.svg"
      />
    </div>
  );
};

RatingsDropdown.propTypes = {
  className: PropTypes.string,
};

export default RatingsDropdown;
