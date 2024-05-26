import PropTypes from "prop-types";

const NavNotificationIcon = ({ className = "" }) => {
  return (
    <img
      className={`w-[1.6rem] relative h-[1.6rem] overflow-hidden shrink-0 ${className}`}
      alt=""
      src="/NavNotificationIcon.svg"
    />
  );
};

NavNotificationIcon.propTypes = {
  className: PropTypes.string,
};

export default NavNotificationIcon;
