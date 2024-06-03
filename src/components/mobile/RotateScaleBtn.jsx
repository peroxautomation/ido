import PropTypes from "prop-types";

const RotateScaleBtn = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[0.875rem] ${className}`}
    >
      <img
        className="w-[1.5rem] relative h-[1.5rem] hidden"
        alt=""
        src="/content-container-conponents.svg"
      />
      <img
        className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
        alt=""
        src="/hugeiconarrowsoutlinezoom-inrectangle.svg"
      />
    </button>
  );
};

RotateScaleBtn.propTypes = {
  className: PropTypes.string,
};

export default RotateScaleBtn;
