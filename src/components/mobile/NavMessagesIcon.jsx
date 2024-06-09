import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const NavMessagesIcon = ({ className = "" }) => {
  const navigate = useNavigate();
  const onMessagesClick = () => {
    navigate('/messages')
  }

  return (
    <img
      onClick={onMessagesClick}
      className={`w-[1.6rem] relative h-[1.6rem] ${className}`}
      alt=""
      src="/NavMessagesIcon.svg"
    />
  );
};

NavMessagesIcon.propTypes = {
  className: PropTypes.string,
};

export default NavMessagesIcon;
