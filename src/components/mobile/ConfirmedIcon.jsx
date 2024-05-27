import PropTypes from "prop-types";

const ConfirmedIcon = ({ className = "" }) => {
  return (
    <img
      className={`w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/checkCircleRed.svg"
    />
  );
};

ConfirmedIcon.propTypes = {
  className: PropTypes.string,
};

export default ConfirmedIcon;
