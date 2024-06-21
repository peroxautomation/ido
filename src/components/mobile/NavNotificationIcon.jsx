import { useNavigate } from "react-router-dom";

/**
 * Notifications icon for top navbar
 * @param {*} props
 * @returns A JSX element
 */
const NavNotificationIcon = (props) => {
  const {} = props;
  const navigate = useNavigate();

  const onIconClick = () => {
    navigate("/notifications");
  };

  return (
    <img
      onClick={onIconClick}
      className={`top-navbar-icon`}
      alt=""
      src="/NavNotificationIcon.svg"
    />
  );
};

export default NavNotificationIcon;
