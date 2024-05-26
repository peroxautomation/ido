import PropTypes from "prop-types";

const NavMessagesIcon = ({ className = "" }) => {
  return (
    <img
      className={`w-[1.6rem] relative h-[1.6rem] ${className}`}
      alt=""
      src="/hugeiconcommunicationoutlinemail.svg"
    />
  );
};

NavMessagesIcon.propTypes = {
  className: PropTypes.string,
};

export default NavMessagesIcon;
