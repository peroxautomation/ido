import PropTypes from "prop-types";

const ResultBtn = ({ className = "" }) => {
  return (
    <div
      className={`w-[6.313rem] rounded-md bg-neutral-800 flex flex-row items-center justify-center p-[0.5rem] box-border text-center text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="relative leading-[1rem]">View result</div>
    </div>
  );
};

ResultBtn.propTypes = {
  className: PropTypes.string,
};

export default ResultBtn;
