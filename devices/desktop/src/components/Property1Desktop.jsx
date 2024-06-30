import PropTypes from "prop-types";

const Property1Desktop = ({ className = "", text = "Or Sign up by" }) => {
  return (
    <div
      className={`w-80 flex flex-row items-center justify-center p-2 box-border text-center text-base text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="relative leading-[24px] font-semibold">{text}</div>
    </div>
  );
};

Property1Desktop.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Property1Desktop;
