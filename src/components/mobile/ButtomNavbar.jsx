import NavHomeIcon from "./NavHomeIcon";
import NavSearchIcon from "./NavSearchIcon";
import NavMovesIcon from "./NavMovesIcon";
import NavProfileIcon from "./NavProfileIcon";
import CreateBtn from "./CreateBtn";
import PropTypes from "prop-types";

const ButtomNavbar = ({ className = "" }) => {
  return (
    <nav
      className={`m-0 absolute grid grid-cols-4 justify-items-center w-[100vw] right-[0rem] bottom-[0rem] left-[0rem] [backdrop-filter:blur(20px)] h-[3.5rem] ${className}`}
    >
      <img
        className="absolute h-[3.5rem]"
        alt=""
        src="/union2.svg"
      />
      <NavHomeIcon />
      <NavSearchIcon />
      <NavMovesIcon />
      <NavProfileIcon />
      <CreateBtn />
    </nav>
  );
};

ButtomNavbar.propTypes = {
  className: PropTypes.string,
};

export default ButtomNavbar;
