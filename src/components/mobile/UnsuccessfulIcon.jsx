import PropTypes from "prop-types";

const UnsuccessfulIcon = ({ className = "" }) => {
  return (
    <img
      className={`w-[3.5rem] relative h-[3.5rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/hugeiconinterfaceoutlinewarning1.svg"
    />
  );
};

UnsuccessfulIcon.propTypes = {
  className: PropTypes.string,
};

export default UnsuccessfulIcon;
