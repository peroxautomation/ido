import { useMemo } from "react";
import PropTypes from "prop-types";

const Property = ({
  className = "",
  hugeIconinterfacesolidsta,
  hugeIconinterfacesolidsta1,
  hugeIconinterfacesolidsta2,
  hugeIconinterfacesolidsta3,
  property15AlignSelf,
}) => {
  const property15Style = useMemo(() => {
    return {
      alignSelf: property15AlignSelf,
    };
  }, [property15AlignSelf]);

  return (
    <div
      className={`bg-neutral-700 flex flex-row items-start justify-start py-2.5 px-5 ${className}`}
      style={property15Style}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidstar.svg"
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfacesolidsta}
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfacesolidsta1}
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfacesolidsta2}
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={hugeIconinterfacesolidsta3}
      />
    </div>
  );
};

Property.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsta: PropTypes.string,
  hugeIconinterfacesolidsta1: PropTypes.string,
  hugeIconinterfacesolidsta2: PropTypes.string,
  hugeIconinterfacesolidsta3: PropTypes.string,

  /** Style props */
  property15AlignSelf: PropTypes.any,
};

export default Property;
