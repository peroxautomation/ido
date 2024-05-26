import PropTypes from "prop-types";

const LOGO = ({ className = "" }) => {
  return (
    <div
      className={`relative text-[1.06rem] tracking-[0.1em] leading-[1.75rem] font-semibold font-button-1-regular text-neutral-100 text-left ${className}`}
    >
      LOGO
    </div>
  );
};

LOGO.propTypes = {
  className: PropTypes.string,
};

export default LOGO;
