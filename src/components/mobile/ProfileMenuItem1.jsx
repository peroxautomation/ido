import PropTypes from "prop-types";

const ProfileMenuItem1 = ({ className = "", title, onClick}) => {
  return (
    <div
      onClick={onClick}
      className={`w-[17.5rem] flex flex-row items-center justify-between py-[0.5rem] px-[0rem] box-border text-center text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="relative leading-[1.5rem]">{title}</div>
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain"
        alt=""
        src="/hugeiconarrowssoliddirectionleft-10@2x.png"
      />
    </div>
  );
};

ProfileMenuItem1.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default ProfileMenuItem1;
