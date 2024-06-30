import PropTypes from "prop-types";

const UserNameImg = ({ className = "", ellipse1254 }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[8px] text-center text-xl text-neutral-100 font-overline-regular ${className}`}
    >
      <img
        className="w-11 relative rounded-[50%] h-11 object-cover"
        alt=""
        src={ellipse1254}
      />
      <div className="relative leading-[28px] font-semibold">Username</div>
    </div>
  );
};

UserNameImg.propTypes = {
  className: PropTypes.string,
  ellipse1254: PropTypes.string,
};

export default UserNameImg;
