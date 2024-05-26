import PropTypes from "prop-types";

const NavHomeIcon = ({ className = "" }) => {
  return (
    <div
      className={`box-border w-[4.5rem] flex flex-row items-center justify-center py-[1rem] px-[0.5rem] border-b-[3px] border-solid border-primary-500 ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconinterfacesolidhome-04.svg"
      />
    </div>
  );
};

NavHomeIcon.propTypes = {
  className: PropTypes.string,
};

export default NavHomeIcon;
