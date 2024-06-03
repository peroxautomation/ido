import PropTypes from "prop-types";

const MovesBtn = ({ className = "", placeholder, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[4rem] rounded-md bg-neutral-800 flex flex-row items-center justify-center py-[0.25rem] px-[0.375rem] box-border text-right text-[0.75rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="relative leading-[1rem]">{placeholder}</div>
    </div>
  );
};

MovesBtn.propTypes = {
  className: PropTypes.string,
  unrelate: PropTypes.string,
};

export default MovesBtn;
