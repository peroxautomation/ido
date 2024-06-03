import PropTypes from "prop-types";

const CreateTitle = ({ className = "", titleText }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_40px)] top-[2.5rem] right-[1.25rem] left-[1.25rem] rounded-xl bg-neutral-800 flex flex-row items-center justify-center text-left text-[0.75rem] text-neutral-100 font-overline-semibold ${className}`}
    >
      <div className="flex-1 rounded-xl bg-neutral-700 flex flex-row items-center justify-center py-[0.75rem] px-[0.25rem]">
        <div className="relative leading-[1rem] font-semibold">{titleText}</div>
      </div>
      <div className="w-[10.469rem] rounded-xl hidden flex-row items-center justify-center py-[0.75rem] px-[0.25rem] box-border text-neutral-500">
        <div className="relative leading-[1rem]">Cover</div>
      </div>
    </div>
  );
};

CreateTitle.propTypes = {
  className: PropTypes.string,
  free: PropTypes.string,
};

export default CreateTitle;
