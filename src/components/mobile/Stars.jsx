import PropTypes from "prop-types";

const Stars = ({
  className = "",
  hugeIconinterfacesolidsta,
  hugeIconinterfacesolidsta1,
  hugeIconinterfacesolidsta2,
  hugeIconinterfacesolidsta3,
  hugeIconinterfacesolidsta4,
}) => {
  return (
    <div
      className={`bg-neutral-700 flex flex-row items-start justify-start py-[0.625rem] px-[1.25rem] ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconinterfacesolidsta}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconinterfacesolidsta1}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconinterfacesolidsta2}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconinterfacesolidsta3}
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
        alt=""
        src={hugeIconinterfacesolidsta4}
      />
    </div>
  );
};

Stars.propTypes = {
  className: PropTypes.string,
  hugeIconinterfacesolidsta: PropTypes.string,
  hugeIconinterfacesolidsta1: PropTypes.string,
  hugeIconinterfacesolidsta2: PropTypes.string,
  hugeIconinterfacesolidsta3: PropTypes.string,
  hugeIconinterfacesolidsta4: PropTypes.string,
};

export default Stars;
