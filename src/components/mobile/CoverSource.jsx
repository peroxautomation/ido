import PropTypes from "prop-types";

const CoverSource = ({ className = "", cTA }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-neutral-800 flex flex-row items-center justify-center py-[0.625rem] px-[0.5rem] text-center text-[1rem] text-primary-500 font-button-1-regular ${className}`}
    >
      <div className="relative leading-[1.5rem] font-semibold">{cTA}</div>
    </div>
  );
};

CoverSource.propTypes = {
  className: PropTypes.string,
  cTA: PropTypes.string,
};

export default CoverSource;
