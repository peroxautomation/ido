import PropTypes from "prop-types";

const NavProfileIcon = ({ className = "" }) => {
  return (
    <a
      className={`[text-decoration:none] w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] box-border ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfaceoutlineuser.svg"
      />
    </a>
  );
};

NavProfileIcon.propTypes = {
  className: PropTypes.string,
};

export default NavProfileIcon;
