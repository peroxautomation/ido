import PropTypes from "prop-types";

const NavSearchIcon = ({ isSelected, className = ""}) => {
  return (
    <a
      className={`[text-decoration:none] w-[5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] box-border ${className}`}
      href= { (isSelected) ? "" : '/search'}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src={ (isSelected) ? "/navbarSearchIconFilled.svg" : "/navbarSearchIconOutline.svg"}
      />
    </a>
  );
};

NavSearchIcon.propTypes = {
  className: PropTypes.string,
};

export default NavSearchIcon;
