import LOGO from "./LOGO";
import NavNotificationIcon from "./NavNotificationIcon";
import NavMessagesIcon from "./NavMessagesIcon";

/**
 * Top navbar component
 * @param {*} param0
 * @returns
 */
const TopNavbar = (props) => {
  const {} = props;
  return (
    <header className={`top-navbar`}>
      <LOGO />
      <div className="flex flex-row items-start justify-start gap-[1rem]">
        <NavNotificationIcon />
        <NavMessagesIcon />
      </div>
    </header>
  );
};

export default TopNavbar;
