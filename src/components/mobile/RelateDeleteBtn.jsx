import PropTypes from "prop-types";

const RelateDeleteBtn = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.25rem] px-[0.375rem] bg-neutral-800 w-[4rem] rounded-md flex flex-row items-center justify-center box-border ${className}`}
    >
      <div className="relative text-[0.75rem] leading-[1rem] font-button-1-regular text-neutral-100 text-right">
        Delete
      </div>
    </button>
  );
};

RelateDeleteBtn.propTypes = {
  className: PropTypes.string,
};

export default RelateDeleteBtn;
