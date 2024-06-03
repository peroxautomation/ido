import PropTypes from "prop-types";

const Radio2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.5rem] text-left text-[1rem] text-neutral-100 font-button-1-regular ${className}`}
    >
      <div className="stretch relative leading-[1.5rem] font-semibold hidden">
        Does the title have any meaning?
      </div>
      <div className="w-[20.938rem] rounded-xl bg-white-8 flex flex-row items-start justify-start py-[0.75rem] px-[1rem] box-border gap-[0.5rem]">
        <div className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0">
          <div className="absolute top-[0.125rem] left-[0.125rem] rounded-[50%] box-border w-[1.25rem] h-[1.25rem] border-[1.5px] border-solid border-neutral-500" />
        </div>
        <div className="flex-1 relative leading-[1.5rem] font-semibold">No</div>
      </div>
    </div>
  );
};

Radio2.propTypes = {
  className: PropTypes.string,
};

export default Radio2;
