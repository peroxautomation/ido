import LOGO from "./LOGO";
import NavNotificationIcon from "./NavNotificationIcon";
import NavMessagesIcon from "./NavMessagesIcon";
import PropTypes from "prop-types";

const TopNavbar = ({ className = "" }) => {
  return (
    <header
      className={`absolute w-full h-[9vh] top-[2.5rem] right-[0rem] left-[0rem] [backdrop-filter:blur(20px)] bg-white-8 flex flex-row items-center justify-between py-[1rem] px-[1.25rem] box-border text-left text-[0.875rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <LOGO />
      <div className="flex flex-row items-start justify-start gap-[1rem]">
        <NavNotificationIcon />
        <NavMessagesIcon />
      </div>
    </header>
  );
};

TopNavbar.propTypes = {
  className: PropTypes.string,
};

export default TopNavbar;