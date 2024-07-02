import { useNavigate } from "react-router-dom";
/**
 * Message icon for top navbar
 * @param {*} props
 * @returns A JSX element
 */
const NavMessagesIcon = (props) => {
  const {} = props;
  const navigate = useNavigate();

  const onMessagesClick = () => {
    navigate("/messages");
  };

  return (
    <img
      onClick={onMessagesClick}
      className={`top-navbar-icon`}
      alt=""
      src="/NavMessagesIcon.svg"
    />
  );
};

export default NavMessagesIcon;
